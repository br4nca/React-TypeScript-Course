import React, { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";
interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <h1>An error occured!</h1>
        <p>Culd not find this page!</p>
      </main>
    </Fragment>
  );
};
export default ErrorPage;
