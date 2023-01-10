import React, { useRef } from "react";
import MovieModel from "../model/Movie";
import useHttp from "../hooks/use-http";
import "./AddMovie.css";
interface AddMovieProps {
  fetchMovies: () => void;
}
const AddMovie: React.FC<AddMovieProps> = (props, ref) => {
  const { fetchMovieHandler: sendMovie } = useHttp();
  const titleRef = useRef<HTMLInputElement>(null);
  const openingTextRef = useRef<HTMLTextAreaElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    // could add validation here...

    const movie: MovieModel = {
      id: Math.random().toString(),
      title: (titleRef.current as HTMLInputElement).value,
      openingText: (openingTextRef.current as HTMLTextAreaElement).value,
      releaseDate: (releaseDateRef.current as HTMLInputElement).value,
    };
    addMovieHandler(movie);
  }
  async function addMovieHandler(movie: MovieModel) {
    sendMovie(
      {
        url: "https://react-course-e0248-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: movie,
      },
      () => {
        props.fetchMovies();
      }
    );
    //rifai fetch
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="control">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className="control">
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows={5} id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className="control">
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
