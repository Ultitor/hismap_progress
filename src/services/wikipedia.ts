export async function searchWikipedia(query: string) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=1&format=json&origin=*&srsearch=${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.query.search[0];
}

export async function getWikipediaExtract(pageId: number) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&exintro=true&explaintext=true&pageids=${pageId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.query.pages[pageId].extract;
}