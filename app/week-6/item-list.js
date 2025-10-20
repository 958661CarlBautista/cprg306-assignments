"use client";

import { useState } from "react";
import Item from "./item";
import data from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Compares two items for sorting based on the sort mode.
  // Returns a number depending on the results. 
  // More efficient using localeCompare for string comparison.
  const compare = (a, b) => {
    if (sortBy === "name") {
      /*
      - 1 =product A before product B
      + 1 = product B before product A
      0 = no change, a equals b
      */
      return a.name.localeCompare(b.name);
    }
    const byCat = a.category.localeCompare(b.category);

    // If categories are different, use it to decide the order
    if (byCat !== 0) {
      return byCat;
    }
    // If categories are the same, sort by name
    return a.name.localeCompare(b.name);
  };

  // Create copy of the data
  const items = [...data].sort(compare);

  // Sort by buttons
  const base = "px-3 py-2 border rounded-md";
  let nameBtn = base;
  if (sortBy === "name") {
    nameBtn += " bg-blue-600 text-white";
  } else {
    nameBtn += " bg-gray-500 text-black";
  }
  let catBtn = base;
  if (sortBy === "category") {
    catBtn += " bg-blue-600 text-white";
  } else {
    catBtn += " bg-gray-500 text-black";
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-gray-400">Sort by:</span>
        <button type="button" onClick={() => setSortBy("name")} className={nameBtn}>
          Name
        </button>
        <button type="button" onClick={() => setSortBy("category")} className={catBtn}>
          Category
        </button>
      </div>

      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}