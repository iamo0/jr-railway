import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestURL = new URL(request.url);
  const search = requestURL.searchParams;
  const searchString = search.get("search") ? search.get("search") : "";

  return NextResponse.json(
    [
      { value: "Москва" },
      { value: "Мурино" },
      { value: "Санкт Петербург" },
      { value: "Нижнекамск" },
      { value: "Нижневартовск" },
      { value: "Нижний Тагил" },
      { value: "Нижний Новгород" },
      { value: "Владивосток" },
      { value: "Вышний Волочек" },
      { value: "Пекин" },
      { value: "Берлин" },
      { value: "Биробиджан" },
      { value: "Лондон" },
    ].filter(
      (o) => o.value.startsWith(searchString!)
    )
  );
}
