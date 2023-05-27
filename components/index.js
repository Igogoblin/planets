import planets from "../planets.json" assert { type: "json" };
import * as modal from "./modal.js";
import { getCard, buildReleted, showCard } from "./card.js";
import * as slider from "./slider.js";
import { availability } from "./categories.js";
let arr = [];
export let ourArray = [];
ourArray = [...planets];
console.log(planets);
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
// Categories start ----------------------------------------------------------------
let ourCategori;
let ourSize;
export const categoriesLi = document.querySelectorAll(`[data-categor]`);
export const sizes = document.querySelectorAll(`[data-size]`);

function checkCategor() {
  for (let i = 0; i < categoriesLi.length; i++) {
    categoriesLi[i].addEventListener("click", function () {
      console.log(categoriesLi[i].dataset.categor);
      categoriesLi[i].classList.toggle("choice-item");
      ourCategori = categoriesLi[i].dataset.categor;
      makeOurArray();
    });
    if (i > 2) continue;
    sizes[i].addEventListener("click", function () {
      sizes[i].classList.toggle("choice-item");
      console.log(sizes[i].dataset.size);
      ourSize = sizes[i].dataset.size;
      makeOurArray();
    });
  }
}
checkCategor();
/**
 * Description Check our array for a category
 * @param {}
 * @returns {array}
 */
function makeOurArray() {
  ourArray.length = 0;
  let choiceItem = document.querySelectorAll(".choice-item");
  // здесь будте срабатывать только на одну категорию ту что нажали
  // planets.forEach((element) => {
  //   if (element.categories == ourCategori) {
  //     ourArray.push(element);
  //   }
  // });
  // planets.forEach((element) => {
  //   if (element.size == ourSize) {
  //     ourArray.push(element);
  //   }
  // });
  console.log(choiceItem);
  // for (let i = 0; i < planets.length; i++) {
  //   for (let j = 0; j < choiceItem.length; j++) {
  //     // проверим сетКатегорию ********************************
  //     // console.log(choiceItem[j].getAttribute("data-categor"));
  //     if (
  //       (planets[i].categories == choiceItem[j].getAttribute("data-categor") ||
  //         planets[i].size == choiceItem[j].getAttribute("data-size")) &&
  //       /!ourArray.includes(planets[i])
  //     ) {
  //       ourArray.push(planets[i]);
  //     }
  //     // if (j < 3) {
  //     //   if (
  //     //     planets[i].size == choiceItem[j].getAttribute("data-categor") &&
  //     //   /!ourArray.includes(planets[i])
  //     //   ) {
  //     //     ourArray.push(planets[i]);
  //     //   }
  //     // }
  //   }
  // }
  for (let i = 0; i < planets.length; i++) {
    for (let j = 0; j < choiceItem.length; j++) {
      if (planets[i].categories == choiceItem[j].getAttribute("data-categor")) {
        ourArray.push(planets[i]);
      }
    }
  }
  if (ourArray.length === 0) {
    // если не выбирали категории ------------------------
    for (let i = 0; i < planets.length; i++) {
      for (let j = 0; j < choiceItem.length; j++) {
        if (planets[i].size == choiceItem[j].getAttribute("data-size")) {
          ourArray.push(planets[i]);
        }
      }
    }
  } else {
    let arraySize = [];
    for (let i = 0; ourArray.length; i++) {
      for (let j = 0; j < choiceItem.length; j++) {
        // if(ourArray[i].size==)
      }
    }
  }
  console.log(ourArray);
  arr.length = 0;
  arr = randomArr(ourArray.length, arr);
  console.log(arr);
  availability();
  buildArea();
  buildPagination(1);
  getCard();
}
// Categories finish ----------------------------------------------------------------

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
const interSearch = document.querySelector(".inter-search");
const main = document.querySelector(".main");
const toBlogs = document.querySelectorAll(".toBlog");

for (let i = 0; i < 3; i++) {
  navigation[i].addEventListener("click", () => goPage(i));
  toBlogs[i].addEventListener("click", () => goPage(2));
}

export function goPage(i) {
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
}

/**
 * Description Construction of the Card Field
 * @returns {any}
 */
function buildArea() {
  if (area == null) return;
  area.innerHTML = "";
  let text = "";

  for (let i = 0; i < 9; i++) {
    if (ourArray.length <= i) {
      break;
    }
    text += `
            <div class="card" data-item="${ourArray[arr[i]].id}">
              <div class="card-img">
                <img src="${ourArray[arr[i]].img[0]}" alt="card image">
              </div>
              <span class="card-name">${ourArray[arr[i]].name}</span>
              <div class="card-price">$ ${ourArray[arr[i]].price}</div>
              <div class="card-interaction">
                <div class="inter-basket"></div>
                <div class="inter-like"></div>
                <div class="inter-search"></div>
              </div>
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
  let checkPage = Math.ceil(ourArray.length / 9); // сколько вообще у нас страниц
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

// paginationShow();
// при первой загрузке показываем первую страницу, с памятью надо менять
buildPagination(1);
// это надо перекинуть в функцию ***********************************
getCard();
