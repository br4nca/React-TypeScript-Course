import React, { useRef } from "react";
import MovieModelv from "../model/Movie";

import "./AddMovie.css";
interface AddMovieProps {
  onAddMovie: (movie: MovieModelv) => void;
}
const AddMovie: React.FC<AddMovieProps> = (props, ref) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const openingTextRef = useRef<HTMLTextAreaElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    // could add validation here...

    const movie: MovieModelv = {
      id: Math.random().toString(),
      title: (titleRef.current as HTMLInputElement).value,
      openingText: (openingTextRef.current as HTMLTextAreaElement).value,
      releaseDate: (releaseDateRef.current as HTMLInputElement).value,
    };
    props.onAddMovie(movie);
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
