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



// const image = document.getElementById("cookie");
// const clickerCounter = document.getElementById("clicker__counter");

// function changeSizeBig (){
//   image.width = image.width + 10;
// }

// function changeSizeSmall (){
//   image.width = image.width - 10;
// }

// function changeText (){
//   clickerCounter.textContent = clickerCounter.textContent + 1;
// }

// image.onclick = function () {
//   changeSizeBig();
//   clickerCounter.textContent = clickerCounter.textContent + 1;
//   changeSizeSmall();
//   image.onclick = null;
// }

// image.onclick = function () {
//   changeSizeSmall();
//   clickerCounter.textContent += 1;
//   image.onclick = null;
// }

// image.ondblclick = function () {
//   resetSize();
//   changeText();
// }