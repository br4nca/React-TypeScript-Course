import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";
import "./index.css";
import User from "./models/User";
const App: React.FC = () => {
  const [usersList, setUsersList] = useState<User[]>([]);
  const addUserHandler = (u: User) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, u];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
};

export default App;
