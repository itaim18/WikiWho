const FACTS_API_DOMAIN = "https://retoolapi.dev/tpsndH/doctorwhofacts/";
const DATES_EVENTS_DOMAIN = "https://retoolapi.dev/Lzxs0A/dates?date=";
const WHO_MODERN_EPS =
  "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/episodes/?api_key=c1b035464ebf8bbc44a25dff0461714a689b46de&format=json&filter=series:36&limit=100&sort=air_date:desc&field_list=name,deck,image,air_date,description,id";
const WHO_COMICS =
  "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/search/?api_key=c1b035464ebf8bbc44a25dff0461714a689b46de&format=json&query=Doctor%20Who&resources=issue&limit=100&field_list=id,image,name,deck,description,cover_date";
const WHO_CLASSIC_EPS =
  "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/episodes/?api_key=c1b035464ebf8bbc44a25dff0461714a689b46de&format=json&filter=series:15&limit=100&sort=air_date:asc&field_list=name,deck,image,air_date,description,id";
const WHO_MERCH =
  "https://api.rainforestapi.com/request?api_key=9F801EF1DE784B20B48CAA1DD207C159&type=search&amazon_domain=amazon.com&search_term=Doctor+Who+Merchandise";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5d5c7b1ac4mshb4312c68edd1af7p102104jsn812147ae910d",
    "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
  },
};
const date = require("../date.js");
export const getRandomFact = async () => {
  let randomPos = Math.floor(Math.random() * 33) + 1;

  const response2 = await fetch(
    "https://bing-image-search1.p.rapidapi.com/images/search?q=tardis",
    options
  );
  const data2 = await response2.json();

  const img = data2.value[randomPos].contentUrl;
  console.log(img);
  let randomId = Math.floor(Math.random() * 53) + 1;
  const response = await fetch(FACTS_API_DOMAIN + randomId);
  const data = await response.json();

  if (!response2.ok) {
    throw new Error(data2.message || "Could not fetch fact.");
  }
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch fact.");
  }
  const fact = {
    image: img,
    id: data.id,
    title: data.title,
    text: data.text,
  };
  return fact;
};
export const getMerch = async () => {
  const res = await fetch(WHO_MERCH);
  const data_merch = await res.json();

  if (!res.ok) {
    throw new Error(data_merch.message || "Could not fetch fact.");
  }
  const { search_results } = data_merch;
  console.log(search_results);
  return search_results;
};
export const getComics = async () => {
  const res = await fetch(WHO_COMICS, {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  });
  const data = await res.json();
  return data.results;
};
export const getClassicEps = async () => {
  const res = await fetch(WHO_CLASSIC_EPS, {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  });
  const data = await res.json();
  return data.results;
};
export const getModernEps = async () => {
  const res = await fetch(WHO_MODERN_EPS, {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  });
  const data = await res.json();
  return data.results;
};

const renderDate = date.getDate();
export const getDateEvent = async () => {
  console.log(renderDate);
  const dateResponse = await fetch(DATES_EVENTS_DOMAIN + renderDate);
  const data = await dateResponse.json();
  if (!dateResponse.ok) {
    throw new Error(data.message || "Could not fetch date.");
  }

  return data;
};
