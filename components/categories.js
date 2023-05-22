import { ourArray, categoriesLi, sizes } from "./index.js";
console.log("this is categories file");

let categorLi = document.querySelectorAll(`[data-categor] > span`);
let sizeLi = document.querySelectorAll(`[data-size] > span`);
export function availability() {
  console.log(categoriesLi[1].dataset.categor);

  for (let i = 0; i < categorLi.length; i++) {
    let countCategories = 0;
    for (let j = 0; j < ourArray.length; j++) {
      if (categoriesLi[i].dataset.categor == ourArray[j].categories) {
        countCategories++;
      }
    }
    if (countCategories === 0) {
      categorLi[i].textContent = "";
    } else {
      categorLi[i].textContent = countCategories;
    }
  }
  console.log(sizes[1].dataset.size);
  for (let i = 0; i < sizes.length; i++) {
    let countSize = 0;
    for (let j = 0; j < ourArray.length; j++) {
      if (sizes[i].dataset.size == ourArray[j].size) {
        countSize++;
      }
    }
    if (countSize === 0) {
      sizeLi[i].textContent = "";
    } else {
      sizeLi[i].textContent = countSize;
    }
  }
}

// работает только при одиночном выборе категории
// надо добавлять класс выбора и дополнительной проверки
//  пагинация теперь не работает :(
