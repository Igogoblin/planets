import planets from "../planets.json" assert { type: "json" };
import { banner, goPage, ourArray } from "./index.js";

console.log("this is card js");

let ourCard;
/**
 * Description Get the data-attribute of the selected card
 * @param {}
 * @returns {} When activated, go to the product page
 */
export function getCard() {
  let cardsNew = document.querySelectorAll(".card");
  let interSearch = document.querySelectorAll(".inter-search");
  let interBasket = document.querySelectorAll(".inter-basket");
  let interLike = document.querySelectorAll(".inter-like");
  let cardsRelated = document.querySelectorAll(".card_rel");
  // проверка ниже только для того чтобы избежать ошибку, если карточек нет
  // document.addEventListener("DOMContentLoaded", () => {
  //   let interSearch = document.querySelectorAll(".inter-search");
  //   if (interSearch.length != 0) {
  //     for (let i = 0; i < 9; i++) {
  //       interSearch[i]?.addEventListener("click", function () {
  //         // console.log(cards[i].dataset);
  //         // console.log(typeof this.dataset.item); //string
  //         ourCard = +cards[i].dataset.item;
  //         console.log(ourCard);
  //         goPage(1);
  //       });
  //     }
  //   }
  // });
  // if (interSearch.length != 0) {
  for (let i = 0; i < 14; i++) {
console.log(i);
    interSearch[i].addEventListener("click", function () {
      console.log(i, i);
      // console.log(cardsNew[i - 5]);
      // console.log(cardsNew[i - 5].getAttribute("data-item"));
      // console.log(ourArray[cardsNew[i - 5].getAttribute("data-item")].id);
      // console.log(ourArray[cardsNew[i - 5]]);
      if (i > 4) {
        ourCard = cardsNew[i - 5].getAttribute("data-item");
        goPage(1);
      }

      if (i < 5) {
        ourCard = cardsRelated[i].getAttribute("data-item");
        showCard();
      }
    });
    interLike[i]?.addEventListener("click", function () {
      console.log("for like");
    });
  }
  // }
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
              <div class="card-interaction">
                <div class="inter-basket"></div>
                <div class="inter-like"></div>
                <div class="inter-search"></div>
              </div>
            </div>
`;
  }
  productsBlock.insertAdjacentHTML("afterbegin", text);
}

const imgBlock = document.querySelector(".img-block");
const imgPrev = document.querySelector(".img-prev_img");
const cardName = document.querySelector(".card-name");
const cardPrice = document.querySelector(".card-price");
const cardDescription = document.querySelector(".card-description > p");
const cardSize = document.querySelectorAll(".card-size_list > div");
const cardLess = document.querySelector(".card_less");
const cardCount = document.querySelector(".card_count");
const cardMore = document.querySelector(".card_more");
// const cardBuy = document.querySelector(".card-buy");
// const cardAdd = document.querySelector(".card-add");
const cardLike = document.querySelector(".card-like");
const cardCategor = document.querySelector(".card-categor > span");
// const cardTags = document.querySelector(".card-tags");
const descriptionTitle = document.querySelector(".description-title");
const descriptonText = document.querySelector(".descripton-text");

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
