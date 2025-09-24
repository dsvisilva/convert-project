const convertButton = document.querySelector("#convert-button");
const currencySelect = document.querySelector("#currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector("#input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(".currency-value");

  console.log(currencySelect.value);

  const dolarToday = 5.2;
  const euroToday = 6.2;

  if (currencySelect.value == "USD") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "EUR") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.getElementById("currency-img");

    if (currencySelect.value == "USD") {
        currencyName.innerHTML = "Dólar";
        currencyImg.src = "./assets/usa.png";
    } 
    if (currencySelect.value == "EUR") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/euro.png";
    }   
    
    convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
