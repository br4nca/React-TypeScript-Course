import React from "react";
import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

interface AuthenticationPageProps {}

const AuthenticationPage: React.FC<AuthenticationPageProps> = (props) => {
  return <AuthForm />;
};

export default AuthenticationPage;

export async function action({ request }: any) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";
  const data = await request.formData();

  if (mode !== "login" && mode !== "signup") {
    throw json({ messsage: "Unsupported mode." }, { status: 422 });
  }
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response) {
    throw json({ message: "Could not authenticate user" }, { status: 500 });
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem("token", token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());
  return redirect("/");
}
