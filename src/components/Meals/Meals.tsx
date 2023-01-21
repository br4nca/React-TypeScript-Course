import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvaibleMeals from "./AvaibleMeals";
interface MealsProps {}
const Meals: React.FC<MealsProps> = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvaibleMeals />
    </Fragment>
  );
};
export default Meals;
