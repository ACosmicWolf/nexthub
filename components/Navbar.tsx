"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const genericHamburgerLine = `h-0.5 w-4 rounded my-1 bg-black dark:bg-white transition ease transform duration-300`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.dataset.mode = "dark";
    } else {
      setTheme("light");
      document.documentElement.dataset.mode = "";
    }
  }, [theme]);

  return (
    <>
      <nav className="p-4 w-full bg-white dark:bg-black dark:text-white flex justify-between">
        <div className="hidden lg:flex gap-5">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-[22px] transition-all ease-in-out"
        >
          NextHub
        </Link>

        <div className="flex gap-5">
          <div className="hidden lg:block">
            <Link
              href="/login"
              className="mx-5 text-sm p-2 rounded bg-cyan-100 font-semibold text-blue-600 dark:bg-cyan-200 dark:text-blue-800 "
            >
              Login
            </Link>
          </div>

          <div className="lg:hidden ">
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

          <div>
            {/* Toggle Styles present in globals.css as code I copied from https://codepen.io/mrozilla/pen/OJJNjRb was too difficult to convert to tailwind was too difficult */}
            <input
              type="checkbox"
              onClick={() => {
                localStorage.theme = theme === "dark" ? "light" : "dark";
                setTheme(theme === "dark" ? "light" : "dark");
              }}
              checked={theme === "dark"}
              id="toggle"
            />
            <label htmlFor="toggle" className="sr-only">
              Toggle theme
            </label>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className=" w-full mb-8 dark:bg-black">
          <div className="flex flex-col gap-3 h-full">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Contact", "/contact"],
              ["Login", "/login"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
