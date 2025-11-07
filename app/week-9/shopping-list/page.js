"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import data from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  // Read the current authentication state
  const { user } = useUserAuth();

  // Client Side navigation
  const navigate = useRouter();

  // This will force the user if the not logged in to go back to the login page
   useEffect(() => {
    if (!user){
      router.replace("/week-9")};
    }, [user, navigate]);

  const [items, setItems] = useState(data);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  // Removes any emojis, trims whitespace, and converts to lowercase
  function cleanName(raw) {
    const beforeComma = String(raw).split(",")[0];
    const noEmoji = beforeComma.replace(/\p{Extended_Pictographic}/gu, "");
    return noEmoji.trim().toLowerCase();
  }

  function handleItemSelect(item) {
    const cleaned = cleanName(item.name);
    if (cleaned) setSelectedItemName(cleaned);
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Shopping List + Meal Ideas</h1>

      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}