import { FC } from "react";
import classes from "./event-content.module.css";

export const EventContent: FC<any> = (props) => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
