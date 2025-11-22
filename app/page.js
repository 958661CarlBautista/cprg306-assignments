import Link from 'next/link';
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 bg-black text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold">CPRG306 - Assignment Hub</h1>
          <Link
            href="/week-10"
            className="rounded-lg bg-white px-3.5 py-2 text-sm font-semibold text-black"
          >
            Latest: Week 10
          </Link>
        </div>
      </header>
    
      <main className="flex-1 bg-neutral-50">
        <Analytics/>
        <section className="mx-auto max-w-screen-xl px-4 pt-8 pb-16">
          <h2 className="mb-5 text-2xl font-bold text-center">Assignment Weekly Lab Links</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/week-2" className="rounded-2xl border border-black/10 bg-white p-5 hover:shadow">
              <span className="text-lg font-bold text-black">Week 2 - Intro to React</span>
            </Link>
            <Link href="/week-3" className="rounded-2xl border border-black/10 bg-white p-5 hover:shadow">
              <span className="text-lg font-bold text-black">Week 3 - Components and Props</span>
            </Link>
            <Link href="/week-4" className="rounded-2xl border border-black/10 bg-white p-5 hover:shadow">
              <span className="text-lg font-bold text-black">Week 4 - Basic Interactivity</span>
            </Link>
            <Link href="/week-5" className="rounded-2xl border border-black/10 bg-white p-5 hover:shadow">
              <span className="text-lg font-bold text-black">Week 5 - Interactivity with Forms</span>
            </Link>
            <Link href="/week-6" className="rounded-2xl border border-black/10 bg-white p-5 hover:shadow">
              <span className="text-lg font-bold text-black">Week 6 - Handling Lists</span>
            </Link>
            <Link href="/week-7" className="rounded-2xl border border-black/10 bg-white p-5 hover:shadow">
              <span className="text-lg font-bold text-black">Week 7 - Managing State</span>
            </Link>
            <Link href="/week-8" className="rounded-2xl border border-black/10 bg-white p-5 hover:shadow">
              <span className="text-lg font-bold text-black">Week 8 - Fetching Data</span>
            </Link>
            <Link href="/week-9" className="rounded-2xl border border-black/10 bg-white p-5 hover:shadow">
              <span className="text-lg font-bold text-black">Week 9 - Firebase Authentication</span>
            </Link>
            <Link href="/week-10" className="rounded-2xl border border-black/10 bg-white p-5 hover:shadow">
              <span className="text-lg font-bold text-black">Week 10 - Cloud Firestore</span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-6 flex">
          <a
            href="https://github.com/958661CarlBautista/cprg306-assignments"
            className="rounded-lg bg-white px-3.5 py-2 text-sm font-semibold text-black hover:shadow">
            Github Repository Link
          </a>
        </div>
      </footer>
    </div>
  );
}