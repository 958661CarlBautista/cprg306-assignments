"use client";

import { useState } from "react";

export default function NewItem() {
  // Product Name initial state, empty string
  const nameState = useState("");
  const name = nameState[0];
  const setName = nameState[1];

  // Category initial state, default to "produce"
  const categoryState = useState("produce");
  const category = categoryState[0];
  const setCategory = categoryState[1];

  const state = useState(1);
  const quantity = state[0];
  const setQuantity = state[1];

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

  function changeName(event){
    setName(event.target.value);
  }

  function changeCategory(event){
    setCategory(event.target.value);
  }

  function submitForm(event){
    event.preventDefault();

    let item = {
      name: name,
      quantity: quantity,
      category: category
    };

    alert("Item: " + name + ", Quantity: " + quantity + ", Category: " + category);
    console.log("Debug: Form submitted", item);

    // Reset the form after submission
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={submitForm} className="w-full max-w-md rounded-lg p-4">
      <h1 className="text-3xl font-extrabold mb-6">Week 5 - New Item</h1>
      <label className="block">
        <span className="text-black">Item Name:</span>
        <input className="w-full rounded-md border shadow-sm focus:border-blue-500"
          type="text"
          value={name}
          onChange={changeName}
          required
          placeholder=" Eg. Apples, 3 Pieces"
        />
      </label>

      <section className="py-8">
        <span className="text-black">Quantity (1-20):</span>
        <div className="text-sm text-black mb-4">
          Current: <span className="ml-2 font-bold">{quantity}</span>
        </div>

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

        <p className="mt-2 text-sm text-gray-600">Allowed Range: 1 - 20</p>
      </section>

      <div className="mt-4">
        <label className="block text-sm text-black">Category</label>
        <select
          value={category}
          onChange={changeCategory}
          className="w-full rounded-md border mb-2">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household Product">Household</option>
          <option value="Other">Other</option>
        </select>

        <button
          type="submit"
          className="bg-green-800 text-white px-5 py-3 rounded-md">
          Add Item
        </button>
      </div>
    </form>
  );
}