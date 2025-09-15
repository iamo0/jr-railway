"use client";

import styles from "./search-form.module.css";

import LabelledRadioButton from "../labelled-radio-button/labelled-radio-button";
import NumericInput from "../numeric-input/numeric-input";
import { useReducer } from "react";

enum TravelType {
  ONE_WAY = 1,
  ROUND_TRIP = 2,
};

type SearchData = {
  travelType: TravelType,
  passengers: number, // 1..10
  departure: string,
  arrival: string,
  dateDeparture: number, // Всегда больше чем Date.now()
  dateArrival: number, // Только для ROUND_TRIP. Всегда больше чем dateDeparture
};

type SearchDataReducerAction = {
  type: "SET_TRAVEL_TYPE",
  payload: TravelType,
};

function searchDataReducer(state: SearchData, {type, payload}: SearchDataReducerAction): SearchData {
  switch(type) {
    case "SET_TRAVEL_TYPE": {
      return {
        ...state,
        travelType: payload,
      };
    }
  }

  throw new TypeError("Unknown action");
};

export default function SearchForm() {
  const [searchData, dispatch] = useReducer(searchDataReducer, {
    travelType: TravelType.ONE_WAY,
    passengers: 2,
    departure: "",
    arrival: "",
    dateDeparture: Date.now(),
    dateArrival: Date.now() + 1000 * 60 * 60 * 24,
  });

  return <form className={styles.search} method="GET">
    <fieldset className={`${styles.searchField} ${styles.searchFieldInline}`}>
      <LabelledRadioButton
        style={{ whiteSpace: "nowrap" }}
        id="search-type-round-trip"
        name="search-type"
        value="round-trip"
        defaultChecked={searchData.travelType === TravelType.ROUND_TRIP}
        onClick={() => dispatch({
          type: "SET_TRAVEL_TYPE",
          payload: TravelType.ROUND_TRIP,
        })}
      >Round Trip</LabelledRadioButton>

      <LabelledRadioButton
        style={{ whiteSpace: "nowrap" }}
        id="search-type-one-way"
        name="search-type"
        value="one-way"
        defaultChecked={searchData.travelType === TravelType.ONE_WAY}
        onClick={() => dispatch({
          type: "SET_TRAVEL_TYPE",
          payload: TravelType.ONE_WAY,
        })}
      >One Way</LabelledRadioButton>

      <NumericInput
        className={styles.passengersInput}
        id="search-passengers"
        name="search-passengers"
        step={1} min={1} max={10}
        defaultValue={searchData.passengers}
      />
    </fieldset>

    <fieldset className={styles.searchField}>
      <label className={styles.searchFieldLabel}>Departure</label>
      <input
        className={styles.searchInput}
        placeholder="Your City/Station"
        type="text"
        id="search-departure"
        name="search-departure"
        defaultValue={searchData.departure}
      />
    </fieldset>

    <fieldset className={styles.searchField}>
      <label className={styles.searchFieldLabel}>Arrival</label>
      <input
        className={styles.searchInput}
        placeholder="Where To?"
        type="text"
        id="search-arrival"
        name="search-arrival"
        defaultValue={searchData.arrival}
      />
    </fieldset>

    <fieldset className={styles.searchField}>
      <label className={styles.searchFieldLabel}>Pick Your Lucky Day</label>

      <input
        className={styles.searchInput}
        placeholder="Depart"
        type="date"
        id="search-departure-date"
        name="search-departure-date"
      />

      <input
        className={styles.searchInput}
        placeholder="Return"
        type="date"
        id="search-arrival-date"
        name="search-arrival-date"
        disabled={searchData.travelType === TravelType.ONE_WAY}
      />
    </fieldset>

    <button type="submit" className={styles.searchSubmit}>Ticket, Please!</button>
  </form>;
};
