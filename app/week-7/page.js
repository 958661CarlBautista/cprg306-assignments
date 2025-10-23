"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import data from "./items.json";

export default function Page() {
  const [items, setItems] = useState(data);

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }
  return (    


  <main className="p-4">
  <div className="max-w-2xl mx-auto">
    <NewItem onAddItem={handleAddItem} />
    <ItemList items={items}/>
  </div>
</main>
  );
}