import React from "react";

import "./Input.css";
interface InputProps {
  label: string;
  input: {
    type: string;
    id: string;
    min?: string;
    max?: string;
    step?: string;
    defaultValue?: string;
  };
  ref: React.Ref<HTMLInputElement>;
}
const Input: React.FC<InputProps> = React.forwardRef((props, ref) => {
  return (
    <div className="input">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
