import React from "react";
import { NavLink } from "react-router-dom";
import "./EventsNavigation.css";
interface EventsNavigationProps {}
const EventsNavigation: React.FC<EventsNavigationProps> = (props) => {
  return (
    <header className="events_header">
      <nav>
        <ul className="list">
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events/new"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default EventsNavigation;
