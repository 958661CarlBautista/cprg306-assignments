"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  
  // Increase quantity by 1, max 20
  function increment(){
      setQuantity(function (prev) {
      if (prev < 20) {
        return prev + 1;
      }
    return prev;
  });
  }

  // Decrease quantity by 1, min 1
  function decrement(){
      setQuantity(function (prev) {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  }

  return (
    <section className="py-8">
      <h1 className="text-3xl font-extrabold mb-6">Add New Item</h1>

      <div className="max-w-md rounded-lg border p-6">
        <div className="text-sm text-black mb-4">
          Quantity: <span className="ml-2 font-bold">{quantity}</span></div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity <= 1}
            className="font-bold h-10 w-15 bg-gray-300 rounded-md border disabled:opacity-50">-</button>

          <button
            type="button"
            onClick={increment}
            disabled={quantity >= 20}
            className="font-bold h-10 w-15 rounded-md bg-blue-400 text-blue-800 border-blue-950 disabled:bg-gray-200 disabled:text-gray-400">+</button>
        </div>

        <p className="mt-5 text-sm text-gray-400">Allowed Range: 1 - 20</p>
      </div>
    </section>
  );
}