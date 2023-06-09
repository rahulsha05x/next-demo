import Link from "next/link";
import { FC } from "react";
import classes from "./Button.module.css";

type Button = {
  link?: string;
  children: JSX.Element | string;
  onClick?: () => void;
  className?: string;
};

export const Button: FC<Button> = ({ link, children, onClick }) => {
  return (
    <>
      {link ? (
        <Link href={link} className={classes.btn}>
          {children}
        </Link>
      ) : (
        <button className={classes.btn} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};
