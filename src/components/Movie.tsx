import React from "react";
import MovieModelv from "../model/Movie";
import "./Movie.css";
interface MovieProps {
  Movie: MovieModelv;
}
const Movie: React.FC<MovieProps> = (props) => {
  return (
    <li className="movie">
      <h2>{props.Movie.title}</h2>
      <h3>{props.Movie.releaseDate}</h3>
      <p>{props.Movie.openingText}</p>
    </li>
  );
};

export default Movie;
