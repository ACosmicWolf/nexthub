"use client";

import { auth } from "@/lib/firebase";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ProfileButton, ThemeToggleButton } from "./Buttons";

const genericHamburgerLine = `h-0.5 w-4 rounded my-1 bg-black dark:bg-white transition ease transform duration-300`;

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <nav className="p-4 w-full bg-white dark:bg-black dark:text-white flex justify-between">
        <ul className="hidden lg:flex gap-5">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
            >
              {label}
            </Link>
          ))}
        </ul>

        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-[22px] transition-all ease-in-out  flex items-center"
        >
          NextHub
        </Link>

        <div className="flex gap-5">
          {/* PROFILE_BUTTON */}
          <div className="block">
            {loading ? (
              <div className="flex items-center">
                <div className="animate-spin">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
                  </svg>
                </div>
              </div>
            ) : user ? (
              <ProfileButton
                displayName={user.displayName ? user.displayName : user.email}
                photoURL={user.photoURL ? user.photoURL : "images/avatar.png"}
              />
            ) : (
              <Link
                href="/auth"
                className="mx-5 text-sm p-2 rounded bg-cyan-100 font-semibold text-blue-600 dark:bg-cyan-200 dark:text-blue-800 "
              >
                Login
              </Link>
            )}
          </div>
          {/* PROFILE_BUTTON_END */}

          {/* HAMBURGER_MENU Visible only on small screens */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-gray-500  relative"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <div
                className={`${genericHamburgerLine} ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : "opacity-100"
                }`}
              />
            </button>
          </div>
          {/* HAMBURGER_MENU_END */}

          {/* TOGGLE_THEME */}
          <div className="hidden lg:flex md:flex items-center gap-2">
            <ThemeToggleButton />
          </div>
          {/* TOGGLE_THEME_END */}
        </div>
      </nav>

      {isMenuOpen && (
        <div className=" w-full mb-8 dark:bg-black">
          <div className="flex flex-col gap-3 h-full">
            {links
              .concat([
                !loading && user ? ["Profile", "/profile"] : ["Login", "/auth"],
              ])
              .map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                >
                  {label}
                </Link>
              ))}
            <div className="items-center w-full px-5 py-2 ">
              <ThemeToggleButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
