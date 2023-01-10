import React from "react";

import "./Button.css";
interface ButtonProps {
  type: "button" | "submit";
  onClick?: () => void;
  className: string;
  disabled?: boolean;
  children?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={`button ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
