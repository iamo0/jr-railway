"use client";

import styles from "./search-form.module.css";

import LabelledRadioButton from "../labelled-radio-button/labelled-radio-button";
import NumericInput from "../numeric-input/numeric-input";
import { useMemo, useReducer } from "react";

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
  dateArrival: number, // Только дляROUND_TRIP. Всегда больше чем dateDeparture
};

type SearchDataReducerAction =
  | { type: "SET_TRAVEL_TYPE", payload: TravelType }
  | { type: "SET_PASSENGERS", payload: number }
  | { type: "SET_DEPARTURE", payload: string }
  | { type: "SET_ARRIVAL", payload: string }
  | { type: "SET_DATE_DEPARTURE", payload: number }
  | { type: "SET_DATE_ARRIVAL", payload: number };

function searchDataReducer(state: SearchData, {type, payload}: SearchDataReducerAction): SearchData {
  switch(type) {
    case "SET_TRAVEL_TYPE":
      return { ...state, travelType: payload };
    case "SET_PASSENGERS":
      return { ...state, passengers: payload };
    case "SET_DEPARTURE":
      return { ...state, departure: payload };
    case "SET_ARRIVAL":
      return { ...state, arrival: payload };
    case "SET_DATE_DEPARTURE":
      return { ...state, dateDeparture: payload };
    case "SET_DATE_ARRIVAL":
      return { ...state, dateArrival: payload };
    default:
      throw new TypeError("Unknown action");
  }
};

export default function SearchForm() {
  const [searchData, dispatch] = useReducer(searchDataReducer, {
    travelType: TravelType.ROUND_TRIP,
    passengers: 2,
    departure: "",
    arrival: "",
    dateDeparture: (function() {
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      now.setDate(now.getDate() + 1);
      return now.getTime();
    })(),
    dateArrival: (function() {
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      now.setDate(now.getDate() + 2);
      return now.getTime();
    })(),
  });

  const validationMessages = useMemo(function() {
    return [
      () => searchData.passengers < 0 ? "Too few passengers" : null,
      () => searchData.passengers > 10 ? "Too many passengers" : null,
      () => searchData.departure.trim() === "" ? "Departure place is not set" : null,
      () => searchData.arrival.trim() === "" ? "Travel destination is not set" : null,
      () => searchData.arrival === searchData.departure && searchData.arrival.trim() !== "" ? "Destination couldn't be the same place as departure place" : null,
      () => searchData.dateDeparture && searchData.dateDeparture < Date.now() ? "Departure date is in the past" : null,
      () => searchData.travelType === TravelType.ROUND_TRIP && searchData.dateArrival < searchData.dateDeparture ? "Arrival date should be after departure date" : null,
    ]
      .map((f) => f())
      .filter(m => m);
  }, [searchData]);

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
        value={searchData.passengers}
        onChange={(value) => dispatch({
          type: "SET_PASSENGERS",
          payload: value,
        })}
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
        value={searchData.departure}
        onChange={(evt) => dispatch({
          type: "SET_DEPARTURE",
          payload: evt.target.value,
        })}
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
        value={searchData.arrival}
        onChange={(evt) => dispatch({
          type: "SET_ARRIVAL",
          payload: evt.target.value,
        })}
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
        value={new Date(searchData.dateDeparture).toISOString().slice(0, 10)}
        onChange={(evt) => dispatch({
          type: "SET_DATE_DEPARTURE",
          payload: new Date(evt.target.value).getTime(),
        })}
      />

      <input
        className={styles.searchInput}
        placeholder="Return"
        type="date"
        id="search-arrival-date"
        name="search-arrival-date"
        disabled={searchData.travelType === TravelType.ONE_WAY}
        value={new Date(searchData.dateArrival).toISOString().slice(0, 10)}
        onChange={(evt) => dispatch({
          type: "SET_DATE_ARRIVAL",
          payload: new Date(evt.target.value).getTime(),
        })}
      />
    </fieldset>

    <button disabled={validationMessages.length > 0} type="submit" className={styles.searchSubmit}>Ticket, Please!</button>

    {
      validationMessages.length === 0
        ? null
        : <ul className={styles.validationMessages}>
          {validationMessages.map((m, i) => <li className={styles.validationMessage} key={`message-${i}`}>{m}</li>)}
        </ul>
    }
  </form>;
};
