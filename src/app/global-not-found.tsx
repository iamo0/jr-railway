import Header from "@/components/header/header";
import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppinsFont = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Railway",
  description: "Official tickets for Indian Railways",
};

export default function NotFound() {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable}`}>
        <Header />
        <main className="main">
          <h1>Такой страницы нет!</h1>
          <p>Попробуйте <Link href="/">сначала</Link></p>
        </main>
      </body>
    </html>
  );
}
