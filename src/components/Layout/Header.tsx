import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";

interface HeaderProps {
  onShowCart: () => void;
}
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table with some food" />
      </div>
    </Fragment>
  );
};
export default Header;
