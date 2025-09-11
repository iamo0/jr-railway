import "./footer.css";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return <footer className="footer">
    <Image src="logo-full-white.svg" width={295} height={51} alt="Railway" />
    <section className="footer-links-container">
      <article className="footer-links-block">
        <h2><Link href="/about">About</Link></h2>
        <nav className="footer-links">
          <ul>
            <li><Link href="/about/how-it-works">How it works</Link></li>
            <li><Link href="/about/featured">Featured</Link></li>
            <li><Link href="/about/partnership">Partnership</Link></li>
            <li><Link href="/about/business-relation">Bussiness Relation</Link></li>
          </ul>
        </nav>
      </article>
      <article className="footer-links-block">
        <h2><Link href="/community">Community</Link></h2>
        <nav className="footer-links">
          <ul>
            <li><Link href="/community/events">Events</Link></li>
            <li><Link href="/community/blog">Blog</Link></li>
            <li><Link href="/community/podcast">Podcast</Link></li>
            <li><Link href="/community/invite">Invite a friend</Link></li>
          </ul>
        </nav>
      </article>
      <article className="footer-links-block">
        <h2>Socials</h2>
        <nav className="footer-links">
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
  </footer>;
};
