import React from "react";
import { NavLink, useRouteLoaderData } from "react-router-dom";
import "./EventsNavigation.css";
interface EventsNavigationProps {}
const EventsNavigation: React.FC<EventsNavigationProps> = (props) => {
  const token = useRouteLoaderData("root");
  return (
    <header className="events_header">
      <nav>
        <ul className="list">
          <>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end
              >
                All Events
              </NavLink>
            </li>
            {token && (
              <li>
                <NavLink
                  to="/events/new"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  New Event
                </NavLink>
              </li>
            )}
          </>
        </ul>
      </nav>
    </header>
  );
};

export default EventsNavigation;
