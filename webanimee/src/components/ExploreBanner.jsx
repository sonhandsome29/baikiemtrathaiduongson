function ExploreBanner({ movie }) {
  if (!movie) {
    return <div className="banner" />;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie.image})`,
      }}
    >
      <div className="banner-content">
        <h3 className="banner-title">{movie.movieName}</h3>
        <p className="banner-description">{movie.description}</p>
      </div>
    </div>
  );
}

export default ExploreBanner;
