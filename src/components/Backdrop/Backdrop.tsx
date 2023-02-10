import React from "react";

import "./Backdrop.css";
interface BackdropProps {
  closed: () => void;
  show: boolean;
}
const Backdrop: React.FC<BackdropProps> = (props) => {
  const cssClasses = [
    "Backdrop",
    props.show ? "BackdropOpen" : "BackdropClosed",
  ];
  return <div className={cssClasses.join(" ")} onClick={props.closed}></div>;
};

export default Backdrop;
