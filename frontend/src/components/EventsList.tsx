import React from "react";
import { Link } from "react-router-dom";
import EventObject from "../models/EventObject";
import "./EventsList.css";
interface EventsListProps {
  events: EventObject[];
}
const EventsList: React.FC<EventsListProps> = ({ events }) => {
  return (
    <div className="events">
      <h1>All Events</h1>
      <ul className="list">
        {events.map((event) => (
          <li key={event.id} className="item">
            <Link to={`/events/${event.id}`}>
              <img src={event.image} alt={event.title} />
              <div className="content">
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsList;
