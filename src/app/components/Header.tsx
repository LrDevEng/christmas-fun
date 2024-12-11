import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="w-full h-12 flex justify-between items-center bg-red-300">
      <nav>
        <Link className="px-8" href="/">
          Home
        </Link>
        <Link className="px-8" href="/about">
          About
        </Link>
      </nav>
    </header>
  );
}
