// const hole = hole.classList.contains('hole_has-mole');
const deadMole = document.getElementById("dead");
const lostMole = document.getElementById("lost");

for (let i = 1; i < 10; i++) {
  const hole = document.getElementById("hole" + i);
  hole.onklick = function () {
    if (hole.classList.contains("hole_has-mole")) {
      deadMole.textContent = +deadMole.textContent + 1;
      if (+deadMole.textContent === 10) {
        alert("You Win!");
      }
    } else {
      lostMole.textContent = +lostMole.textContent + 1;
      if (+lostMole.textContent === 5) {
        alert("You Lose!");
      }
    }
  };
}