import React from "react";
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";
import EventObject from "../models/EventObject";
import "./EventItem.css";
interface EventItemProps {
  event: EventObject;
}
const EventItem: React.FC<EventItemProps> = ({ event }) => {
  const submit = useSubmit();
  const token = useRouteLoaderData("root");
  function startDeleteHandler() {
    if (window.confirm("Are you sure?")) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className="event">
      <>
        <img src={event.image} alt={event.title} />
        <h1>{event.title}</h1>
        <time>{event.date}</time>
        <p>{event.description}</p>
        {token && (
          <menu className="event_item_actions">
            <Link to="edit">Edit</Link>
            <button onClick={startDeleteHandler}>Delete</button>
          </menu>
        )}
      </>
    </article>
  );
};

export default EventItem;
