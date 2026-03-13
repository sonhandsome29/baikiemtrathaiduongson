function MovieDetail({ movie, onBack }) {
  return (
    <section className="movie-detail">
      <button type="button" className="back-button" onClick={onBack}>
        Back
      </button>

      <div className="movie-detail-card">
        <img
          className="movie-detail-image"
          src={movie.image}
          alt={movie.movieName}
        />

        <div className="movie-detail-content">
          <p className="movie-detail-label">Episode {movie.episode}</p>
          <h1 className="movie-detail-title">{movie.movieName}</h1>
          <p className="movie-detail-description">{movie.description}</p>
        </div>
      </div>
    </section>
  );
}

export default MovieDetail;
