import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
import EventObject from "../models/EventObject";
interface EditEventPageProps {}
const EditEventPage: React.FC<EditEventPageProps> = (props) => {
  const data = useRouteLoaderData("event-detail") as { event: EventObject };

  return <EventForm method="patch" event={data.event} />;
};

export default EditEventPage;
