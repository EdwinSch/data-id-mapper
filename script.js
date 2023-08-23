/* ---- TARGETS && INITIALIZERS ---- */
const form = document.getElementById("input-form");
const output = document.querySelector(".id-output");
const toast = document.querySelector(".toast-wrapper");
const characters = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = Array.from(Array(10).keys());

let lineAmount;
let charAmount;

/* ---- SCRIPT ---- */

// Concat 2 symbol arrays
const mapper = characters.concat(numbers);

// Submit button
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // clear output field
  output.innerHTML = "";
  // get values
  lineAmount = document.getElementById("line-amount").value;
  charAmount = document.getElementById("character-amount").value;
  const numbersCheck = document.getElementById("numbers-only").checked;
  // numbers only check and generate ID's
  if (numbersCheck === true) {
    generateIds(numbers);
  } else {
    generateIds(mapper);
  }
  // copy to clipboard functionality
  const lines = document.querySelectorAll("code");
  lines.forEach((line) => {
    line.addEventListener("click", function () {
      navigator.clipboard.writeText(line.innerHTML);
      line.style.color = "coral";
      toast.classList.add("show-toast");

      setTimeout(() => {
        toast.classList.remove("show-toast");
      }, 1000);
    });
  });
});

/* ---- FUNCTIONS ---- */

// Choose random integer
function getInt(array) {
  return Math.floor(Math.random() * array.length);
}

// Generate ID's and push to DOM
function generateIds(array) {
  for (let i = 0; i < lineAmount; i++) {
    let id = "";
    for (let i = 0; i < charAmount; i++) {
      id += array[getInt(array)];
    }
    const line = document.createElement("code");
    line.innerHTML = `${id}`;
    output.appendChild(line);
  }
}
