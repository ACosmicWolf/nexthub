"use client";

import { auth } from "@/lib/firebase";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

export function SignInButton(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      className="m-auto bg-purple-600 px-4 py-2 rounded text-white"
      {...props}
    >
      Sign In
    </button>
  );
}

export function SignUpButton(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      className="m-auto bg-purple-600 px-4 py-2 rounded text-white"
      {...props}
    >
      Sign Up
    </button>
  );
}

export function GoogleSignInButton() {
  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);

  return (
    <button
      onClick={() => {
        signInWithGoogle();
      }}
      className="m-auto px-4 py-2 rounded text-black flex gap-2 items-center border border-gray-200 dark:text-white dark:border-gray-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 326667 333333"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        height="1em"
        width="1em"
      >
        <path
          d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
          fill="#4285f4"
        />
        <path
          d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
          fill="#34a853"
        />
        <path
          d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
          fill="#fbbc04"
        />
        <path
          d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
          fill="#ea4335"
        />
      </svg>
      Login with Google
    </button>
  );
}

export function GithubSignInButton() {
  const [signInWithGithub, loading, error] = useSignInWithGithub(auth);

  return (
    <button
      onClick={() => {
        signInWithGithub();
      }}
      className="m-auto px-4 py-2 rounded text-white flex gap-2 items-center bg-black border dark:border-gray-800"
    >
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
      </svg>
      Login with Github
    </button>
  );
}

/* Profile Button */
export function ProfileButton({
  photoURL,
}: {
  displayName: string | null;
  photoURL: string;
}) {
  return (
    <button className="flex items-center gap-2 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-950 transition-all group">
      <Image
        width={30}
        height={30}
        src={photoURL}
        alt="Profile Picture"
        referrerPolicy="no-referrer"
        className="rounded-full border-2 border-gray-200 dark:border-gray-800"
      />
    </button>
  );
}
