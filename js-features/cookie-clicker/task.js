// const clickerCounter = document.getElementById("clicker-counter");
// const image = document.getElementById("cookie");



// image.onclick = function() {
//   clickerCounter.textContent += 1;
//   image.width += 10;
//   image.onclick = null;
// }



const image = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

function changeSizeBig (){
  image.width = image.width + 10;
}

function changeSizeSmall (){
  image.width = image.width - 10;
}

function changeText (){
  clickerCounter.textContent = clickerCounter.textContent + 1;
}

image.onclick = function () {
  changeSizeBig();
  clickerCounter.textContent = clickerCounter.textContent + 1;
  changeSizeSmall();
  image.onclick = null;
}

image.onclick = function () {
  changeSizeSmall();
  clickerCounter.textContent += 1;
  image.onclick = null;
}

image.ondblclick = function () {
  resetSize();
  changeText();
}