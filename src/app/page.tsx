import styles from "./page.module.css";

import SearchForm from "@/components/search-form/search-form";

export default function Home() {
  return <>
    <h1 className={styles.pageHeader}>Search Results</h1>
    <SearchForm />
  </>;
}
