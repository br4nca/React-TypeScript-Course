import React from "react";
import { useNavigate } from "react-router-dom";
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("products");
  }
  return (
    <div>
      HomePage<button onClick={navigateHandler}></button>
    </div>
  );
};
export default HomePage;
