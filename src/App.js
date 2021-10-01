import "./App.css";

import { useState, useEffect } from "react";

// Components
import MovieDetails from "./components/MovieDetails";
import Spinner from "./components/Spinner";

import { getMovieDetailsById } from "./utils";

function App() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovieDetailsById("tt4116284")
      .then((data) => {
        setMovie(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>My App </h1>
      {isLoading ? <Spinner /> : <MovieDetails movie={movie} />}
    </div>
  );
}

export default App;
