import "./MovieCard.css";

export default function MovieCard({ title, genres }) {
  return (
    <article className="movie-card">
      <h2>{title}</h2>
      <small className="movie-card__genres">{genres}</small>
    </article>
  );
}
