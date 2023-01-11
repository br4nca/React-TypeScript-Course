import React, { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (
  state: { value: string; isTouched: boolean },
  action: { type: string; value?: string }
): { value: string; isTouched: boolean } => {
  if (action.type === "INPUT") {
    return { value: action.value!, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return initialInputState;
};

const useInput = (validateValue: (v: string) => boolean) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, {
    value: "",
    isTouched: false,
  });

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event: React.FormEvent) => {
    dispatch({
      type: "INPUT",
      value: (event.target as HTMLInputElement).value,
    });
  };

  const inputBlurHandler = (event: React.FormEvent) => {
    dispatch({
      type: "BLUR",
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    reset,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};
export default useInput;
