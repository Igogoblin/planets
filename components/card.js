import planets from "../planets.json" assert { type: "json" };
import { banner, goPage, ourArray } from "./index.js";
export let likes = new Set();
export let basket = new Map();
console.log("this is card js");

let ourCard;
/**
 * Description Get the data-attribute of the selected card
 * @param {}
 * @returns {} When activated, go to the product page
 */
const quantity = document.querySelector(".basket"); // показать сколько товаров
const basketItem = document.querySelector(".basket-item"); //количество
let area = document.querySelector(".area");
// work with area cards from target------------------------------------------------------
area.onclick = function (event) {
  let card = event.target.closest(".card");
  if (!card) return;
  if (!area.contains(card)) return;
  areaCard(card, event);
  //console.log(event.target);
};
let selectedDiv;
function areaCard(div, event) {
  if (selectedDiv) {
    selectedDiv.classList.remove("areaCard");
  }
  selectedDiv = div;
  selectedDiv.classList.add("areaCard");
  console.log(selectedDiv.dataset.item);
  console.log(event.target);
  console.log(selectedDiv);
  console.log(event.target.classList.value[6]);
  ourCard = Number(selectedDiv.dataset.item);
  switch (event.target.classList.value[6]) {
    case "b":
      console.log("da in inter-basket");
      basket.has(ourCard) ? basket.delete(ourCard) : basket.set(ourCard, 1);
      basketItem.innerHTML = basket.size;

      basket.size < 1
        ? (basketItem.style.display = "none")
        : (basketItem.style.display = "flex");

      forMemory(basket, 0);
      break;
    case "l":
      console.log("da in inter-Like");
      event.target.classList.contains("our-like")
        ? likes.delete(ourCard)
        : likes.add(ourCard);
      if (likes.entries(ourCard)) {
        cardLike.classList.remove("our-like");
      } else {
        cardLike.classList.add("our-like");
      }
      event.target.classList.toggle("our-like");
      console.log("59 likes ", likes);
      forMemory(likes, 1);
      console.log("likes ", likes);
      break;
    case "s":
      console.log("da in inter-search");
      goPage(1);
      likes.has(+ourCard)
        ? cardLike.classList.add("our-like")
        : cardLike.classList.remove("our-like");
      break;
  }

  basketItem.innerHTML = basket.size;
  basket.size < 1
    ? (basketItem.style.display = "none")
    : (basketItem.style.display = "block");
  console.log(basket);
  console.log(likes);
  console.log(localStorage);
  // это реакция на лайки в шопе
}
// finish finish area cards ----------------------------------------------------
// export function getCard() {
//   let cardsNew = document.querySelectorAll(".card");
//   let interBasket = document.querySelectorAll(".inter-basket");
//   let interLike = document.querySelectorAll(".inter-like");
//   let interSearch = document.querySelectorAll(".inter-search");

//   let cardsRelated = document.querySelectorAll(".card_rel"); //card in shop

//   for (let i = 0; i < 9; i++) {
//     interSearch[i]?.addEventListener("click", function () {
//       ourCard = cardsNew[i].getAttribute("data-item");
//       goPage(1);
//       likes.has(+ourCard)
//         ? cardLike.classList.add("our-like")
//         : cardLike.classList.remove("our-like");
//     });
//     interLike[i]?.addEventListener("click", function () {
//       if (interLike[i].classList.contains("our-like")) {
//         likes.delete(Number(cardsNew[i].getAttribute("data-item")));
//       } else {
//         likes.add(Number(cardsNew[i].getAttribute("data-item")));
//       }

//       forMemory(likes, 1);
//       console.log(likes);
//       interLike[i].classList.toggle("our-like");
//     });
//     interBasket[i]?.addEventListener("click", function () {
//       console.log(
//         "for basket it will be number card for add to basket ",
//         Number(cardsNew[i].getAttribute("data-item"))
//       );
//       console.log("basket", basket);
//       basket.has(Number(cardsNew[i].getAttribute("data-item")))
//         ? basket.delete(Number(cardsNew[i].getAttribute("data-item")))
//         : basket.set(Number(cardsNew[i].getAttribute("data-item")), 1);
//       console.log("basket", basket);
//       basketItem.innerHTML = basket.size;

//       basket.size < 1
//         ? (basketItem.style.display = "none")
//         : (basketItem.style.display = "flex");

//       forMemory(basket, 0);
//       console.log("basket", basket);
//       console.log(localStorage);
//     });
//   }

//   if (likes.entries(ourCard)) {
//     cardLike.classList.add("our-like");
//   } else {
//     cardLike.classList.remove("our-like");
//   }
//   // для лайка на странице магазина =================
//   cardLike.addEventListener("click", function () {
//     console.log("163 ourCard ", ourCard);
//     console.log("164 cardLike ", cardLike);
//     console.log(cardLike.classList.contains("our-like"));

//     if (cardLike.classList.contains("our-like")) {
//       cardLike.classList.remove("our-like");
//       likes.delete(Number(ourCard));
//     } else {
//       cardLike.classList.add("our-like");
//       likes.add(Number(ourCard));
//     }
//     console.log("168 likes ", likes);
//     localStorage.setItem("likes", JSON.stringify(likes));
//   });

//   console.log("basket ", basket);
//   console.log("likes ", likes);
//   basketItem.innerHTML = basket.size;
//   basket.size < 1
//     ? (basketItem.style.display = "none")
//     : (basketItem.style.display = "block");
// }

/**
 * Description
 * @param {set()} to localStorage
 * @returns {set()} from localStorage
 */
function forMemory(ourObj, num) {
  let nameStorage;
  num === 0 ? (nameStorage = "basket") : (nameStorage = "like");

  if (nameStorage == "like") {
    console.log("ourObj ", ourObj);
    let forStorage = [...ourObj];
    localStorage.setItem(nameStorage, JSON.stringify(forStorage));
    forStorage = JSON.parse(localStorage.getItem(nameStorage));
    ourObj.add(...forStorage);
  } else if (nameStorage == "basket") {
    console.log(localStorage);
    console.log(ourObj);
    console.log(JSON.stringify(Array.from(ourObj.entries())));
    localStorage.setItem(
      nameStorage,
      JSON.stringify(Array.from(ourObj.entries()))
    );
    // localStorage.setItem(nameStorage, JSON.stringify(ourObj));
    console.log(localStorage.getItem(nameStorage));
  }
  return ourObj;
}

/**
 * Description We build banner cards on the product page
 * @param {}
 * @returns {}
 */
const productsBlock = document.querySelector(".products-block");
export function buildReleted() {
  productsBlock.innerHTML = "";
  let text = "";
  for (let i = 0; i < 5; i++) {
    text += `
            <div class="card_rel" data-item="${planets[banner[i]].id}">
              <img src="${planets[banner[i]].img[0]}" alt="card image">
              <span class="card-name_rel">${planets[banner[i]].name}</span>
              <div class="card-price_rel">$ ${planets[banner[i]].price}</div>
              <div class="card-interaction-rel">
                <div class="inter-basket-rel"></div>
                <div class="inter-like-rel ${
                  likes.has(planets[banner[i]].id) ? "our-like" : ""
                }"></div>
                <div class="inter-search-rel"></div>
              </div>
            </div>
`;
  }
  productsBlock.insertAdjacentHTML("afterbegin", text);
}

const imgBlock = document.querySelector(".img-block");
const imageWrap = document.querySelector(".image__wrap");
export const imgPrev = document.querySelector(".img-prev_img");
const cardName = document.querySelector(".card-name");
const cardPrice = document.querySelector(".card-price");
const cardDescription = document.querySelector(".card-description > p");
const cardSize = document.querySelectorAll(".card-size_list > div");
// const cardLess = document.querySelector(".card_less");
// const cardCount = document.querySelector(".card_count");
// const cardMore = document.querySelector(".card_more");
// const cardBuy = document.querySelector(".card-buy");
const cardAdd = document.querySelector(".card-add");
const cardLike = document.querySelector(".card-like");
const cardCategor = document.querySelector(".card-categor > span");
// const cardTags = document.querySelector(".card-tags");
const descriptionTitle = document.querySelector(".description-title");
const descriptonText = document.querySelector(".descripton-text");

if (cardLike.classList.contains("our-like")) {
  cardLike.classList.remove("our-like");
  likes.delete(Number(ourCard));
  localStorage.setItem("like", JSON.stringify(likes));
} else {
  cardLike.classList.add("our-like");
  likes.add(Number(ourCard));
  localStorage.setItem("like", JSON.stringify(likes));
}

export function showCard() {
  if (!ourCard) ourCard = 0;
  let imageblock = "";
  for (let i = 0; i < 4; i++) {
    if (i === 0) {
      imageblock += `<img src="${planets[ourCard].img[0]}" alt="image plant" class="increase">`;
    } else {
      imageblock += `<img src="${planets[ourCard].img[i]}" alt="image plant">`;
    }
  }
  imgBlock.innerHTML = "";
  imgBlock.insertAdjacentHTML("afterbegin", imageblock);
  imageWrap.setAttribute(
    "style",
    `background-image: url("${planets[ourCard].img[0]}")`
  );
  imgPrev.setAttribute("src", `${planets[ourCard].img[0]}`);
  cardName.textContent = planets[ourCard].name;
  cardPrice.textContent = `$ ${planets[ourCard].price}`;
  cardDescription.textContent = planets[ourCard].briefly;
  if (planets[ourCard].size === "small") {
    cardSize[0].classList.add("size-style");
    cardSize[1].classList.remove("size-style");
    cardSize[2].classList.remove("size-style");
  } else if (planets[ourCard].size === "medium") {
    cardSize[0].classList.remove("size-style");
    cardSize[1].classList.add("size-style");
    cardSize[2].classList.remove("size-style");
  } else if (planets[ourCard].size === "large") {
    cardSize[0].classList.remove("size-style");
    cardSize[1].classList.remove("size-style");
    cardSize[2].classList.add("size-style");
  }
  cardCategor.textContent = planets[ourCard].categories;
  descriptionTitle.textContent = planets[ourCard].description;
  descriptonText.textContent = planets[ourCard].descriptionP;
  checkImgShow();
}

function checkImgShow() {
  let imgBlockItems = document.querySelectorAll(".img-block > img");
  let count = 0;
  for (let i = 0; i < 4; i++) {
    imgBlockItems[i].addEventListener("click", function () {
      imgBlockItems[i].classList.add("increase");
      imageWrap.setAttribute(
        "style",
        `background-image: url("${planets[ourCard].img[i]}")`
      );
      imgPrev.setAttribute("src", `${planets[ourCard].img[i]}`);
      count = i;
      imgBlockItems.forEach((element, item) => {
        if (item != count) {
          imgBlockItems[item].classList.remove("increase");
        }
      });
    });
  }
}

cardAdd.addEventListener("click", function () {
  // basket.has(Number(ourCard))
  //   /? basket.delete(Number(ourCard))
  //   : basket.set(Number(ourCard), 1);
  if (basket.has(Number(ourCard))) {
    basket.delete(Number(ourCard));
    this.classList.remove("show-add");
    this.textContent = "ADD TO CART";
  } else {
    basket.set(Number(ourCard), 1);
    this.classList.add("show-add");
    this.textContent = "DELLETE";
  }
  console.dir(this.textContent);
  forMemory(basket, 0);
  basketItem.innerHTML = basket.size;
});
