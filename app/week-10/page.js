"use client";

// Import the useUserAuth hook
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function LoginPage() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function githubSignIn() {
    // Sign in to Firebase with GitHub authentication
    await gitHubSignIn();
    console.log("VERBOSE: Signed in successfully");
  }

  async function signOut() {
    // Sign out of Firebase
    await firebaseSignOut();
    console.log("VERBOSE: Signed out successfully");
    alert("You have been signed out. You can saefely close the browser tab.");
    
  }

  return (
    <section className="my-8">
      <header className="mb-4">
        <h1 className="text-3xl font-bold">Week 10: Cloud Firebase</h1>
      </header>
      {user ? (
        <div>
          <p className="mb-4">Welcome to Meal Prep List, {user.displayName || user.email}!</p>
          <div className="flex gap-3">
            <Link href={"/week-10/shopping-list"} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Go to Shopping List
            </Link>
            <button onClick={signOut} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="mb-4">Please sign in to access your Meal Prep List.</p>
          <button onClick={githubSignIn} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Sign In with GitHub
          </button>
        </div>
      )}
    </section>
  );
}
 
