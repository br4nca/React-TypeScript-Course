import React from "react";
import ReactDOM from "react-dom";
import Error from "../../models/Error";
import Button from "./Button";
import Card from "./Card";
import "./ErrorModal.css";

interface BackdropProps {
  onConfirm: () => void;
}
interface ErrorModalProps {
  e: Error;
  onConfirm: () => void;
}
const Backdrop: React.FC<BackdropProps> = (props) => {
  return <div className="backdrop" onClick={props.onConfirm}></div>;
};
const ModalOverlay: React.FC<ErrorModalProps> = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.e.title}</h2>
      </header>
      <div className="content">
        <p>{props.e.message}</p>
      </div>
      <footer className="actions">
        <Button type="button" onClick={props.onConfirm}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};
const ErrorModal: React.FC<ErrorModalProps> = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay e={props.e} onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")!
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
