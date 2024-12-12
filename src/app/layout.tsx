import './globals.css';
import type { Metadata } from 'next';
import { Merienda } from 'next/font/google';
import Header from './components/Header';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: {
    default: 'Home | Christmas Fun',
    template: '%s | Christmas Fun',
  },
  description: 'Christmas Fun',
};

const merienda = Merienda({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-[100vh] ${merienda.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
