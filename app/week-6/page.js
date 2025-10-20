import ItemList from "./item-list";
// Fixed tailwind classnames, fixed centering of the content.

export default function Page() {
  return (
  <main className="p-4">
  <div className="max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
    <ItemList />
  </div>
</main>
  );
}