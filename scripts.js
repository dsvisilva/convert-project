const convertButton = document.querySelector("#convert-button");

function convertValues() {
    const inputCurrencyValue = document.querySelector("#input-currency").value;

    const dolarToday = 5.2;

    const converterValue = inputCurrencyValue / dolarToday;

    console.log(converterValue);
}

convertButton.addEventListener("click", convertValues);