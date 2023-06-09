import { FC } from "react";
import { Header } from "../Header";
export const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
