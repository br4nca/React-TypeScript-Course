import React from "react";
import Error from "../../models/Error";
import Button from "./Button";
import Card from "./Card";
import "./ErrorModal.css";
interface ErrorModalProps {
  e: Error;
  onConfirm: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm}></div>
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
    </div>
  );
};
export default ErrorModal;
