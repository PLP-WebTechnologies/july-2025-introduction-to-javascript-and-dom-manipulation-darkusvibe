
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageInput = document.getElementById("ageInput");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
  const age = parseInt(ageInput.value, 10);
  if (isNaN(age)) {
    ageResult.textContent = "Please enter a valid age.";
  } else if (age < 18) {
    ageResult.textContent = "You are under 18.";
  } else {
    ageResult.textContent = "You are an adult.";
  }
});


function calculateTotal(prices) {
  return prices.reduce((sum, price) => sum + price, 0);
}

function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

const calcTotalBtn = document.getElementById("calcTotalBtn");
const cartTotal = document.getElementById("cartTotal");

calcTotalBtn.addEventListener("click", () => {
  const items = [19.99, 5.49, 3.50];
  const total = calculateTotal(items);
  cartTotal.textContent = "Cart Total: " + formatCurrency(total);
});


const countdownBtn = document.getElementById("countdownBtn");
const countdownList = document.getElementById("countdownList");

countdownBtn.addEventListener("click", () => {
  countdownList.innerHTML = "";
  for (let i = 5; i >= 1; i--) {
    const li = document.createElement("li");
    li.textContent = i;
    countdownList.appendChild(li);
  }
  const li = document.createElement("li");
  li.textContent = "Go!";
  countdownList.appendChild(li);
});


const toggleTextBtn = document.getElementById("toggleTextBtn");
const message = document.getElementById("message");

toggleTextBtn.addEventListener("click", () => {
  message.classList.toggle("hidden");
});
