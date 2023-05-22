import planets from "../planets.json" assert { type: "json" };
import { banner, goPage } from "./index.js";

console.log("this is card js");

let ourCard;

export function getCard() {
  let cards = document.querySelectorAll(".card");
  let interSearch = document.querySelectorAll(".inter-search");
  let interBasket = document.querySelectorAll(".inter-basket");
  let interLike = document.querySelectorAll(".inter-like");

  for (let i = 0; i < 9; i++) {
    interSearch[i].addEventListener("click", function (event) {
      console.log(cards[i].dataset);
      // console.log(typeof this.dataset.item); //string
      ourCard = +cards[i].dataset.item;
      console.log(ourCard);
      goPage(1);
    });
  }
}
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

export function showCard() {
  if (!ourCard) ourCard = 0;

  let imageblock = "";
  // planets[ourCard].img.forEach(
  //   (element) => (imageblock += `<img src="${element}" alt="image plant">`)
  // );

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
  cardDescription.textContent = planets[ourCard].description;
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
  // count -------------------------------------------------------
  cardCategor.textContent = planets[ourCard].categories;
  descriptionTitle.textContent = planets[ourCard].description;
  checkImgShow();
}

function checkImgShow() {
  let imgBlockItems = document.querySelectorAll(".img-block > img");
  console.log(imgBlockItems);
  for (let i = 0; i < 4; i++) {
    // imgBlockItems[i].classList.remove("increase");
    console.log("i", i);
    imgBlockItems[i].addEventListener("click", function () {
      imgBlockItems[i].classList.add("increase");
      imgPrev.setAttribute("src", `${planets[ourCard].img[i]}`);

      // for (let j = 0; j < 4; j++) {
      //   if (j != i) {
      //     imgBlockItems[i].classList.remove("increase");
      //     console.log("i-=j", i + " j " + j);
      //     // console.log("j", j);
      //   } else {
      //                        пока что не работает показать выбранную картинку
      //   }
      // }
      // imgBlockItems[i].classList.add("increase");
      // console.log(imgBlockItems);
    });
  }
}
