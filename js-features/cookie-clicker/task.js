const clickerCounter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
let isBig = true;


image.onclick = function() {
  clickerCounter.textContent = +clickerCounter.textContent + 1;
  if (isBig) {
    image.width += 10;
    isBig = false;
  } else {
    image.width -= 10;
    isBig = true;
  }
}