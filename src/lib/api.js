require("dotenv").config();

const FACTS_API_DOMAIN = "https://retoolapi.dev/tpsndH/doctorwhofacts/";
const DATES_EVENTS_DOMAIN = "https://retoolapi.dev/Lzxs0A/dates?date=";
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
export const getComics = async () => {
  const res = await fetch("https://cors-app.onrender.com/comics");
  const data = await res.json();

  return data;
};
export const getIssues = async () => {
  const res = await fetch("https://cors-app.onrender.com/issues");
  const data = await res.json();
  return data;
};
export const getClassicEps = async () => {
  const res = await fetch("https://cors-app.onrender.com/classic");
  const data = await res.json();

  return data;
};
export const getModernEps = async () => {
  const res = await fetch("https://cors-app.onrender.com/modern");
  const data = await res.json();

  return data;
};
export const getSpecials = async () => {
  const res = await fetch("https://cors-app.onrender.com/specials");
  const data = await res.json();

  return data;
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
