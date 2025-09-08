import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Image from "next/image";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable}`}>
        <header>
          <Link href="/">
            <Image src="logo.svg" alt="Railway" width={73} height={51} />
          </Link>
          <nav>
            <ul>
              <li><Link href="/mobile">Mobile App</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/signup">Sign Up</Link></li>
            </ul>
          </nav>
        </header>

        {children}

        <footer>
          <Image src="logo-full-white.svg" width={295} height={51} alt="Railway" />
          <section>
            <article>
              <h2><Link href="/about">About</Link></h2>
              <nav>
                <ul>
                  <li><Link href="/about/how-it-works">How it works</Link></li>
                  <li><Link href="/about/featured">Featured</Link></li>
                  <li><Link href="/about/partnership">Partnership</Link></li>
                  <li><Link href="/about/business-relation">Bussiness Relation</Link></li>
                </ul>
              </nav>
            </article>
            <article>
              <h2><Link href="/community">Community</Link></h2>
              <nav>
                <ul>
                  <li><Link href="/community/events">Events</Link></li>
                  <li><Link href="/community/blog">Blog</Link></li>
                  <li><Link href="/community/podcast">Podcast</Link></li>
                  <li><Link href="/community/invite">Invite a friend</Link></li>
                </ul>
              </nav>
            </article>
            <article>
              <h2>Socials</h2>
              <nav>
                <ul>
                  <li><Link href="#">Discord</Link></li>
                  <li><Link href="#">Instagram</Link></li>
                  <li><Link href="#">Twitter</Link></li>
                  <li><Link href="#">Facebook</Link></li>
                </ul>
              </nav>
            </article>
          </section>
          <section className="">©2025&nbsp;RailWay. All rights reserved</section>
        </footer>
      </body>
    </html>
  );
}
