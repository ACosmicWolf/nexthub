"use client";

import { SignInButton } from "@/components/Buttons";
import Link from "next/link";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email === "string" && typeof password === "string") {
      signInWithEmailAndPassword(email, password);
    }
  }

  return (
    <div className="mt-10 lg:mt-20">
      <form
        className="w-full flex m-auto gap-5 flex-col"
        onSubmit={handleSubmit}
      >
        <input
          className="p-2 bg-gray-100 rounded dark:bg-gray-900"
          type="email"
          placeholder="Email"
        />
        <input
          className="p-2 bg-gray-100 rounded dark:bg-gray-900"
          type="password"
          placeholder="Password"
        />
        <SignInButton type="submit" />

        <Link href="/auth/signup" className="mt-2 text-blue-500">
          Don&apos;t have an account? Sign up
        </Link>
      </form>
    </div>
  );
}
