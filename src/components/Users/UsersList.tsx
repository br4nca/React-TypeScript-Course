import React, { useState } from "react";
import User from "../../models/User";
import Card from "../UI/Card";
import "./UsersList.css";
interface UserListProps {
  users: User[];
}
const UserList: React.FC<UserListProps> = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
