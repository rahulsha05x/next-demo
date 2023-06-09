import { FC } from "react";
import classes from "./event-summary.module.css";

export const EventSummary: FC<any> = (props) => {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};
