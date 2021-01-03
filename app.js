let container = document.querySelector(".container");
let returnNum = document.querySelector(".answer");
let row1 = document.querySelector(".row1");

let number = 0;
let operator = "";
let second_number = 0;
let answer;

function reset() {
  number = 0;
  operator = "";
  second_number = 0;
}

// mouseclick event

container.addEventListener("click", function (e) {
  // if AC is pressed = reset numbers and output
  if (e.target.innerText == "AC") {
    reset();
    answer = 0;
    returnNum.innerText = 0;

    // if not pressed directly on a number - other numbers wont show
  } else if (e.target.innerText.length > 1) {
    returnNum.innerText = "";

    // equal sign and next step
  } else if (e.target.innerText === "=") {
    calculator(number, operator, second_number);
    reset();
    number = answer;

    // second number
  } else if (number > 0 && !operator == "" && e.target.innerText <= 9) {
    second_number += e.target.innerText;
    returnNum.innerText = second_number.slice(1);

    // first number
  } else if (e.target.innerText <= 9) {
    number += e.target.innerText;
    console.log(number);
    returnNum.innerText = number.slice(1);

    // operator
  } else if (!e.target.innerText <= 9) {
    operator = e.target.innerText;
    returnNum.innerText = operator;
  }
});

// move the calculator
window.addEventListener("mousedown", function (e) {
  if (e.path.length > 4) {
  } else {
    container.style.marginLeft = e.pageX - 10 + "px";
    container.style.marginTop = e.pageY - 10 + "px";
  }
});

let calculatorKey;

window.addEventListener("keydown", function (e) {
  if (calculatorKey === "" && e.key <= 9) {
    console.log("hey");
  }
});
// operators function
function calculator(num1, operation, num2) {
  switch (operation) {
    case "+":
      answer = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      answer = parseFloat(num1) - parseFloat(num2);
      break;
    case "%":
      answer = parseFloat(num1) % parseFloat(num2);
      break;
    case "*":
      answer = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      answer = parseFloat(num1) / parseFloat(num2);
      break;
  }
  console.log(answer);
  returnNum.innerText = answer;
}
