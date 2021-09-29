var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

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

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = ((loss / initial) * 100).toFixed(2);

    showOutput(
      `Hey, the loss is ${loss} and the loss percent is ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = ((profit / initial) * 100).toFixed(2);

    showOutput(
      `Hey, the profit is ${profit} and the profit percent is ${profitPercentage}%`
    );
  } else {
    showOutput(`No pain no gain and no gain no pain`);
  }
}

function showOutput(message) {
  outputBox.innerText = message;
}