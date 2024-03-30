import fs from "fs";
import axios from "axios";
import { API_KEY } from "./Api.js";

// Function to fetch historical exchange rates from API
const HistoricalData = async (date) => {
  try {
    const response = await axios.get(
      `https://api.freecurrencyapi.com/v1/historical?date=${date}&apikey=${API_KEY}`
    );
    const ratesData = response.data.data[date];
    const historicalRates = Object.keys(ratesData).map((currencyCode) => ({
      code: currencyCode,
      ExchangeRate: ratesData[currencyCode],
    }));
    return historicalRates;
  } catch (error) {
    console.log("Error fetching Historical Data: ", error);
    throw error;
  }
};

// Function to retrieve cached historical exchange rates
const getCachedRates = async (date) => {
  try {
    // Attempt to read cached data from file system
    const cachedData = await fs.promises.readFile(`${date}.json`, "utf8");
    return JSON.parse(cachedData);
  } catch (error) {
    // If file doesn't exist or any other error occurs, return null
    return null;
  }
};

// Function to save fetched exchange rates to cache
const saveToCache = async (date, rates) => {
  try {
    await fs.promises.writeFile(`${date}.json`, JSON.stringify(rates));
  } catch (error) {
    throw error;
  }
};

// Function to get historical exchange rates (fetched or cached)
export const getHistoricalRates = async (date) => {
  try {
    let rates = await getCachedRates(date);

    if (!rates) {
      // If rates are not found in the cache, fetch them from the API
      rates = await HistoricalData(date);

      // Save fetched rates to the cache
      await saveToCache(date, rates);
    }

    return rates;
  } catch (error) {
    throw error;
  }
};

//Usage: node <fileName> <YYYY>-<MM>-<DD>