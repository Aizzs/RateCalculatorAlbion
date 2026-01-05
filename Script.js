const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", calculate);

function calculate() {
  const amount = parseFloat(document.getElementById("amount").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const result = document.getElementById("result");

  if (isNaN(amount) || isNaN(rate)) {
    result.textContent = "Please enter valid numbers";
    return;
  }

  // Formula:
  // totalAmount = amount * rate
  // finalAmount = totalAmount - amount

  const totalAmount = amount * (rate / 100);
  const finalAmount = totalAmount - amount;

  result.textContent = `Final Amount: ${finalAmount.toFixed(2)}`;
}
