import { SearchData, TravelType } from "@/types/search-data";
import styles from "./page.module.css";

import SearchForm from "@/components/search-form/search-form";
import { now, roundDate } from "@/helpers/round-date";
import { redirect, RedirectType } from "next/navigation";

interface PageSearchParams {
  "search-type": "one-way" | "round-trip",
  "search-passengers": string,
  "search-departure": string,
  "search-arrival": string,
  "search-departure-date": string,
  "search-arrival-date"?: string,
}

export default async function Page({ searchParams }: {
  searchParams: Promise<PageSearchParams>,
}) {
  const search = await searchParams;

  if (
    search["search-type"] === undefined ||
    search["search-passengers"] === undefined ||
    search["search-departure"] === undefined ||
    search["search-arrival"] === undefined ||
    search["search-departure-date"] === undefined ||
    search["search-type"] === "round-trip" && search["search-arrival-date"] === undefined
  ) {
    redirect("/", RedirectType.replace);
  }

  const defaultSearchData = {
    travelType: search["search-type"] === "one-way" ? TravelType.ONE_WAY : TravelType.ROUND_TRIP,
    passengers: parseInt(search["search-passengers"]),
    departure: search["search-departure"],
    arrival: search["search-arrival"],
    dateDeparture: roundDate(search["search-departure-date"]),
    dateArrival: (search["search-arrival-date"] !== undefined ? roundDate(search["search-arrival-date"]) : now()),
  } as SearchData;

  return <>
    <div className={styles.pageHeader}>
      <h1 className={styles.pageHeaderTitle}>Search results</h1>
    </div>
    <SearchForm defaultSearchData={defaultSearchData} />
  </>;
}
