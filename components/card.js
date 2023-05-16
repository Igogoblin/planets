// import { arr } from "./index.js";/
import planets from "../planets.json" assert { type: "json" };
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
  }
}

// console.log(planets.id == ourCard);
// if (planets.id == ourCard) {
//   // console.log(this.planets.name);
// }
// console.log(planets);
// function buildShopPage() {}
