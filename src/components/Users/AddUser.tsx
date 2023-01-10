import React, { useState, useRef } from "react";
import Error from "../../models/Error";
import User from "../../models/User";
import Card from "..//UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";
interface AddUserProps {
  onAddUser: (u: User) => void;
}
const AddUser: React.FC<AddUserProps> = (props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<Error>();

  const addUserHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredUsername = (nameInputRef.current as HTMLInputElement).value;
    const enteredAge = (ageInputRef.current as HTMLInputElement).value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name and age(non-empty values)",
      });
      return;
    }
    console.log(enteredAge);
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a valid age(>0)",
      });
      return;
    }
    props.onAddUser({
      id: Math.random().toString(),
      name: enteredUsername,
      age: +enteredAge,
    });
    (nameInputRef.current as HTMLInputElement).value = "";
    (ageInputRef.current as HTMLInputElement).value = "";
  };
  const errorHandler = () => {
    setError(undefined);
  };
  return (
    <>
      {error && <ErrorModal e={error} onConfirm={errorHandler} />}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
