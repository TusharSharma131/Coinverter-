# 🌟Coinverter: Effortless Currency Conversion with Precision

Welcome to Coinverter! This sleek npm package allows you to effortlessly convert currencies with precision. Whether you're dealing with current exchange rates or historical data, Coinverter has got you covered!


## 🚀 Installation

To get started, simply install the package via npm:

```bash
  npm install coinverter
```
    
## 📚 Features

- 💱 Convert Currencies: Convert between any two currencies with the latest rates.
- 📅 Historical Data: Retrieve historical exchange rates for a specified date.
- 🔍 Currency List: Get a complete list of supported currencies.
- 🎯 Specified Currency Data: Fetch exchange rates for specific currencies on a given date.


## 🛠️ Usage

🔄 Convert Currency

```javascript
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
```

📜 Get Historical Data
```javascript
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
```

🌐 Get Currency List
```javascript
import { getCurrencyList } from "coinverter";

getCurrencyList()
  .then((currencyList) => {
    console.log(currencyList);
  })
  .catch((error) => {
    console.log(error);
  });
```

🎯 Get Specified Currency Data
```javascript
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
    "Usage: node SpecifiedHistoricalData.js <YYYY>-<MM>-<DD> <currency1> <currency2> and so on.."
  );
}
```


## 📄 License
This project is licensed under the Apache-2.0 License - see the LICENSE[https://www.apache.org/licenses/LICENSE-2.0] file for details.


## 👨‍💻 Maintainer
Tushar Sharma - GitHub Profile[https://github.com/TusharSharma131]


## 🤝 Contribute

Contributions are welcome! 

