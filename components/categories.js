import { ourArray, categoriesLi, sizes } from "./index.js";
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
    console.log(categoriesLi[j]);
    console.log(categoriesLi[j].classList.contains("choice-item"));
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
  for (let i = 0; i < sizeLi.length; i++) {
    if (sizeLi[i].classList.contains("choice-item")) {
      let count = 0;
      for (let j = 0; j < ourArray.length; j++) {
        if (ourArray[j].size == sizeLi[i].dataset.size) {
          count++;
        }
      }
      sizeLi[i].textContent = count;
    } else {
      sizeLi[i].textContent = "";
    }
  }
  // for (let i = 0; i < choiceItem.length; i++) {}

  // for (let i = 0; i < categorLi.length; i++) {
  //   let countCategories = 0;
  //   for (let j = 0; j < ourArray.length; j++) {
  //     if (categoriesLi[i].dataset.categor == ourArray[j].categories) {
  //       countCategories++;
  //     }
  //   }
  //   if (countCategories === 0) {
  //     categorLi[i].textContent = "";
  //   } else {
  //     categorLi[i].textContent = countCategories;
  //   }
  // }
  // console.log(sizes[1].dataset.size);
  // for (let i = 0; i < sizes.length; i++) {
  //   let countSize = 0;
  //   for (let j = 0; j < ourArray.length; j++) {
  //     if (sizes[i].dataset.size == ourArray[j].size) {
  //       countSize++;
  //     }
  //   }
  //   if (countSize === 0) {
  //     sizeLi[i].textContent = "";
  //   } else {
  //     sizeLi[i].textContent = countSize;
  //   }
  // }
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
