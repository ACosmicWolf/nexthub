"use client";
import Link from "next/link";
import { useState } from "react";

const genericHamburgerLine = `h-0.5 w-4 rounded my-1 bg-white transition ease transform duration-300`;

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="pt-5 lg:pt-10 pb-5 flex justify-between">
        <div className="hidden lg:flex gap-5">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-gray-400 text-sm hover:font-medium hover:text-white transition-all"
            >
              {label}
            </Link>
          ))}
        </div>
        <div>
          <Link
            href={"/"}
            className="font-semibold text-xl hover:text-[22px] transition-all"
          >
            NextHub
          </Link>
        </div>
        <div className="hidden lg:block">
          <Link href="/login" className="mx-5 text-gray-400 text-sm">
            Login
          </Link>
        </div>

        <div className="lg:hidden">
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
      </div>
      {isMenuOpen && (
        <div className=" w-full mb-8">
          <div className="flex flex-col gap-3 h-full ml-4">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-gray-300 text-sm hover:font-medium hover:text-white transition-all"
              >
                {label}
              </Link>
            ))}
            <div className="flex flex-col gap-3">
              <Link href="/login" className="text-gray-300 text-sm">
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
