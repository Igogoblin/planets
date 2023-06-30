import planets from "../planets.json" assert { type: "json" };
import * as modal from "./modal.js";
import { getCard, buildReleted, showCard, likes } from "./card.js";
import * as slider from "./slider.js";
import { availability, buildSortArray, forSort } from "./categories.js";
let arr = [];

export let ourArray = [...planets];
// ourArray = [...planets];
let basket = new Set();
export let banner = [];
let goal = 1;

//localStorage.clear();
// let ob = [{ 4: "goal" }, { 3: "main" }];
// localStorage.setItem("test", JSON.stringify(ob));

// console.log(JSON.parse(localStorage.getItem("test")));
console.log(JSON.parse(localStorage.getItem("ourArray")));
// console.log(JSON.parse(localStorage.getItem("likes")));

if (!localStorage.getItem("ourArray")) {
  console.log("ne ponjal");
  ourArray = [...planets];
  arr = randomArr(ourArray.length, arr);

  console.log(localStorage);
} else {
  // ourArray = JSON.parse(localStorage.getItem("ourArray"));
  // likes.add(...JSON.parse(localStorage.getItem("like")));
  // basket.add(...JSON.parse(localStorage.getItem("basket")));
  let forStorageBasket = JSON.parse(localStorage.getItem("basket"));
  for (let i = 0; i < forStorageBasket.length; i++) {
    basket.add(forStorageBasket[i]);
  }
  // forStorageBasket.forEach((element) => {
  //   basket.add(element);
  // });
  let forStorageLike = JSON.parse(localStorage.getItem("like"));
  for (let i = 0; i < forStorageLike.length; i++) {
    basket.add(forStorageLike[i]);
  }
  // forStorageLike.forEach((element) => {
  //   likes.add(element);
  // });
  console.log(localStorage);
  console.log(ourArray);
  console.log(likes);
  console.log(basket);
  // arr = randomArr(ourArray.length, arr);
  console.log("do first visit");
  // console.log(localStorage.getItem("arr"));
  console.log(localStorage);
}

console.log(ourArray);
console.log("arr", arr);

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

  console.log("arr for localstorage : ", arr);
  availability();

  buildArea();
  buildPagination(1);
}

function makeOurArraySize() {
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
const modulBasket = document.querySelector(".modul-basket");
//let interBasket = document.querySelectorAll(".inter-basket"); // стиль в карточках
for (let i = 0; i < 3; i++) {
  navigation[i].addEventListener("click", () => goPage(i));
  toBlogs[i].addEventListener("click", () => goPage(2));
}

export function goPage(i) {
  if (i === 0) {
    shop.classList.add("non");
    blogs.classList.add("non");
    main.classList.remove("non");
    modulBasket.classList.add("non");
    showCard();
  } else if (i === 1) {
    blogs.classList.add("non");
    main.classList.add("non");
    shop.classList.remove("non");
    modulBasket.classList.add("non");
    showCard();
  } else if (i === 2) {
    main.classList.add("non");
    shop.classList.add("non");
    blogs.classList.remove("non");
    modulBasket.classList.add("non");
    blogSection.classList.remove("non");
    notesSection.classList.remove("non");
    showCard();
  }
}

/**
 * Description Construction of the Card Field
 * @returns {any}
 */
export function buildArea() {
  // likes.add(...JSON.parse(localStorage.getItem("like")));
  // basket.add(...JSON.parse(localStorage.getItem("basket")));
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
  //getCardBasket();
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
// brake tokens by plants
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

// start work with basket modul-------------------------------------------
const quantity = document.querySelector(".basket"); // показать сколько товаров
const basketButton = document.querySelector(".basket-button"); //кнопка для перехода в модуль корзины
const basketItem = document.querySelector(".basket-item");
const blogSection = document.querySelector(".blog");
const notesSection = document.querySelector(".notes");

basketButton.addEventListener("click", function () {
  main.classList.add("non");
  shop.classList.add("non");
  blogs.classList.remove("non");
  modulBasket.classList.remove("non");
  blogSection.classList.add("non");
  notesSection.classList.add("non");
  buildCartBasket();
});
//console.log(basketItem.innerHTML);
// function getCardBasket() {
//   let card = document.querySelectorAll(".card");
//   for (let i = 0; i < interBasket.length; i++) {
//     interBasket[i].addEventListener("click", function () {
//       console.log(Number(card[i].dataset.item));
//       if (basket.has(Number(card[i].dataset.item))) {
//         basket.delete(Number(card[i].dataset.item));
//       } else {
//         basket.add(Number(card[i].dataset.item));
//       }
//     });
//   }

//   console.log(basket);
// }
// getCardBasket();

function buildCartBasket() {
  let basketCart = document.querySelector(".basket-cart");
  let placeBasket = document.querySelector(".place-basket");
  basket.clear();
  console.log(localStorage);
  let forStorage = JSON.parse(localStorage.getItem("basket"));
  console.log(forStorage);
  for (let i = 0; i < forStorage.length; i++) {
    basket.add(forStorage[i]);
  }
  // forStorage.forEach((element) => {
  //   basket.add(element);
  // });

  console.log(basket);
  console.log(planets);
  if (basket.size > 0) {
    placeBasket.innerHTML = "";
    let text = "";
    for (let i = 0; i < basket.size; i++) {
      console.log(forStorage[i]);
      text += `
      <div class="basket-cart" data-item="${forStorage[i]}">
                    <div class="cart-prod">
                      <img class="cart-img" src=${
                        planets[forStorage[i]].img[0]
                      } alt="image">
                      <div class="cart-title">${
                        planets[forStorage[i]].name
                      }</div>
                    </div>
                    <div class="cart-price head-second">$ ${
                      planets[forStorage[i]].price
                    }</div>
                    <div class="cart-quantity head-second">
                      <div class="cart-less">-</div>
                      <div class="cart-count">1</div>
                      <div class="cart-more">+</div>
                    </div>
                    <div class="cart-total head-second">$ ${
                      planets[forStorage[i]].price
                    }</div>
                    <div class="cart-dell head-second"></div>
                  </div>
      `;
    }
    placeBasket.insertAdjacentHTML("afterbegin", text);
  } else return;
  interactionBasket();
}

function interactionBasket() {
  let cartBasket = document.querySelectorAll(".basket-cart");
  let cartLess = document.querySelectorAll(".cart-less");
  let cartCount = document.querySelectorAll(".cart-count");
  let cartMore = document.querySelectorAll(".cart-more");
  let cartTotal = document.querySelectorAll(".cart-total");
  let cartDell = document.querySelectorAll(".cart-dell");
  for (let i = 0; i < basket.size; i++) {
    console.log("i", basket[i]);
  }
  for (let i = 0; i < cartDell.length; i++) {
    cartDell[i].addEventListener("click", function () {
      console.log(cartBasket[i].getAttribute("data-item"));
      basket.delete(Number(cartBasket[i].getAttribute("data-item")));
      console.log(basket);
      localStorage.setItem("basket", JSON.stringify(basket));
      console.log(localStorage);
      cartBasket[i].innerHTML = "";
      console.log();
    });
  }
}
const basketCoupon = document.querySelector(".basket-coupon > input");
basketCoupon.addEventListener("click", () => {
  alert("Sorry, this service is not available right now");
});
