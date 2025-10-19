"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-6 px-6 md:px-16">
      <ul className="flex gap-6 text-gray-400">
        <li>
          <Link
            href="/"
            className="hover:text-purple-400 font-semibold text-xl transition-colors"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href="/works"
            className="hover:text-purple-400 font-semibold text-xl transition-colors"
          >
            works
          </Link>
        </li>
        <li>
          <Link
            href="/about-me"
            className="hover:text-purple-400 font-semibold text-xl transition-colors"
          >
            about-me
          </Link>
        </li>
        <li>
          <Link
            href="/contacts"
            className="hover:text-purple-400 font-semibold text-xl transition-colors"
          >
            contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
  {/*<div className="text-purple-400 font-semibold text-lg">Stanley</div>*/}

  {/* bg-[#1a1a1a]  border-b border-gray-800*/}