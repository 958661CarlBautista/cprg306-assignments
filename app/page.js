import Link from 'next/link';

export default function Home(){
  return (
    <main>
      <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        View <Link href="/week-2">Week 2 Page</Link>
      </p>
      <p>
        View <Link href="/week-3">Week 3 Page</Link>
      </p>
      <p>
        View <Link href="/week-4">Week 4 Page</Link>
      </p>
    </div>
    </main>
  );
}