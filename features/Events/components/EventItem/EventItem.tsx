import { Button } from "@/components";
import AddressIcon from "@/components/Icons/address-icon";
import ArrowRightIcon from "@/components/Icons/arrow-right-icon";
import DateIcon from "@/components/Icons/date-icon";
import Link from "next/link";
import { FC } from "react";
import { FeaturedEvent } from "../EventsList";
import classes from "./EventItem.module.css";

export const EventItem: FC<FeaturedEvent> = ({
  title,
  image,
  date,
  location,
  id,
}) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedLocation = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={image} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <>
              <span>Explore Event</span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </>
          </Button>
        </div>
      </div>
    </li>
  );
};
