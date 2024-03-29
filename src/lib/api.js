require("dotenv").config();

const FACTS_API_DOMAIN = "https://retoolapi.dev/tpsndH/doctorwhofacts/";
const DATES_EVENTS_DOMAIN = "https://retoolapi.dev/Lzxs0A/dates?date=";
const WHO_MERCH =
  "https://api.rainforestapi.com/request?api_key=" +
  process.env.REACT_APP_AMAZON_API_KEY +
  "&type=search&amazon_domain=amazon.com&search_term=Doctor+Who+Merchandise";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
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

  return search_results;
};

const renderDate = date.getDate();
export const getDateEvent = async () => {
  const dateResponse = await fetch(DATES_EVENTS_DOMAIN + renderDate);
  const data = await dateResponse.json();
  if (!dateResponse.ok) {
    throw new Error(data.message || "Could not fetch date.");
  }

  return data;
};
