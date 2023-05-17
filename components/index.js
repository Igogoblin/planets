import planets from "../planets.json" assert { type: "json" };
import { getCard, buildReleted, showCard } from "./card.js";
let arr = [];
export let banner = [];
let goal = 1;
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

export function randomArr(a, arr) {
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
arr = randomArr(planets.length - 2, arr);
banner = randomArr(planets.length - 2, banner);
buildReleted();
console.log(arr);
console.log(banner);

const area = document.querySelector(".area");
const pagination = document.querySelectorAll(".pagination > ul > li");
const navigation = document.querySelectorAll(".navigation > nav > ul > li");
const blogs = document.querySelector(".blogs");
const shop = document.querySelector(".shop");
const main = document.querySelector(".main");

for (let i = 0; i < 3; i++) {
  navigation[i].addEventListener("click", () => {
    if (i === 0) {
      shop.classList.add("non");
      blogs.classList.add("non");
      main.classList.remove("non");
      showCard();
    } else if (i === 1) {
      blogs.classList.add("non");
      main.classList.add("non");
      shop.classList.remove("non");
      showCard();
    } else if (i === 2) {
      main.classList.add("non");
      shop.classList.add("non");
      blogs.classList.remove("non");
      showCard();
    }
  });
}

/**
 * Description
 * @returns {any}
 */
function buildArea() {
  if (area == null) return;
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
  // let goal = a;  ===========================
  let checkPage = Math.ceil(arr.length / 9); // сколько вообще у нас страниц
  for (let i = 0; i < pagination.length; i++) {
    if (i !== a) {
      pagination[i].classList.remove("check");
      if (i < a) {
        pagination[i].classList.add("checkHalf");
      }
    }
    if (i <= checkPage && a < checkPage && a !== i) {
      pagination[i].classList.add("checkHalf");
      pagination[pagination.length - 1].classList.add("checkHalf");
    }

    if (a === 1) {
      pagination[0].classList.remove("checkHalf");
    }
    if (a === checkPage) {
      pagination[pagination.length - 1].classList.remove("checkHalf");
    }
  }
}
/**
 * Description show page pagination first page by contentLoaded
 * I'll change it when I enter it localStorage
 *
 */
document.addEventListener("DOMContentLoaded", function () {
  pagination[1].classList.add("check");
});
for (let i = 0; i < pagination.length; i++) {
  let checkPage = Math.ceil(arr.length / 9);

  if (pagination[i].classList.contains("check")) {
    goal = i;
  }

  pagination[i].addEventListener("click", function () {
    if (pagination[i].classList.contains("checkHalf")) {
      console.log(pagination.length - 1 === i);
      if (i === 0 && pagination[0].classList.contains("checkHalf")) {
        goal--;
        pagination[goal].classList.add("check");
        buildPagination(goal);
      } else if (i === pagination.length - 1) {
        goal++;
        pagination[goal].classList.add("check");
        buildPagination(goal);
      } else {
        pagination[i].classList.add("check");
        goal = i;
        buildPagination(i);
      }
    }
  });
}

// при первой загрузке показываем первую страницу, с памятью надо менять
buildPagination(1);

getCard();
