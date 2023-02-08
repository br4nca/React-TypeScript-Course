import React from "react";
import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";
interface NewEventPageProps {}
const NewEventPage: React.FC<NewEventPageProps> = (props) => {
  return <EventForm method="post" />;
};

export default NewEventPage;
