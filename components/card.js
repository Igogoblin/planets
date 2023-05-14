console.log("this is card js");

export function getCard() {
  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < 9; i++) {
    cards[i].addEventListener("click", function (event) {
      console.log(this.dataset);
      console.log(typeof this.dataset.item); //string
    });
  }
}
