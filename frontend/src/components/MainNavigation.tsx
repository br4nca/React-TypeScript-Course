import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
import NewsletterSignup from "./NewsletterSignup";
interface MainNavigationProps {}
const MainNavigation: React.FC<MainNavigationProps> = (props) => {
  return (
    <header className="header">
      <nav>
        <ul className="list">
          <li>
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="events"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Newsletter
            </NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
};

export default MainNavigation;
