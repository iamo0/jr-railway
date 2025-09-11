import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable}`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
