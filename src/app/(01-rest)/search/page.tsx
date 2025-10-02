import styles from "./page.module.css";

import SearchForm from "@/components/search-form/search-form";

export default function Home() {
  return <>
    <div className={styles.pageHeader}>
      <p className={styles.pageHeaderTitle}>Internal layout</p>
    </div>
    <SearchForm />
  </>;
}
