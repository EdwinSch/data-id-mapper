/* ---- TARGETS && INITIALIZERS ---- */
const form = document.getElementById("input-form");
const output = document.querySelector(".id-output");
const characters = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = Array.from(Array(10).keys());

/* ---- FUNCTIONS ---- */

const mapper = characters.concat(numbers);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // clear output field
  output.innerHTML = "";

  let lineAmount = document.getElementById("line-amount").value;

  for (let i = 0; i < lineAmount; i++) {
    let id = "";
    for (let i = 0; i < 8; i++) {
      id += mapper[getInt()];
    }
    const line = document.createElement("code");
    line.innerHTML = `${id}`;
    output.appendChild(line);
  }
});

function getInt() {
  return Math.floor(Math.random() * mapper.length);
}
