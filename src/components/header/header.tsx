import styles from "./header.module.css";

import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "../burger-menu/burger-menu";

export default function Header() {
  return <header className={styles.header}>
    <Link href="/">
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
