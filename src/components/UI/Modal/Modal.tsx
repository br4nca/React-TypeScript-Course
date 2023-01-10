import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

interface BackdropProps {
  onClose: () => void;
}
const Backdrop: React.FC<BackdropProps> = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};
interface ModalOverlayProps {
  children: React.ReactNode;
}
const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}
const portalElement = document.getElementById("overlays");
const Modal: React.FC<ModalProps> = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement!
      )}
    </Fragment>
  );
};
export default Modal;
