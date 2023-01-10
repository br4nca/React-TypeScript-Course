import React, { useContext } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import "./Home.css";
import { AuthContext } from "../../store/auth-context";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Card className="home">
      <h1>Welcome back!</h1>
      <Button className="" type="button" onClick={authCtx.logoutHandler}>
        Logout
      </Button>
    </Card>
  );
};

export default Home;
