let initialPrice = document.querySelector("#initial-price");
let stocksQuantity = document.querySelector("#stocks-quantity");
let currentPrice = document.querySelector("#current-price");
let submitBtn = document.querySelector("#submit-btn");
let outputBox = document.querySelector("#output-box");

let submitHandler = () => {
  let ip = Number(initialPrice.value);
  let qty = Number(stocksQuantity.value);
  let curr = Number(currentPrice.value);

  if(initialPrice.value.length === 0) {
    outputBox.innerText = "Please enter Initial Price";
  }
  else if(stocksQuantity.value.length === 0)
  outputBox.innerText = "Please enter Stock Quantity";
  else if(currentPrice.value.length === 0)
  outputBox.innerText = "Please enter current price";
  else if(initialPrice.value < 0)
  outputBox.innerText = "Please enter positive value";
  else if(stocksQuantity.value < 0)
  outputBox.innerText = "Please enter positive value";
  else if(currentPrice.value < 0)
  outputBox.innerText = "Please enter positive value";
  else
  calculateProfitAndLoss(ip, qty, curr);
}

let showOutput = message => outputBox.innerText = message;

let calculateProfitAndLoss = (initial, quantity, current) => {
  if (initial > current) {
    let loss = (initial - current) * quantity;
    let lossPercentage = ((loss / (initial * quantity) * 100).toFixed(2));

    showOutput(
      `Hey, the loss is ${loss} and the loss percent is ${lossPercentage}%`
    );
  } else if (current > initial) {
    let profit = (current - initial) * quantity;
    let profitPercentage = ((profit / (initial * quantity) * 100).toFixed(2));

    showOutput(
      `Hey, the profit is ${profit} and the profit percent is ${profitPercentage}%`
    );
  } else {
    showOutput("No Loss, No Gain");
  }
}

submitBtn.addEventListener("click", submitHandler);