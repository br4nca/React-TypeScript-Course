import React from "react";

import "./Button.css";
interface ButtonProps {
  type: "button" | "submit";
  onClick?: () => void;
  children: string;
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
