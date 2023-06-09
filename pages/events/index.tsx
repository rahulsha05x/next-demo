import { EventList } from "@/features";
import { EventSearch } from "@/features/Events/components/EventSearch/EventSearch";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAllEvents, getFeaturedEvents } from "../../dummy-data";

type FeaturedEvent = {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
};

const AllEventsPage = () => {
  const router = useRouter();
  const allEvents = getAllEvents();

  const searchHandler = (year: string, month: string) => {
    if (!year || !month) {
      return;
    }
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <EventSearch onSearch={searchHandler} />
      <EventList events={allEvents} />
    </>
  );
};
export default AllEventsPage;
