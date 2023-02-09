import { NavLink } from "react-router-dom";

import "./MainNavigation.css";
interface MainNavigationProps {}
const MainNavigation: React.FC<MainNavigationProps> = (props) => {
  return (
    <header className="header">
      <nav>
        <ul>
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
              to="/posts"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
