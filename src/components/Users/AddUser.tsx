import React, { useState } from "react";
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
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState<Error>();
  const usernameChangeHandler = (event: React.FormEvent) => {
    setEnteredUsername((event.target as HTMLInputElement).value);
  };
  const ageChangeHandler = (event: React.FormEvent) => {
    setEnteredAge((event.target as HTMLInputElement).value);
  };
  const addUserHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name and age(non-empty values)",
      });
      return;
    }
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
    setEnteredUsername("");
    setEnteredAge("");
  };
  const errorHandler = () => {
    setError(undefined);
  };
  return (
    <div>
      <div>
        {error && <ErrorModal e={error} onConfirm={errorHandler} />}
        <Card className="input">
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              value={enteredUsername}
              id="username"
              type="text"
              onChange={usernameChangeHandler}
            ></input>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
            ></input>
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddUser;
