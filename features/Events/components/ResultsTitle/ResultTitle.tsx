import { Button } from "@/components";
import { FC } from "react";

import classes from "./results-title.module.css";

type ResultsTitleProps = {
  date: string | number | Date;
};

export const ResultsTitle: FC<ResultsTitleProps> = ({ date }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
};
