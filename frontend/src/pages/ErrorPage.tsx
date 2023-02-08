import React, { Fragment } from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
interface ErrorPageProps {}
const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const error = useRouteError() as {
    status: number;
    data?: { message: string };
  };
  let title = "An error occured";
  let message = "Something went wrong";
  if (error.status === 500) {
    message = error.data!.message;
  }
  if (error.status === 404) {
    title = "Not Found";
    message = "Could not find resource or page";
  }
  return (
    <Fragment>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </Fragment>
  );
};

export default ErrorPage;
