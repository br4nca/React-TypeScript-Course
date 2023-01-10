import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import MovieModel from "./model/Movie";
import AddMovie from "./components/AddMovie";
import useHttp from "./hooks/use-http";

const App: React.FC = () => {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const { isLoading, error, fetchMovieHandler: fetchMovies } = useHttp();
  const fetchMoviesHandler = useCallback(() => {
    const transformMovies = (moviesObj: MovieModel[]) => {
      const loadedMovies: MovieModel[] = [];
      for (const key in moviesObj) {
        loadedMovies.push({
          id: key,
          title: moviesObj[key].title,
          openingText: moviesObj[key].openingText,
          releaseDate: moviesObj[key].releaseDate,
        });
      }
      setMovies(loadedMovies);
    };
    fetchMovies(
      {
        url: "https://react-course-e0248-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      },
      transformMovies
    );
  }, [fetchMovies]);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  let content = <p>Found no movies.</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie fetchMovies={fetchMoviesHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default App;
