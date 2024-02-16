const box = document.querySelectorAll(".box");

let change = false;
let valueX = [];
let valueO = [];

box.forEach((element) => {
  element.addEventListener("click", (e) => {
    marked(e);
  });
});

const marked = (e) => {
  if (change == false) {
    e.target.innerHTML = "X";
    let valX = e.target.attributes[1].nodeValue;
    valueX.push(valX);
    if (checkallX()) {
      document.querySelector(".display").innerHTML = "X Won🏆";
      disable();
    }
    change = true;
  } else {
    e.target.innerHTML = "O";
    let valO = e.target.attributes[1].nodeValue;
    valueO.push(valO);
    if (checkallO()) {
      document.querySelector(".display").innerHTML = "O Won🏆";
      disable();
    }
    change = false;
  }
  if (document.querySelector(".display").innerHTML == "") {
    if (valueX.length + valueO.length == 9) {
      document.querySelector(".display").innerHTML = "Match Draw🟰";
      disable();
    }
  }
};

const check1 = ["zero", "one", "two"];
const check2 = ["zero", "three", "six"];
const check3 = ["zero", "four", "eight"];
const check4 = ["one", "four", "seven"];
const check5 = ["two", "five", "eight"];
const check6 = ["two", "four", "six"];
const check7 = ["three", "four", "five"];
const check8 = ["six", "seven", "eight"];

const checkone = (parentArray, subsetArray) => {
  return subsetArray.every((el) => {
    return parentArray.includes(el);
  });
};

const checkallX = () => {
  if (checkone(valueX, check1)) return true;
  if (checkone(valueX, check2)) return true;
  if (checkone(valueX, check3)) return true;
  if (checkone(valueX, check4)) return true;
  if (checkone(valueX, check5)) return true;
  if (checkone(valueX, check6)) return true;
  if (checkone(valueX, check7)) return true;
  if (checkone(valueX, check8)) return true;
  return false;
};

const checkallO = () => {
  if (checkone(valueO, check1)) return true;
  if (checkone(valueO, check2)) return true;
  if (checkone(valueO, check3)) return true;
  if (checkone(valueO, check4)) return true;
  if (checkone(valueO, check5)) return true;
  if (checkone(valueO, check6)) return true;
  if (checkone(valueO, check7)) return true;
  if (checkone(valueO, check8)) return true;
  return false;
};

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.querySelector(".display").innerHTML = "";
  valueX = [];
  valueO = [];
  box.forEach((element) => {
    element.innerHTML = "";
  });
  enable();
});

const disable = () => {
  box.forEach((element) => {
    element.classList.add("disable");
  });
};

const enable = () => {
  box.forEach((element) => {
    element.classList.remove("disable");
  });
};
