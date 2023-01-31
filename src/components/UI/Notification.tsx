import React, { Fragment } from "react";
import "./Notification.css";

export interface NotificationProps {
  status: "error" | "success" | "pending" | "";
  title: string;
  message: string;
}

const Notification: React.FC<NotificationProps> = (props) => {
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = "error";
  }
  if (props.status === "success") {
    specialClasses = "success";
  }

  const cssClasses = `notification ${specialClasses}`;

  return (
    <Fragment>
      {props.status !== "" && (
        <section className={cssClasses}>
          <h2>{props.title}</h2>
          <p>{props.message}</p>
        </section>
      )}
    </Fragment>
  );
};

export default Notification;
