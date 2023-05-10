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
arr = randomArr(planets.length);

const area = document.querySelector(".araa");

// for(let i = 0; i< planets.length; i++){

// }
