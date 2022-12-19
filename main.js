let output = document.querySelector(".output");
let buttons = document.querySelectorAll(".calKey");
let cancelBtn = document.getElementById("cancel");
let equalBtn = document.getElementById("equal");
let delectBtn = document.getElementById("delect");
let allZero = document.querySelector(".btn1");
let textZero = document.getElementById("zero");

let toZero = { value: false };

//sections to make the buttons active and give the output values.
buttons.forEach((Elements) => {
  Elements.addEventListener("click", () => {
    toZero.value = false;
    if (output.innerHTML[0] == 0) {
      output.innerHTML = output.innerHTML.slice(1).toLocaleLowerCase("eng");
    }

    output.innerHTML += Elements.value;
  });
});

// section to give the output value of 0.
cancelBtn.addEventListener("click", () => {
  output.innerHTML = "0";
});

// section to print out the calculate value when clicked.
equalBtn.addEventListener("click", () => {
  let myAnswer = eval(output.innerHTML);

  if (typeof myAnswer == "undefined") {
    output.innerHTML = "0";
  } else {
    toZero.value = true;
    output.innerHTML = myAnswer;
  }
});

//section to delect the last value of the output value.
delectBtn.addEventListener("click", () => {
  let answer = output.innerHTML;
  output.innerHTML = answer.slice(0, answer.length - 1);
});

allZero.addEventListener("click", () => {
  if (toZero.value == true) {
    output.innerHTML = "0";
  } else {
    output.innerHTML += "0";
  }
});
