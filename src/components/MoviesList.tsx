import React from "react";
import MovieModelv from "../model/Movie";

import Movie from "./Movie";
import "./MoviesList.css";
interface MovieListProps {
  movies: MovieModelv[];
}
const MovieList: React.FC<MovieListProps> = (props) => {
  return (
    <ul className="movies-list">
      {props.movies.map((movie) => (
        <Movie key={movie.id} Movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
