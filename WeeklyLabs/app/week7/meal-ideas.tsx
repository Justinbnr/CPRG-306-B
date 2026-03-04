"use client";
import { useState, useEffect } from "react";


interface Meal {
    idMeal: string;
    strMeal: string;
}

export default function mealIdeas({ingredient}: {ingredient: string}){
    const [meals, setmeals ] = useState<Meal[]>([]);

    const loadMealIdea = async () => {
        if (!ingredient) return;

        try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setmeals(data.meals || []);
    } catch (error) {
      console.error("Error loading meal ideas:", error);
    }
};
    useEffect(() => {
        loadMealIdea();
    }, [ingredient]);

    return (
        <div className="meal-ideas">
            <h2>Meal Ideas for {ingredient}</h2>
            {meals.length > 0 ? (
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>{meal.strMeal}</li>
                    ))}
                </ul>
            ) : (
                <p>No meal ideas available for this ingredient.</p>
            )}
        </div>
    )};