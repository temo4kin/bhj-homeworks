// const hole = hole.classList.contains('hole_has-mole');

// получаю ID нужных элементов, отчечающих за счетчики
const deadMole = document.getElementById("dead");
const lostMole = document.getElementById("lost");

// циклом прохожу по всем лункам - не уверен, что делаю это правильно, но нумерация в HTML с 1 до 9
for (let i = 1; i < 10; i++) {
  // получаю очередную лунку, чтобы проверить ее классы
  const hole = document.getElementById("hole" + i);
  // обработчик нажатия кнопки мыши на лунке
  hole.onclick = function () {
    // проверяю нужный класс у лунки
    if (hole.classList.contains("hole_has-mole")) {
      // увеличиваю счетчик с убитыми кротами на 1, если есть нужный класс
      deadMole.textContent = +deadMole.textContent + 1;
    } else {
      // увеличиваю счетчик с промахами, если нужный класс отсутствует в лунке
      lostMole.textContent = +lostMole.textContent + 1;
    }
    // проверяю количество попаданий и вывожу сообщение
    if (+deadMole.textContent === 10) {
      alert("You Win!");
    }
    // проверяю количество промахов и вывожу сообщение
    if (+lostMole.textContent === 5) {
      alert("You Lose!");
    }
    if (+deadMole.textContent > 9 || +lostMole.textContent > 4) {
      deadMole.textContent = 0;
      lostMole.textContent = 0;
    }
  };
}