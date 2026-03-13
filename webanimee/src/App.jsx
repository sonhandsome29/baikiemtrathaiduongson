import { useEffect, useState } from "react";
import ExploreBanner from "./components/ExploreBanner";
import Header from "./components/Header";
import MovieDetail from "./components/MovieDetail";
import NewRelease from "./components/NewRelease";
import "./App.css";

const API_URL =
  "https://mindx-mockup-server.vercel.app/api/resources/movie?apiKey=69b4134b7cbf89a9c2271a7d";

function getMovieList(payload) {
  return payload?.data?.data?.[0]?.data || [];
}

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [detailMovie, setDetailMovie] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const result = await response.json();
        const movieList = getMovieList(result);

        setMovies(movieList);
        setSelectedMovie(movieList[0] || null);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Can not fetch movies", error);
        }
      }
    };

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, []);

  const handleCloseDetail = () => {
    setDetailMovie(null);
  };

  if (detailMovie) {
    return (
      <div className="app">
        <div className="page">
          <MovieDetail movie={detailMovie} onBack={handleCloseDetail} />
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="page">
        <Header />

        <section id="home" className="explore-section">
          <h2 className="section-title">Explore</h2>
          <p className="section-subtitle">What are you gonna watch today ?</p>
          <ExploreBanner movie={selectedMovie} />
        </section>

        <section id="list-anime" className="release-section">
          <h2 className="section-title">New Release</h2>
          <NewRelease
            movies={movies}
            previewMovie={selectedMovie}
            onPreviewMovie={setSelectedMovie}
            onOpenMovie={setDetailMovie}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
