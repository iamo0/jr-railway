import styles from "./header.module.css";
import "./header.css";

import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "../burger-menu/burger-menu";
import { HTMLAttributes } from "react";

export default function Header({
  className = "",
}: HTMLAttributes<HTMLDivElement>) {
  return <header className={`${styles.header} ${className}`}>
    <Link href="/" className="header-logo">
      <Image src="logo.svg" alt="Railway" width={73} height={51} />
    </Link>
    <BurgerMenu>
      <nav className={styles.headerNav}>
        <ul className={styles.headerNavList}>
          <li className={styles.headerNavListItem}><Link href="/mobile" className={styles.headerNavListLink}>Mobile App</Link></li>
          <li className={styles.headerNavListItem}><Link href="/contact" className={styles.headerNavListLink}>Contact</Link></li>
          <li className={styles.headerNavListItem}><Link href="/faq" className={styles.headerNavListLink}>FAQs</Link></li>
          <li className={styles.headerNavListItem}><Link href="/signup" className={styles.headerNavListLink}>Sign Up</Link></li>
        </ul>
      </nav>
    </BurgerMenu>
  </header>;
};
