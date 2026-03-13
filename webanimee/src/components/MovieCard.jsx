function MovieCard({ movie, isActive, onPreviewMovie, onOpenMovie }) {
  return (
    <button
      type="button"
      className={`movie-card ${isActive ? "is-active" : ""}`}
      onMouseEnter={() => onPreviewMovie(movie)}
      onFocus={() => onPreviewMovie(movie)}
      onClick={() => onOpenMovie(movie)}
    >
      <img className="movie-card-image" src={movie.image} alt={movie.movieName} />

      <div className="movie-card-content">
        <p className="movie-card-episode">Episode {movie.episode}</p>
        <h3 className="movie-card-title">{movie.movieName}</h3>
      </div>
    </button>
  );
}

export default MovieCard;
