import "./header.css";

import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "../burger-menu/burder-menu";

export default function Header() {
  return <header className="header">
    <Link href="/">
      <Image src="logo.svg" alt="Railway" width={73} height={51} />
    </Link>
    <BurgerMenu>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-list-item"><Link href="/mobile" className="header-nav-list-link">Mobile App</Link></li>
          <li className="header-nav-list-item"><Link href="/contact" className="header-nav-list-link">Contact</Link></li>
          <li className="header-nav-list-item"><Link href="/faq" className="header-nav-list-link">FAQs</Link></li>
          <li className="header-nav-list-item"><Link href="/signup" className="header-nav-list-link">Sign Up</Link></li>
        </ul>
      </nav>
    </BurgerMenu>
  </header>;
};
