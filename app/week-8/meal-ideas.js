"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  // Fetch from TheMealDB API. URL + ingredrient query converted to a URI component.
  const url ="https://www.themealdb.com/api/json/v1/1/filter.php?i=" + encodeURIComponent(ingredient);
  const res = await fetch(url);
  const data = await res.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    let isCurrent = true;

    // Resets meal ideas
    setMeals([]);

    // If there are no ingredrient selected, return nothing.
    if (!ingredient) return;

    // Load mela ideas for the selected ingredient by the user. 
    async function load() {
      try {
        const list = await fetchMealIdeas(ingredient);
        if (isCurrent) setMeals(list);
        
        // Throws error in case if the list is not fetched.
      } catch (error) {
        console.error("Error fetching meal ideas:", error);
      }
    }
    // Start with fetching meal ideas.
    load();

    // Cleanup function
    return () => { isCurrent = false; };
  }, [ingredient]);

  return (
    <section className="w-full">
      <h3 className="mb-2 font-semibold">
        {ingredient ? `Meal ideas for "${ingredient}"` : "Meal ideas (select an item)"}
      </h3>

      {!ingredient && <p className="text-sm text-gray-500">Choose an item to see ideas.</p>}
      {ingredient && meals.length === 0 && (
        <p className="text-sm text-gray-300">No results.</p>
      )}

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {meals.map((m) => (
          <li
            key={m.idMeal}
            className="border rounded-md p-2 text-sm bg-white"
            title={m.strMeal}>
            <figure className="flex flex-col items-center">
              <img
                src={m.strMealThumb}
                alt={m.strMeal}
                loading="lazy"
                className="w-full h-full object-cover rounded-md mb-4"/>
              <figcaption className="text-center">{m.strMeal}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}