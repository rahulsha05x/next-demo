import Link from "next/link";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>Next Events</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/events'>Browse all events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
