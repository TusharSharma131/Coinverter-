import axios from "axios";
import { API_KEY } from "./Api.js";

export const getSpecifiedData = async (receivedDate, ...specifiedCurrencies) => {
  try {
    const response = await axios.get(
      `https://api.freecurrencyapi.com/v1/historical?date=${receivedDate}&apikey=${API_KEY}`
    );
    const historicalRates = {};
    specifiedCurrencies.forEach((currency) => {
      historicalRates[currency] = {
        code: currency,
        ExchangeRates: response.data.data[receivedDate][currency],
      };
    });
    return historicalRates;
  } catch (error) {
    throw error;
  }
};

//Usage: node <fileName> <YYYY>-<MM>-<DD> <currency1> <currency2> and so on..

