import React, { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import "./Auth.css";

interface AuthProps {}

const Auth: React.FC<AuthProps> = (props) => {
  const dispatch = useDispatch();
  const loginHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <main className="auth">
      <section>
        <form onSubmit={loginHandler}>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
