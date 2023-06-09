import { FC } from "react";
import { EventItem } from "../EventItem/EventItem";
import classes from "./EventList.module.css";

export type FeaturedEvent = {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
};

export const EventList: FC<{ events: FeaturedEvent[] }> = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map((item) => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
