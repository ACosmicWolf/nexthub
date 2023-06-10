"use client";

import { SignInButton } from "@/components/Buttons";
import Link from "next/link";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { redirect } from "next/navigation";

async function SetDisplayName(displayName: string) {
  const [updateProfile, updating] = useUpdateProfile(auth);

  updateProfile({
    displayName: displayName,
  });
}

export default function SignUpPage() {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (user && !loading) {
    redirect("/");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");
    const displayName = formData.get("displayName") as string;

    if (typeof email === "string" && typeof password === "string") {
      createUserWithEmailAndPassword(email, password).then(() => {
        SetDisplayName(displayName);
      });
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
          type="text"
          placeholder="Display name"
        />

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

        <Link href="/auth/signin" className="mt-2 text-blue-500">
          Already have an account? Sign in
        </Link>
      </form>
    </div>
  );
}
