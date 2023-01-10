import React, { useEffect, useState, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import MovieModel from "./model/Movie";
import AddMovie from "./components/AddMovie";

const App: React.FC = () => {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(false);
    try {
      const reponse = await fetch(
        "https://react-course-e0248-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
      );
      if (!reponse.ok) {
        throw new Error("Something went wrong :(");
      }
      const data = await reponse.json();
      const loadedMovies: MovieModel[] = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovies(loadedMovies);
    } catch (error: any) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  // function fetchMovieHandler() {
  //   fetch("https://swapi.dev/api/films/")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformedMovies: MovieModel[] = data.results.map(
  //         (movieData: any) => {
  //           return {
  //             id: movieData.episode_id,
  //             title: movieData.title,
  //             openingText: movieData.opening_crawl,
  //             releaseDate: movieData.release_date,
  //           };
  //         }
  //       );
  //       setMovies(transformedMovies);
  //     });
  // }
  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);
  async function addMovieHandler(movie: MovieModel) {
    const response = await fetch(
      "https://react-course-e0248-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    fetchMovieHandler();
  }
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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default App;
