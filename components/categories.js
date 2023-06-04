import planets from "../planets.json" assert { type: "json" };
import { ourArray, categoriesLi, sizes, buildArea } from "./index.js";
console.log("this is categories file");

let categorLi = document.querySelectorAll(`[data-categor] > span`);
let sizeLi = document.querySelectorAll(`[data-size] > span`);
const panelChoiceFilter = document.querySelector(".panel-choice_filter");

panelChoiceFilter.addEventListener("click", () => {
  console.log("we push button");
  // buildSortArray();
});
export function availability() {
  console.log(categoriesLi[1].dataset.categor);
  let choiceItem = document.querySelectorAll(".choice-item");
  for (let j = 0; j < categoriesLi.length; j++) {
    if (categoriesLi[j].classList.contains("choice-item")) {
      let count = 0;
      for (let i = 0; i < ourArray.length; i++) {
        if (ourArray[i].categories == categoriesLi[j].dataset.categor) {
          count++;
        }
      }
      categorLi[j].textContent = count;
    } else {
      categorLi[j].textContent = "";
    }
  }
  for (let i = 0; i < sizes.length; i++) {
    console.log(sizes[i]);
    console.log(sizes[i].classList.contains("choice-item"));
    if (sizes[i].classList.contains("choice-item")) {
      let count = 0;
      for (let j = 0; j < ourArray.length; j++) {
        if (ourArray[j].size == sizes[i].dataset.size) {
          count++;
        }
      }
      sizeLi[i].textContent = count;
    } else {
      sizeLi[i].textContent = "";
    }
  }
}
export function buildSortArray() {
  let choiceItem = document.querySelectorAll(".choice-item");
  let countArray = [];
  console.log(ourArray);
  for (let i = 0; i < choiceItem.length; i++) {
    console.log(choiceItem[i].dataset.categor);
    for (let j = 0; j < ourArray.length; j++) {
      if (ourArray[j].categories == choiceItem[i].dataset.categor) {
        countArray.push(ourArray[j]);
      }
      if (ourArray[j].size == choiceItem[i].dataset.size) {
      }
    }
  }
  console.log(countArray);
}
// работает только при одиночном выборе категории
// надо добавлять класс выбора и дополнительной проверки
//  пагинация теперь не работает :(

// работа с панелью -----------------------------------------
const fastChoiceAll = document.querySelector(".fast-choice_all");
const fastChoiceSale = document.querySelector(".fast-choice_sale");

fastChoiceAll.addEventListener("click", function () {
  ourArray.length = 0;
  Array.prototype.push.apply(ourArray, planets);
  console.log(ourArray);
  buildArea();
  availability();
  //  нужно добавить обновление боковых категорий ******************
});

fastChoiceSale.addEventListener("click", function () {
  let arraySale = [];
  planets.forEach((element) => {
    if (element.sale > 0) {
      arraySale.push(element);
    }
  });
  ourArray.length = 0;
  Array.prototype.push.apply(ourArray, arraySale);
  console.log(ourArray);
  buildArea();
  availability();
});
