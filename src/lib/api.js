const FACTS_API_DOMAIN = "https://retoolapi.dev/tpsndH/doctorwhofacts/";
const DATES_EVENTS_DOMAIN = "https://retoolapi.dev/Lzxs0A/dates?date=";
const date = require("../date.js");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5d5c7b1ac4mshb4312c68edd1af7p102104jsn812147ae910d",
    "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
  },
};

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
