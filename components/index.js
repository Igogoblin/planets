let arr = [];

/**
 * Description create random number
 * @param {number} max
 * @returns {number}
 */
function random(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Description create random unique array
 * @param {number} a - length array
 * @returns {array}
 */
function randomArr(a) {
  for (let i = 0; i < a; i++) {
    let count = random(9);
    !arr.includes(count) ? arr.push(count) : i--;
  }
  return arr;
}
