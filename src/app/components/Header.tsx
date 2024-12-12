import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="w-full h-12 flex items-center bg-[#386641]">
      <nav>
        <Link className="px-8 hover:underline" href="/">
          Home
        </Link>
        <Link className="px-8 hover:underline" href="/about">
          About
        </Link>
      </nav>
    </header>
  );
}
