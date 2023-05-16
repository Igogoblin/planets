import planets from "../planets.json" assert { type: "json" };
// import { arr } from "./index.js";/
console.log("this is card js");
let ourCard;
const imgBlock = document.querySelector(".img-block");
export function getCard() {
  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < 9; i++) {
    cards[i].addEventListener("click", function (event) {
      console.log(this.dataset);
      console.log(typeof this.dataset.item); //string
      ourCard = this.dataset.item;
    });

const productsBlock = document.querySelector(".products-block");
function buildReleted() {
  productsBlock.innerHTML = "";
  let text = "";
  for (let i = 0; i < 5; i++) {
    text += `
<div class="card" data-item="${planets[arr[i]].id}">
              <img src="${planets[arr[i]].img[0]}" alt="card image">
              <span class="card-name">${planets[arr[i]].name}</span>
              <div class="card-price">$ ${planets[arr[i]].price}</div>
            </div>
`;
  }
  productsBlock.insertAdjacentHTML("afterbegin", text);
}

buildReleted();