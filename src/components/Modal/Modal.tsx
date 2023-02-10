import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";
interface ModalProps {
  closed: () => void;
  show: boolean;
}
const animationTiming = {
  enter: 400,
  exit: 1000,
};
const Modal: React.FC<ModalProps> = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: "ModalOpen",
        exitActive: "ModalClosed",
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
