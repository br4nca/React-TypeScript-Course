import { Suspense } from "react";
import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import EventObject from "../models/EventObject";
interface EventDetailPageProps {}
const EventDetailPage: React.FC<EventDetailPageProps> = (props) => {
  const data = useRouteLoaderData("event-detail") as {
    event: EventObject;
    events: EventObject[];
  };
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}></p>}>
        <Await resolve={data.event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}></p>}>
        <Await resolve={data.events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;
async function loadEvent(id: string) {
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
export async function loader({ request, params }: any) {
  return defer({
    event: await loadEvent(params.id),
    events: loadEvents(),
  });
}
export async function action({ request, params }: any) {
  const response = await fetch("http://localhost:8080/events/" + params.id, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
