import React from "react";

function MovieInfo({ heading, description }) {
  return (
    <div className="movie__info">
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
}

export default MovieInfo;
