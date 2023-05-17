import planets from "../planets.json" assert { type: "json" };
import { banner } from "./index.js";

console.log("this is card js");

let ourCard;

export function getCard() {
  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < 9; i++) {
    cards[i].addEventListener("click", function (event) {
      console.log(this.dataset);
      console.log(typeof this.dataset.item); //string
      ourCard = +this.dataset.item;
      console.log(ourCard);
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
  let imageblock = "";
  planets[ourCard].img.forEach(
    (element) => (imageblock += `<img src="${element}" alt="image plant">`)
  );
  imgBlock.innerHTML = "";
  imgBlock.insertAdjacentHTML("afterbegin", imageblock);
  imgPrev.setAttribute("src", `${planets[ourCard].img[0]}`);
  cardName.textContent = planets[ourCard].name;
  cardPrice.textContent = `$ ${planets[ourCard].price}`;
  cardDescription.textContent = planets[ourCard].description;
  // size
  // count
  cardCategor.textContent = planets[ourCard].categories;
  descriptionTitle.textContent = planets[ourCard].description;
}
