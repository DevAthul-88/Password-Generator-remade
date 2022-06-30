const input = document.getElementById("input");
const generateBtn = document.getElementById("btn");
const lengthInput = document.getElementById("len");
const lowerCheckbox = document.getElementById("lower_check");
const upperCheckbox = document.getElementById("higher_check");
const numberCheckBox = document.getElementById("number_check");
const symbolCheckBox = document.getElementById("symbol_check");
const str = document.getElementById("str");
const copyBtn = document.getElementById("copy");

let poorRegExp = /[a-z]/;
let weakRegExp = /(?=.*?[0-9])/;
let mediumRegExp = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
);
let strongRegExp = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

const lowerPattern = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const higherPattern = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numberPattern = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbolPattern = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  "`",
  "]",
  "[",
  "}",
  "{",
];

window.onload = () => {
  let passwordLength = lengthInput.value;
  let finalPassword = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    if (symbolCheckBox.checked == true) {
      finalPassword += symbolPattern[randomSymbol()];
    }
    if (lowerCheckbox.checked == true) {
      finalPassword += lowerPattern[randomLower()];
    }
    if (numberCheckBox.checked == true) {
      finalPassword += numberPattern[randomPattern()];
    }
    if (upperCheckbox.checked == true) {
      finalPassword += higherPattern[randomHigher()];
    }
  }

  input.value = finalPassword.slice(0, passwordLength);
  strength();
};

generateBtn.addEventListener("click", () => {
  let passwordLength = lengthInput.value;
  let finalPassword = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    if (symbolCheckBox.checked == true) {
      finalPassword += symbolPattern[randomSymbol()];
    }
    if (lowerCheckbox.checked == true) {
      finalPassword += lowerPattern[randomLower()];
    }
    if (numberCheckBox.checked == true) {
      finalPassword += numberPattern[randomPattern()];
    }
    if (upperCheckbox.checked == true) {
      finalPassword += higherPattern[randomHigher()];
    }
  }

  input.value = finalPassword.slice(0, passwordLength);
  strength();
});

function randomLower() {
  return Math.floor(Math.random() * lowerPattern.length);
}

function randomHigher() {
  return Math.floor(Math.random() * higherPattern.length);
}
function randomSymbol() {
  return Math.floor(Math.random() * symbolPattern.length);
}
function randomPattern() {
  return Math.floor(Math.random() * numberPattern.length);
}

function strength() {
  let poorPassword = input.value.match(poorRegExp);
  let weekPassword = input.value.match(weakRegExp);
  let strongPassword = input.value.match(strongRegExp);
  let mediumPassword = input.value.match(mediumRegExp);

  if (poorPassword) {
    if ((poorPassword[0].index = 1)) {
      str.classList.add("w3-red");
      str.classList.remove("w3-yellow");
      str.classList.remove("w3-green");
      str.classList.remove("w3-blue");
      str.innerHTML = "Poor";
    }
  }
  if (weekPassword) {
    if ((weekPassword[0].index = 1)) {
      str.classList.add("w3-yellow");
      str.classList.remove("w3-red");
      str.classList.remove("w3-green");
      str.classList.remove("w3-blue");
      str.innerHTML = "Week";
    }
  }
  if (mediumPassword) {
    if ((mediumPassword[0].index = 1)) {
      str.classList.add("w3-blue");
      str.classList.remove("w3-red");
      str.classList.remove("w3-yellow");
      str.classList.remove("w3-green");
      str.innerHTML = "Medium";
    }
  }
  if (strongPassword) {
    if ((strongPassword[0].index = 1)) {
      str.classList.add("w3-green");
      str.classList.remove("w3-red");
      str.classList.remove("w3-yellow");
      str.classList.remove("w3-blue");
      str.innerHTML = "Strong";
    }
  }
}


copyBtn.addEventListener("click", () => {
    alert("Password has been copied");
    input.select();
    document.execCommand("copy");
})