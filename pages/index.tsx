import { EventList, FeaturedEvent } from "@/features";
import { useEffect, useState } from "react";
import { getFeaturedEvents } from "../dummy-data";

const Homepage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};
export default Homepage;
