import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import "./Root.css";
interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};
export default RootLayout;
