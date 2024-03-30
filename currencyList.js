import axios from "axios";
import { API_KEY } from "./Api.js";

export const getCurrencyList = async () => {
  try {
    const response = await axios.get(
      `https://api.freecurrencyapi.com/v1/currencies?apikey=${API_KEY}`
    );
    const currencyList = Object.keys(response.data.data).map(
      (currencyCode) => ({
        code: currencyCode,
        name: response.data.data[currencyCode].name,
        symbol: response.data.data[currencyCode].symbol,
      })
    );
    return currencyList;
  } catch (error) {
    throw error;
  }
};

//Usage: node <fileName> 
