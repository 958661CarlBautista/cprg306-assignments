export default function Item({ name, quantity, category, onSelect }) {
  function handleClick() {
    if (onSelect) onSelect();
  }
  return (
    <li
      className="border border-gray-300 rounded-md p-2 mb-2 w-full cursor-pointer hover:bg-gray-50"
      onClick={handleClick}
      role="button"
      tabIndex={0}>
      <div className="font-serif">{name}</div>
      <div>Quantity: {quantity}</div>
      <div>
        Category: <span className="capitalize">{category || ""}</span>
      </div>
    </li>
  );
}