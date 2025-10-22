const convertButton = document.querySelector("#convert-button");
const fromCurrencySelect = document.querySelector("#from-currency");
const toCurrencySelect = document.querySelector("#currency-select");

async function getExchangeRates() {
  const response = await fetch(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL"
  );
  const data = await response.json();
  return {
    USD: parseFloat(data.USDBRL.high),
    EUR: parseFloat(data.EURBRL.high),
    GBP: parseFloat(data.GBPBRL.high),
    BTC: parseFloat(data.BTCBRL.high),
    BRL: 1,
  };
}

async function convertValues() {
  const inputCurrencyValue = parseFloat(
    document.querySelector("#input-currency").value.replace(",", ".")
  );
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(".currency-value");

  const rates = await getExchangeRates();

  const from = fromCurrencySelect.value;
  const to = toCurrencySelect.value;

  // converte o valor pra BRL primeiro
  const valueInBRL = inputCurrencyValue * rates[from];

  // depois converte do BRL pra moeda destino
  const convertedValue = valueInBRL / rates[to];

  // exibe valores
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: from,
  }).format(inputCurrencyValue);

  currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: to,
  }).format(convertedValue);
}

function changeCurrency() {
  const currencyNameTo = document.getElementById("currency-name");
  const currencyImgTo = document.getElementById("currency-img");

  if (toCurrencySelect.value == "USD") {
    currencyNameTo.innerHTML = "Dólar";
    currencyImgTo.src = "./assets/usa.png";
  }
  if (toCurrencySelect.value == "EUR") {
    currencyNameTo.innerHTML = "Euro";
    currencyImgTo.src = "./assets/euro.png";
  }
  if (toCurrencySelect.value == "GBP") {
    currencyNameTo.innerHTML = "Libra";
    currencyImgTo.src = "./assets/libra.png";
  }
  if (toCurrencySelect.value == "BTC") {
    currencyNameTo.innerHTML = "Bitcoin";
    currencyImgTo.src = "./assets/bitcoin.png";
  }
  if (toCurrencySelect.value == "BRL") {
    currencyNameTo.innerHTML = "Real";
    currencyImgTo.src = "./assets/brazil.png";
  }

  convertValues();
}

function changeFromCurrency() {
  const currencyNameFrom = document.querySelector(
    ".currency-box:first-child .currency"
  );
  const currencyImgFrom = document.querySelector(
    ".currency-box:first-child img"
  );

  if (fromCurrencySelect.value == "USD") {
    currencyNameFrom.innerHTML = "Dólar";
    currencyImgFrom.src = "./assets/usa.png";
  }
  if (fromCurrencySelect.value == "EUR") {
    currencyNameFrom.innerHTML = "Euro";
    currencyImgFrom.src = "./assets/euro.png";
  }
  if (fromCurrencySelect.value == "GBP") {
    currencyNameFrom.innerHTML = "Libra";
    currencyImgFrom.src = "./assets/libra.png";
  }
  if (fromCurrencySelect.value == "BTC") {
    currencyNameFrom.innerHTML = "Bitcoin";
    currencyImgFrom.src = "./assets/bitcoin.png";
  }
  if (fromCurrencySelect.value == "BRL") {
    currencyNameFrom.innerHTML = "Real";
    currencyImgFrom.src = "./assets/brazil.png";
  }

  convertValues();
}

toCurrencySelect.addEventListener("change", changeCurrency);
fromCurrencySelect.addEventListener("change", changeFromCurrency);
convertButton.addEventListener("click", convertValues);
