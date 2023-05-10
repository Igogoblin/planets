import planets from "../planets.json" assert { type: "json" };
let arr = [];

/**
 * Description create random number
 * @param {number} max
 * @returns {number}
 */
function random(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Description create random unique array
 * @param {number} a - length array
 * @returns {array}
 */
function randomArr(a) {
  for (let i = 0; i < a; i++) {
    let count = random(a);
    !arr.includes(count) ? arr.push(count) : i--;
  }
  return arr;
}

console.log(planets);
// cоздаю рандомный массив для построения поля в рандомном порядке
/**
 * Description
 * -2 because they are empty
 * @param {number} planets.length-2
 * @returns {array}
 */
arr = randomArr(planets.length - 2);
console.log(arr);
const area = document.querySelector(".area");

function buildArea() {
  area.innerHTML = "";
  let text = "";
  for (let i = 0; i < 9; i++) {
    text += `
<div class="card">
              <img src="${planets[arr[i]].img[0]}" alt="card image">
              <span class="card-name">${planets[arr[i]].name}</span>
              <div class="card-price">$ ${planets[arr[i]].price}</div>
            </div>
`;
  }
  area.insertAdjacentHTML("afterbegin", text);
}
buildArea();
