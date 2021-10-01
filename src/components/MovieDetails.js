import React from "react";

import MovieInfo from "./MovieInfo";

function MovieDetails({ movie }) {
  return (
    <article className="movie">
      <div className="movie__left-col">
        <img
          className="movie__poster"
          src={movie.Poster}
          alt={movie.Title}
          title={movie.Title}
        />
      </div>
      <div className="movie__right-col">
        <div className="flex">
          <h2 className="movie__title">{movie.Title}</h2>
          <div className="movie__rating">{movie.imdbRating}</div>
        </div>

        <ul className="movie__tags">
          <li>{movie.Rated}</li>
          <li>{movie.Runtime}</li>
          <li>{movie.Genre}</li>
        </ul>

        <MovieInfo heading="Plot" description={movie.Plot} />
        <MovieInfo heading="Actors" description={movie.Actors} />
      </div>
    </article>
  );
}

export default MovieDetails;
