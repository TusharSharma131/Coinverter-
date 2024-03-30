import axios from "axios";
import { API_KEY } from "./Api.js";

export const getHistoricalData = async (date) => {
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
    throw error;
  }
};

//Usage: node <fileName> <YYYY>-<MM>-<DD>