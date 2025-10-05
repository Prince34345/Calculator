const input = document.getElementById("display-input-id");
const Equal = document.getElementById("equal");
const answer = document.getElementById("answer-result");
const clear = document.getElementById("clear");
const buttons = document.querySelectorAll(".number, .operator");
let currentVal;
const back = document.getElementById('back');


input.addEventListener("input", (e) => {
  currentVal = e.target.value;
});

let result = "";

answer.addEventListener("click", () => {
  input.value = answer.innerText;
  answer.innerText = "0";
});

clear.addEventListener("click", () => {
  input.value = "0";
  answer.innerText = "0";
  currentVal = 0;
});

Equal.addEventListener("click", (e) => {
  try {
    result = eval(currentVal);
    answer.innerHTML = result;
  } catch (err) {
    input.value = "Error";
  }
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.textContent;

    if (input.value === "0") {
      input.value = val;
      currentVal = val;
    } else {
      input.value += val;
      currentVal += val;
    }
  });
});


back.addEventListener('click', () => {
    console.log("hello");
    if (currentVal.length > 0) {
         currentVal = currentVal.slice(0, -1)
    }
    input.value = currentVal;
})