"use client";

import styles from "./page.module.css";

import LabelledRadioButton from "@/components/labelled-radio-button/labelled-radio-button";
import NumericInput from "@/components/numeric-input/numeric-input";

export default function Home() {
  return <>
    <h1 className={styles.pageHeader}>Search Results</h1>
    <form className={styles.search}>
      <fieldset className={`${styles.searchField} ${styles.searchFieldInline}`}>
        <LabelledRadioButton
          style={{ whiteSpace: "nowrap" }}
          id="search-type-one-way"
          name="search-type"
          value="one-way"
          defaultChecked
        >One Way</LabelledRadioButton>

        <LabelledRadioButton style={{ whiteSpace: "nowrap" }} id="search-type-round-trip" name="search-type" value="round-trip">Round Trip</LabelledRadioButton>

        <NumericInput className={styles.passengersInput} id="search-passengers" name="search-passengers" step={1} min={1} max={10} defaultValue={1} />
      </fieldset>

      <fieldset className={styles.searchField}>
        <label className={styles.searchFieldLabel}>Departure</label>
        <input className={styles.searchInput} placeholder="Your City/Station" type="text" id="search-departure" name="search-departure" />
      </fieldset>

      <fieldset className={styles.searchField}>
        <label className={styles.searchFieldLabel}>Arrival</label>
        <input className={styles.searchInput} placeholder="Where To?" type="text" id="search-arrival" name="search-arrival" />
      </fieldset>

      <fieldset className={styles.searchField}>
        <label className={styles.searchFieldLabel}>Pick Your Lucky Day</label>
        <input className={styles.searchInput} placeholder="Depart" type="date" id="search-departure-date" name="search-departure-date" />
        <input className={styles.searchInput} placeholder="Return" type="date" id="search-arrival-date" name="search-arrival-date" />
      </fieldset>

      <button type="submit" className={styles.searchSubmit}>Ticket, Please!</button>
    </form>
  </>;
}
