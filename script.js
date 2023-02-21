/* ---- TARGETS && INITIALIZERS ---- */
const form = document.getElementById("input-form");
const output = document.querySelector(".id-output");
const characters = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = Array.from(Array(10).keys());

/* ---- FUNCTIONS ---- */

const mapper = characters.concat(numbers);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  for (let i = 0; i < 20; i++) {
    let id = "";
    for (let i = 0; i < 10; i++) {
      id += mapper[getInt()];
    }
    const line = document.createElement("p");
    line.innerHTML = `<p>${id}</p>`;
    output.appendChild(line);
  }
});

function getInt() {
  return Math.floor(Math.random() * mapper.length);
}
