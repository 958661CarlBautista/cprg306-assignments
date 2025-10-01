"use client";

import { useState } from "react";

export default function NewItem() {
  const state = useState(1);
  const quantity = state[0];
  const setQuantity = state[1];

  function increment(){
      setQuantity(function (prev) {
      if (prev < 20) {
        return prev + 1;
      }
    return prev;
  });
  }

  function decrement(){
      setQuantity(function (prev) {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  }

  return (
    <section className="py-6">
      <h1 className="2xl font-bold mb-5">Add New Item</h1>
    </section>
  );
}

