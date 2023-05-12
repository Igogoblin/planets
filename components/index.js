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
const pagination = document.querySelectorAll(".pagination > ul > li");

/**
 * Description
 * @returns {any}
 */
function buildArea() {
  area.innerHTML = "";
  let text = "";
  for (let i = 0; i < 9; i++) {
    text += `
<div class="card" data-item="${planets[arr[i]].id}">
              <img src="${planets[arr[i]].img[0]}" alt="card image">
              <span class="card-name">${planets[arr[i]].name}</span>
              <div class="card-price">$ ${planets[arr[i]].price}</div>
            </div>
`;
  }
  area.insertAdjacentHTML("afterbegin", text);
}

buildArea();

/**
 * Description show page pagination
 * @param {number}
 * @returns {any}
 */
function buildPagination(a) {
  for (let i = 0; i < pagination.length; i++) {
    if (a == i) {
      pagination[i].classList.add("check");
    }
  }
  checkPagination(a);
}
buildPagination(1);

function checkPagination(a) {
  let checkPage = Math.ceil(arr.length / 9);
  console.log("checkPage", checkPage);
  console.log(pagination[1]);
  console.log(pagination[2]);
  console.log(pagination[3]);
  for (let i = 0; i < pagination.length; i++) {
    if (a == 1) {
      pagination[0].classList.remove("check");
      pagination[0].classList.remove("checkHalf");
    }
    if (checkPage < i) {
      pagination[i].classList.remove("checkHalf");
    }
    if (checkPage + 1 > i) {
      pagination[i].classList.add("checkHalf");
      console.log(pagination[pagination.length - 1]);
      console.log(pagination.length - 1);
      pagination[pagination.length - 1].classList.add("checkHalf");
    }
  }
}
