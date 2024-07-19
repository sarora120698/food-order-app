import React, { useEffect, useState } from "react";
import Mealtem from "./Mealtem";

export default function Meals() {
  const [isMealsLoading, setIsMealsLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
      }
      const mealsData = await response.json();
      setMeals(mealsData);
      console.log(mealsData);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <Mealtem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
