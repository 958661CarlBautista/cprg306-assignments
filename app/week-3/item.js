// app/week-3/item.js

export default function Item({name, quantity, category}) {
  return (
    <li className="border border-gray-300 rounded-md p-4 mb-4 bg-white w-125">
      <div className="font-serif">{name}</div>
      <div>quantity: {quantity}</div>
      <div>category: {category}</div>
    </li>
  );
}