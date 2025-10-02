import styles from "./page.module.css";

import SearchForm from "@/components/search-form/search-form";

export default function Home() {
  return <>
    <div className={styles.pageHeader}>
      <p className={styles.pageHeaderTitle}>Let&apos;s Find That Ticket</p>
      <p className={styles.pageHeaderSubtitle}>Before Someone Else Does</p>
    </div>
    <SearchForm />
  </>;
}
