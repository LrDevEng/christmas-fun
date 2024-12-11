import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="w-full flex justify-between bg-red-300">
      <div>Music Player</div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
