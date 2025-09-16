#!/bin/bash

# Script rápido para hacer deploy en Vercel vía GitHub
# Uso: ./deploy.sh "mensaje del commit"

# Verifica si el usuario pasó un mensaje
if [ -z "$1" ]; then
  echo "❌ Error: Debes añadir un mensaje de commit."
  echo "👉 Ejemplo: ./deploy.sh 'Actualizar SEO en Home'"
  exit 1
fi

# Paso 1: añadir cambios
git add -A

# Paso 2: commit con el mensaje recibido
git commit -m "$1"

# Paso 3: subir al repositorio remoto
git push

echo "✅ Cambios subidos. Vercel hará el deploy automáticamente 🚀"
