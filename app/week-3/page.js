import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}