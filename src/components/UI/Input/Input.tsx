import React, { useEffect, useRef, useImperativeHandle } from "react";

import "./Input.css";
interface InputProps {
  type: "email" | "password" | "text";
  label: string;
  isValid: boolean;
  id: string;
  value: string;
  onChange: (event: React.FormEvent) => void;
  onBlur: () => void;
  ref: React.Ref<{ focus: () => void }>;
}
const Input: React.FC<InputProps> = React.forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const activate = () => {
    (inputRef.current as HTMLInputElement).focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });
  return (
    <div className={`control ${props.isValid === false ? "invalid" : ""}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
