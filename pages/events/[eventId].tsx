import { ErrorAlert } from "@/components";
import { getEventById } from "@/dummy-data";
import { EventContent, EventLogistics, EventSummary } from "@/features";
import { useRouter } from "next/router";

const EventDetail = () => {
  const { query } = useRouter();
  const eventId = query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>Event not found.</p>
      </ErrorAlert>
    );
  }
  const { date, description, id, image, isFeatured, location, title } = event;
  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
};
export default EventDetail;
