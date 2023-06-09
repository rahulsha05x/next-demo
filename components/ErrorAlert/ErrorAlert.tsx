import { FC } from "react";
import classes from "./error-alert.module.css";

type ErrorAlertProps = {
  children: JSX.Element;
};

export const ErrorAlert: FC<ErrorAlertProps> = ({ children }) => {
  return <div className={classes.alert}>{children}</div>;
};
