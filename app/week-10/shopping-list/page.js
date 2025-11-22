"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page() {
  // Read the current authentication state
  const { user } = useUserAuth();

  // Client Side navigation
  const navigate = useRouter();

  async function load(currentUser) {
    if (!currentUser) return;

    try{
      const loadedItem = await getItems(currentUser.uid);
      setItems(loadedItem);
    } catch (error){
      alert("Failed to load items. See console for details.");
      console.error("ERROR: Failed to load items. Details:\n", error);
    }
  }

  // This will force the user if the not logged in to go back to the login page
   useEffect(() => {
    if (!user){
      navigate.replace("/week-10");
      return;
    }
    load(user);
    }, [user, navigate]);

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");


  // Loads any items for the current user.
  async function handleAddItem(newItem) {
    if (!user) return;
    
    try{
      const itemSaveDB = {
        name: newItem.name,
        category: newItem.category,
        quantity: newItem.quantity
      };

      const id = await addItem(user.uid, itemSaveDB);
      setItems((prev) => [...prev, {id, ...itemSaveDB}]);
    } 
    // In an event theres an error of adding any item.
    catch (error){
      alert("Failed to add item. See console for details.");
      console.error("ERROR: Failed to add item. Details:\n", error);
    }
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