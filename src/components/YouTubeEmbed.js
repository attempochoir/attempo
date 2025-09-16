export default function YouTubeEmbed({ id, title }) {
  return (
    <div className="aspect-video">
      <iframe
        className="w-full h-full rounded-xl shadow"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
