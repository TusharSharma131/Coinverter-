# Coinverter

Effortlessly convert currencies with precision using this sleek npm package.

## Install

npm install coinverter

Usage
Get a List of Currencies
import { getCurrencyList } from "coinverter";

getCurrencyList()
  .then((currencyList) => {
    console.log(currencyList);
  })
  .catch((error) => {
    console.log(error);
  });

  Get Historical Currency Data
  import { getHistoricalData } from "coinverter";

// Accept user input
const takeDate = process.argv[2];

// Check if argument is provided
if (takeDate) {
  getHistoricalData(takeDate)
    .then((historicalRates) => {
      console.log(historicalRates);
    })
    .catch((error) => {
      console.log(error);
    });
} else {
  console.log("Usage: node HistoricalData.js <YYYY>-<MM>-<DD>");
}

Convert Currency
import { convertCurrency } from "coinverter";

// Accept user input
const fromCurrency = process.argv[2];
const toCurrency = process.argv[3];
const units = process.argv[4];

// Check if all required parameters are provided
if (fromCurrency && toCurrency && units) {
  convertCurrency(fromCurrency, toCurrency, units)
    .then(result => {
      console.log(`Converted amount: ${result}`);
    })
    .catch(error => {
      console.error(error.message);
    });
} else {
  console.log("Usage: node index.js <from_currency> <to_currency> <units>");
}

Get Specified Historical Data for Selected Currencies
import { getSpecifiedData } from "coinverter";

// Accept user input
const receivedDate = process.argv[2];
const specifiedCurrencies = process.argv.slice(3); // Use slice to convert to an array

// Check if all arguments are provided
if (receivedDate && specifiedCurrencies.length > 0) {
  getSpecifiedData(receivedDate, ...specifiedCurrencies)
    .then((historicalRates) => {
      console.log(historicalRates);
    })
    .catch((error) => {
      console.log("Failed to fetch specified currencies exchange rates", error);
    });
} else {
  console.log(
    "Usage: node SpecifiedHistoricalData.js <YYYY>-<MM>-<DD> <currency1> <currency2> ..."
  );
}

Contribute
Pull requests are welcome. Please see CONTRIBUTING.md for more details.

Maintainers
This package is maintained by Tushar Sharma.

License
Apache-2.0 © 2024 Tushar Sharma

Keywords
npm
currency conversion
coinverter

Bugs
For any issues, please visit GitHub Issues.




  
