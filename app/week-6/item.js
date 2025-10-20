export default function Item({ name, quantity, category }) {
  return (
    <li className="border border-gray-300 rounded-md p-2 mb-2 w-full">
      <div className="font-serif">{name}</div>
      <div>Quantity: {quantity}</div>
      <div>
        Category: <span className="capitalize">{category || ""}</span>
      </div>
    </li>
  );
}