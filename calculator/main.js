const input = document.getElementById("display-input-id");
const Equal = document.getElementById("equal");
const answer = document.getElementById("answer-result");
const clear = document.getElementById("clear");
const buttons = document.querySelectorAll(".number, .operator");
let currentVal;
const back = document.getElementById('back');
const specialOperator = document.querySelectorAll('.specialOperator')

input.addEventListener("input", (e) => {
  currentVal = e.target.value;
  console.log(currentVal);
});

let result = "";
let memory = 0

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
    if (memory > 0) {
       return;
    }
    result = eval(currentVal);

    answer.innerHTML = result;
    return;
  } catch (err) {
    input.value = "Error";
    alert("Invalid Expression")
    return;
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



let specialOps = {
   "%": () => {
          input.value = currentVal + "%";
          let res = currentVal / 100;
          currentVal = res;
    },
   "M+": () => {
          let num = eval(currentVal);
          memory += num;
          currentVal = "";
          input.value = "";    
   },
   'M-': () => {
          let num = eval(currentVal);
          memory -= num;
          console.log(num, memory, currentVal)          
          currentVal = "";
          input.value = ""; 
   },
   "√": () => {
          input.value = "√" + currentVal;
          let res = Math.sqrt(currentVal);
          currentVal = res;
   },
   "MR": () => {
          currentVal = memory;
          input.value = "";
          answer.innerHTML = "=" + currentVal;
   },
   "MC": () => {
          memory = 0;
          answer.innerText = "=0"
          currentVal = "0";
   }
}



specialOperator.forEach((btn) => {
    btn.addEventListener("click", () => {
      const operator = btn.textContent.trim();
      if (specialOps[operator]) {
          specialOps[operator]();
      }
    })
})


back.addEventListener('click', () => {
    console.log("hello");
    if (currentVal.length > 0) {
         currentVal = currentVal.slice(0, -1)
    }
    input.value = currentVal;
})