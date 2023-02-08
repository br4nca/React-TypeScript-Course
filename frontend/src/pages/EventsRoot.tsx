import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";
interface EventsRootLayoutProps {}
const EventsRootLayout: React.FC<EventsRootLayoutProps> = (props) => {
  return (
    <Fragment>
      <EventsNavigation />
      <Outlet />
    </Fragment>
  );
};

export default EventsRootLayout;
