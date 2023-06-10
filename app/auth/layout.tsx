"use client";

import { GithubSignInButton, GoogleSignInButton } from "@/components/Buttons";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Router = useRouter();

  const [user, loading] = useAuthState(auth);

  if (user && !loading) {
    Router.push("/");
  } else {
    return (
      <div className="flex flex-col items-center">
        {children}

        <div className="w-full lg:w-1/2 m-auto border-[0.1px] rounded border-gray-900 my-5"></div>

        <div className="flex flex-col gap-6">
          <GoogleSignInButton />
          <GithubSignInButton />
        </div>
      </div>
    );
  }
}
