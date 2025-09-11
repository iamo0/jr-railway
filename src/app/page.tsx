import styles from "./page.module.css";

export default function Home() {
  return <>
    <h1 className={styles.pageHeader}>Search Results</h1>
    <form className={styles.search}>
      <fieldset className={`${styles.searchField}`}>
        
      </fieldset>

      <fieldset className={styles.searchField}>
        <label>Departure</label>
        <input placeholder="Your City/Station" type="text" id="search-departure" name="search-departure" />
      </fieldset>

      <fieldset className={styles.searchField}>
        <label>Arrival</label>
        <input placeholder="Where To?" type="text" id="search-arrival" name="search-arrival" />
      </fieldset>

      <fieldset className={styles.searchField}>
        <label>Pick Your Lucky Day</label>
        <input placeholder="Depart" type="date" id="search-departure-date" name="search-departure-date" />
        <input placeholder="Return" type="date" id="search-arrival-date" name="search-arrival-date" />
      </fieldset>

      <button type="submit" className={styles.searchSubmit}>Ticket, Please!</button>
    </form>
  </>;
}
