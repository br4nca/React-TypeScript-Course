import React, { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

import "./Navigation.css";
interface NavigationProps {}
const Navigation: React.FC<NavigationProps> = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className="nav">
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
