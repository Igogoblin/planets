import planets from "../planets.json" assert { type: "json" };
import * as modal from "./modal.js";
import { getCard, buildReleted, showCard, likes } from "./card.js";
import * as slider from "./slider.js";
import { availability, buildSortArray, forSort } from "./categories.js";
let arr = [];

export let ourArray = [...planets];
// ourArray = [...planets];

export let banner = [];
let goal = 1;

// localStorage.clear();
// let ob = [{ 4: "goal" }, { 3: "main" }];
// localStorage.setItem("test", JSON.stringify(ob));
// console.log(JSON.parse(localStorage.getItem("test")));
console.log(JSON.parse(localStorage.getItem("ourArray")));
// console.log(JSON.parse(localStorage.getItem("likes")));

if (!localStorage.getItem("ourArray")) {
  ourArray = [...planets];
  arr = randomArr(ourArray.length, arr);

  console.log(localStorage);
} else {
  ourArray = JSON.parse(localStorage.getItem("ourArray"));
  // likes = JSON.parse(localStorage.getItem("likes"));
  // likes = JSON.parse(localStorage.get);
  //arr = localStorage.getItem("arr");
  arr = randomArr(ourArray.length, arr);
  console.log("do first visit");
  // console.log(localStorage.getItem("arr"));
  console.log(localStorage);
}

console.log(ourArray);
console.log("arr", arr);
//console.log("likes", likes); //size 0 then give it in localstorage
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
    else {
      sizes[i].addEventListener("click", function () {
        sizes[i].classList.toggle("choice-item");
        console.log(sizes[i].dataset.size);
        ourSize = sizes[i].dataset.size;
        makeOurArraySize();
      });
    }
  }
}
checkCategor();

/**
 * Description Check our array for a category
 * @param {}
 * @returns {array}
 */
function makeOurArray() {
  // надо изменять на проверку каждой катекории иначе надо больше условий

  let choiceItem = document.querySelectorAll(".choice-item");
  // console.log(choiceItem[0]);
  // console.log(ourArray);
  if (choiceItem.length == 0) {
    ourArray.length = 0;
    ourArray = [...planets];
  } else {
    let arrayCategories = [];
    for (let i = 0; i < planets.length - 2; i++) {
      for (let j = 0; j < choiceItem.length; j++) {
        //console.log(choiceItem[j].dataset.categor == planets[i].categories);
        if (choiceItem[j].dataset.categor == planets[i].categories) {
          arrayCategories.push(planets[i]);
        }
        // console.log("arrayCategories", arrayCategories);
        // console.log("ourArray", ourArray);
        if (choiceItem[j].dataset.size == planets[i].size) {
          // проверить есть ли такой в ourArray
        }
      }
    }
    ourArray.length = 0;
    console.log(arrayCategories);
    ourArray = [...arrayCategories];
    localStorage.setItem("ourArray", JSON.stringify(ourArray));
  }

  console.log(choiceItem);
  console.log("ourArray category ", ourArray);
  // =======================  до этого момента работает ==========
  // arr.length = 0;
  // arr = randomArr(ourArray.length, arr);
  // localStorage.setItem("arr", arr);
  console.log("arr for localstorage : ", arr);
  availability();
  // buildSortArray();
  buildArea();
  buildPagination(1);
  // getCard();
  // getLike();
}

function makeOurArraySize() {
  // console.log(ourArray[0].size);
  let choiceItem = document.querySelectorAll(".choice-item");
  console.log(choiceItem);
  if (choiceItem.length == 0) {
    ourArray.length = 0;
    ourArray = [...planets];
  } else {
    let arraySize = [];
    // console.log(planets);
    for (let i = 0; i < planets.length - 2; i++) {
      for (let j = 0; j < choiceItem.length; j++) {
        // console.log(choiceItem[j].dataset.size);
        // console.log(i);
        // console.log(planets[i]);
        // console.log(planets[i].size == choiceItem[j].dataset.size);

        if (planets[i].size == choiceItem[j].dataset.size) {
          arraySize.push(planets[i]);
        }
      }
    }
    ourArray.length = 0;
    ourArray = [...arraySize];
    localStorage.setItem("ourArray", JSON.stringify(ourArray));
  }
  console.log("ourArray in finish size : ", ourArray);
  arr.length = 0;
  arr = randomArr(ourArray.length, arr);
  console.log("163 arr ", arr);
  availability();
  // buildSortArray();
  buildArea();
  buildPagination(1);
  getCard();
  //getLike();
}

// Categories finish ----------------------------------------------------------------

// cоздаю рандомный массив для построения поля в рандомном порядке
/**
 * Description
 * -2 because they are empty
 * @param {number} planets.length-2
 * @returns {array}
 */

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
export function buildArea() {
  console.log("ourArray ", ourArray);
  console.log("arr", arr);
  // arr = randomArr(ourArray.length, arr);
  console.log("arr", arr);
  let coef = 0;
  if (arr.length !== ourArray.length) {
    arr.length = 0;
    arr = randomArr(ourArray.length, arr);
    console.log("zachodit? если arr !== ourArray");
  }
  if (area == null) return;
  area.innerHTML = "";
  let text = "";
  if (forSort > 0) {
    arr.length = 0;
    for (let i = 0; i < ourArray.length; i++) {
      arr.push(i);
    }
  }
  console.log("for building area - ARR: ", arr);
  coef = (goal - 1) * 9;
  console.log("goal ", goal);
  console.log((goal - 1) * 9);
  for (let i = 0; i < 9; i++) {
    if (ourArray.length <= i || i + coef >= ourArray.length) {
      break;
    }
    text += `
            <div class="card" data-item="${ourArray[arr[i + coef]].id}">
              <div class="card-img">
                <img src="${ourArray[arr[i + coef]].img[0]}" alt="card image">
              </div>
              <span class="card-name">${ourArray[arr[i + coef]].name}</span>
              <div class="card-price">$ ${ourArray[arr[i + coef]].price}</div>
              <div class="card-interaction">
                <div class="inter-basket"></div>
                <div class="inter-like ${
                  likes.has(ourArray[arr[i + coef]].id) ? "our-like" : ""
                }"></div>
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
export function buildPagination(goal) {
  // let goal = a;  ===========================
  let checkPage = Math.ceil(ourArray.length / 9); // сколько вообще у нас страниц

  for (let i = 0; i < pagination.length - 1; i++) {
    if (i > checkPage) {
      pagination[i].classList.remove("checkHalf");
      pagination[i].classList.remove("check");
    }
    if (i <= checkPage) {
      pagination[i].classList.add("checkHalf");
      pagination[i].classList.remove("check");
    }
    if (goal < checkPage) {
      pagination[pagination.length - 1].classList.add("checkHalf");
    }
    if (i == goal) {
      pagination[i].classList.remove("checkHalf");
      pagination[i].classList.add("check");
    }
    if (goal == checkPage) {
      pagination[pagination.length - 1].classList.remove("checkHalf");
    }
    if (goal != i) {
      pagination[i].classList.remove("check");
    }
    if (goal > 1) {
      pagination[0].classList.add("checkHalf");
    }
    if (goal === 1) {
      pagination[0].classList.remove("checkHalf");
    }
  }
  buildArea();
  getCard();
  //getLike();
  // finish work pagination *******************************************
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
  console.log("336; checkPage ", checkPage);
  if (pagination[i].classList.contains("check")) {
    goal = i;
  }

  pagination[i].addEventListener("click", function () {
    console.log(arr);
    if (pagination[i].classList.contains("checkHalf")) {
      console.log(pagination.length - 1 === i);
      if (i === 0 && pagination[0].classList.contains("checkHalf")) {
        // if arow straight
        goal--;
        pagination[goal].classList.add("check");
        buildPagination(goal);
      } else if (i === pagination.length - 1) {
        // if arow push back
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
//  monstera-6304439
//  --plant-7268178
// -- bonsai-316573
// -- 2026512

// -- 1183558
// -- 7518669
// -- 6319467
// -- 1183558
// -- 2341486

// плэйбой под прикрытием  чкомед
//  кутис 2014
//  няня
//  субрубикон  6,2 (50ые)
//  скауты против зомби
//  армагеддец  7,8

// виновный
// поездка на выходные - дедектив
// в тени луны
