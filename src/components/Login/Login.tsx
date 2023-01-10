import React, { useState, useEffect, useReducer, useRef } from "react";

import Card from "../UI/Card/Card";
import "./Login.css";
import Button from "../UI/Button/Button";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import Input from "../UI/Input/Input";

type State = {
  value: string;
  isValid: boolean;
};

type Action = {
  type: "USER_INPUT" | "INPUT_BLUR";
  val: string;
};

const emailReducer = (state: State, action: Action): State => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};
const passwordReducer = (state: State, action: Action): State => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

interface LoginProps {}
const Login: React.FC<LoginProps> = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispathEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispathPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  const authCtx = useContext(AuthContext);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);
  const emailChangeHandler = (event: React.FormEvent) => {
    dispathEmail({
      type: "USER_INPUT",
      val: (event.target as HTMLInputElement).value,
    });
  };

  const passwordChangeHandler = (event: React.FormEvent) => {
    dispathPassword({
      type: "USER_INPUT",
      val: (event.target as HTMLInputElement).value,
    });
  };

  const validateEmailHandler = () => {
    dispathEmail({ type: "INPUT_BLUR", val: "" });
  };

  const validatePasswordHandler = () => {
    dispathPassword({ type: "INPUT_BLUR", val: "" });
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.loginHandler(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      (emailInputRef.current as HTMLInputElement).focus();
    } else {
      (passwordInputRef.current as HTMLInputElement).focus();
    }
  };

  return (
    <Card className="login">
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          label={"email"}
          id={"email"}
          type={"email"}
          value={emailState.value}
          isValid={emailState.isValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          label={"password"}
          type={"password"}
          id={"password"}
          value={passwordState.value}
          isValid={passwordState.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className="actions">
          <Button type="submit" className="btn">
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
