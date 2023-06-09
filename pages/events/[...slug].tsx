import { Button, ErrorAlert } from "@/components";
import { getFilteredEvents } from "@/dummy-data";
import { EventList, ResultsTitle } from "@/features";
import { useRouter } from "next/router";

const FilteredEvent = () => {
  const router = useRouter();
  const filterData = router.query.slug || [];

  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }
  const year = +filterData[0];
  const month = +filterData[1];
  if (
    isNaN(month) ||
    isNaN(year) ||
    year > 2035 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <ErrorAlert>
        <p>Wrong data entered.</p>
      </ErrorAlert>
    );
  }
  const filteredEvents = getFilteredEvents({
    year,
    month,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No event on this date.</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
};
export default FilteredEvent;
