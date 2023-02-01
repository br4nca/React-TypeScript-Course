import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
interface MainNavigationProps {}

const MainNavigation: React.FC<MainNavigationProps> = (props) => {
  return (
    <header className="header">
      <nav>
        <ul className="header_list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
