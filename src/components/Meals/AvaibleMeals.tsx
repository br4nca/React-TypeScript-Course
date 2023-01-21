import React, { useEffect, useState } from "react";
import "./AvaibleMeals.css";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem.tsx/MealItem";
import Meal from "../../models/Meal";
interface AvaibleMealsProps {}
const AvaibleMeals: React.FC<AvaibleMealsProps> = (props) => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState("");
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("yourFirebaseDatabase/meals.json");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const loadedMeals: Meal[] = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError((error as Error).message);
    });
  }, []);
  if (isLoading) {
    return (
      <section className="MealsLoading">
        <p>Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className="MealsError">
        <p>{httpError}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className="meals">
      <Card className="card">
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvaibleMeals;
