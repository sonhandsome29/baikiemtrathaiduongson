import MovieCard from "./MovieCard";

function NewRelease({ movies, previewMovie, onPreviewMovie, onOpenMovie }) {
  return (
    <div className="release-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isActive={previewMovie?.id === movie.id}
          onPreviewMovie={onPreviewMovie}
          onOpenMovie={onOpenMovie}
        />
      ))}
    </div>
  );
}

export default NewRelease;
