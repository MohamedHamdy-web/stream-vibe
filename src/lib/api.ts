const BASE_URL = "https://api.imdbapi.dev";

export interface Title {
  id: string;
  type?: string;
  primaryTitle: string;
  originalTitle?: string;
  startYear?: number;
  runtimeSeconds?: number;
  genres?: string[];
  plot?: string;
  primaryImage?: {
    url: string;
    width?: number;
    height?: number;
  };
  rating?: {
    aggregateRating: number;
    voteCount: number;
  };
}

export async function getTitles(
  type: "MOVIE" | "TV_SERIES",
  limit = 20,
): Promise<Title[]> {
  const res = await fetch(
    `${BASE_URL}/titles?types=${type}&sortBy=SORT_BY_POPULARITY&sortOrder=DESC&minVoteCount=100000`,
    { next: { revalidate: 3600 } },
  );
  if (!res.ok) throw new Error("Failed to fetch titles");
  const data = await res.json();

  let titles: Title[] = data.titles ?? [];

  // fetch next page if we need more
  if (titles.length < limit && data.nextPageToken) {
    const res2 = await fetch(
      `${BASE_URL}/titles?types=${type}&sortBy=SORT_BY_POPULARITY&sortOrder=DESC&minVoteCount=100000&pageToken=${data.nextPageToken}`,
      { next: { revalidate: 3600 } },
    );
    const data2 = await res2.json();
    titles = [...titles, ...(data2.titles ?? [])];
  }

  // only return movies that have poster images
  return titles.filter((t) => t.primaryImage?.url).slice(0, limit);
}

export async function getTitle(titleId: string): Promise<Title> {
  const res = await fetch(`${BASE_URL}/titles/${titleId}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch title");
  return res.json();
}

export async function searchTitles(query: string): Promise<Title[]> {
  const res = await fetch(
    `${BASE_URL}/search/titles?query=${encodeURIComponent(query)}&limit=20`,
    { next: { revalidate: 3600 } },
  );
  if (!res.ok) throw new Error("Failed to search titles");
  const data = await res.json();
  return data.titles ?? [];
}

export async function getTitleImages(titleId: string): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/titles/${titleId}/images?pageSize=10`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch images");
  const data = await res.json();
  return data.images?.map((img: { url: string }) => img.url) ?? [];
}
