import NewItem from "./new-item";

// Redid this code from week 4. Nothing changed except for styling.
export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <NewItem />
      </div>
    </main>
  );
}