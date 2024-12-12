import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="w-full h-12 flex items-center bg-[#386641]">
      <nav>
        <Link className="px-8 " href="/">
          Home
        </Link>
        <Link className="px-8" href="/about">
          About
        </Link>
      </nav>
    </header>
  );
}
