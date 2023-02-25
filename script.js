/* ---- TARGETS && INITIALIZERS ---- */
const form = document.getElementById("input-form");
const output = document.querySelector(".id-output");
const characters = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = Array.from(Array(10).keys());
// console.log(numbers);

/* ---- FUNCTIONS ---- */

// concat 2 symbol arrays
const mapper = characters.concat(numbers);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // clear output field
  output.innerHTML = "";
  // generate ID's
  const lineAmount = document.getElementById("line-amount").value;
  const charAmount = document.getElementById("character-amount").value;
  const numbersCheck = document.getElementById("numbers-only").checked;

  if (numbersCheck === true) {
    for (let i = 0; i < lineAmount; i++) {
      let id = "";
      for (let i = 0; i < charAmount; i++) {
        id += numbers[getInt(numbers)];
      }
      const line = document.createElement("code");
      line.innerHTML = `${id}`;
      output.appendChild(line);
    }
  } else {
    for (let i = 0; i < lineAmount; i++) {
      let id = "";
      for (let i = 0; i < charAmount; i++) {
        id += mapper[getInt(mapper)];
      }
      const line = document.createElement("code");
      line.innerHTML = `${id}`;
      output.appendChild(line);
    }
  }
  // copy to clipboard
  const lines = document.querySelectorAll("code");
  lines.forEach((line) => {
    line.addEventListener("click", function () {
      navigator.clipboard.writeText(line.innerHTML);
      line.style.color = "coral";
    });
  });
});
// Choose random integer
function getInt(array) {
  return Math.floor(Math.random() * array.length);
}
