import Freecurrencyapi from "@everapi/freecurrencyapi-js";
import { getCurrencyList } from "./currencyList.js";
import { getHistoricalData } from "./HistoricalData.js";
import { getSpecifiedData } from "./SpecifiedHistoricalData.js";
import { getHistoricalRates } from "./OfflineHistoricalData.js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_867h8nithe8DERNQfEBTMSQqC6zAZsWXnA8EFUsZ"
);

const convertCurrency = async (fromCurrency, toCurrency, units) => {
  try {
    const res = await freecurrencyapi.latest({
      base_currency: fromCurrency,
      currencies: toCurrency,
    });
    const convertedCurrency = res.data[toCurrency];
    const answer = convertedCurrency * units;
    return answer;
  } catch (error) {
    throw new Error(
      "Error occurred while converting currency: " + error.message
    );
  }
};

export {
  convertCurrency,
  getCurrencyList,
  getHistoricalData,
  getSpecifiedData,
  getHistoricalRates,
};

//Usage: node <fileName> <from_currency> <to_currency> <units>