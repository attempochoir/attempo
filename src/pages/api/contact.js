// src/pages/api/contact.js

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const {
    user_name,
    user_email,
    user_phone,
    user_date,
    user_city,
    message,
    recaptchaToken, // puede venir "not-verified" (fallback) o un token v3 real
  } = req.body || {};

  if (!user_name || !user_email) {
    return res.status(400).send("Faltan campos obligatorios: user_name y user_email");
  }

  // --- Meta cliente (para el interno)
  const client_ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "";
  const user_agent = req.headers["user-agent"] || "";

  // --- 1) Verificación reCAPTCHA (con fallback permitido)
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  let recaptcha_status = "unverified";
  let recaptcha_score = null;
  let recaptcha_action = null;

  try {
    if (recaptchaToken && recaptchaToken !== "not-verified" && secret) {
      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret,
          response: recaptchaToken,
          // opcional: remoteip: client_ip
        }),
      });

      const verifyData = await verifyRes.json();
      // Log solo servidor
      console.log("reCAPTCHA verifyData:", verifyData);

      recaptcha_score = typeof verifyData.score === "number" ? verifyData.score : null;
      recaptcha_action = verifyData.action || null;

      if (verifyData.success === true) {
        // Ajusta el umbral si quieres ser más o menos estricto
        if (recaptcha_score === null || recaptcha_score >= 0.3) {
          recaptcha_status = "verified";
        } else {
          // marcado como sospechoso, pero se **acepta** (cambia aquí si quieres bloquear)
          recaptcha_status = "verified_low";
          // 👉 para BLOQUEAR, descomenta:
          // return res.status(400).send(`reCAPTCHA score bajo (${recaptcha_score}). Envío bloqueado.`);
        }
      } else {
        // Falla verificación → lo marcamos como no verificado pero NO bloqueamos
        recaptcha_status = "unverified";
        // 👉 para BLOQUEAR, descomenta:
        // return res
        //   .status(400)
        //   .send(`reCAPTCHA no válido: ${(verifyData["error-codes"] || []).join(",")}`);
      }
    } else {
      // sin token real (adblock/fallback) → aceptamos pero etiquetamos
      recaptcha_status = "unverified";
    }
  } catch (e) {
    console.error("reCAPTCHA server error:", e);
    // fallo en la verificación → aceptamos pero etiquetamos
    recaptcha_status = "unverified";
  }

  // --- 2) Envío EmailJS (Strict Mode → requiere Private Key)
  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE;
  const user_id    = process.env.NEXT_PUBLIC_EMAILJS_KEY; // Public Key
  const tpl_auto   = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTOREPLY;
  const tpl_int    = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_INTERNAL;
  const private_key = process.env.EMAILJS_PRIVATE_KEY;

  if (!service_id || !user_id || !tpl_auto || !tpl_int) {
    return res.status(500).send("Faltan variables de entorno EmailJS (públicas)");
  }
  if (!private_key) {
    return res.status(500).send("Falta EMAILJS_PRIVATE_KEY (Strict Mode)");
  }

  const endpoint = "https://api.emailjs.com/api/v1.0/email/send";

  // Prefijo opcional para el asunto del template interno (añádelo en tu template)
  // Ejemplo en EmailJS subject: "{{subject_prefix}} Nueva solicitud de contacto — Attempo"
  const subject_prefix =
    recaptcha_status === "verified" ? "" :
    recaptcha_status === "verified_low" ? "[POSIBLE SPAM] " :
    "[NO VERIFICADO] ";

  const baseParams = {
    user_name,
    user_email,
    user_phone,
    user_date,
    user_city,
    message,
    // meta útiles para el **template interno**
    recaptcha_status,
    recaptcha_score: recaptcha_score === null ? "" : String(recaptcha_score),
    recaptcha_action: recaptcha_action || "",
    client_ip,
    user_agent,
    subject_prefix,
  };

  const payload = (template_id) => ({
    service_id,
    template_id,
    user_id,
    accessToken: private_key,
    template_params: baseParams,
  });

  try {
    const [ri, ra] = await Promise.all([
      // interno (a vosotros)
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload(tpl_int)),
      }),
      // auto-reply (al cliente)
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload(tpl_auto)),
      }),
    ]);

    if (!ri.ok || !ra.ok) {
      const errInt  = !ri.ok ? await ri.text() : null;
      const errAuto = !ra.ok ? await ra.text() : null;
      console.error("EmailJS error:", {
        statusInt: ri.status, errInt,
        statusAuto: ra.status, errAuto
      });
      return res
        .status(502)
        .send(`Fallo al enviar con EmailJS. Interno: [${ri.status}] ${errInt} | Auto: [${ra.status}] ${errAuto}`);
    }

    return res.status(200).send("OK");
  } catch (e) {
    console.error("EmailJS server exception:", e);
    return res.status(500).send("Error interno enviando correo");
  }
}
