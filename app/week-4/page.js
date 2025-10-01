import NewItem from "./new-item";

export default function page(){
  return (
    <main className="flex flex-col items-center p-2">
      <div className="w-full max-w-2xl">
        <NewItem />
        </div>
      </main>
  )
}