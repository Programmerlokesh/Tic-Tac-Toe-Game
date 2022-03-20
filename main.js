const backgroundMusic = new Audio("./music.mp3");
const turnMusic = new Audio("./ting.mp3");
const gameoverMusic = new Audio("./gameover.mp3");
let turn = "X";
let gameover = false;

// Function to Change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Function to check for a win
const checkWin = () => {
  let boxTexts = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[2]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxTexts[e[0]].innerText + " Won";
      gameover = true;
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "200px";
      // document.querySelector(".line").style.width = "20vw";
      // document.querySelector(
      //   ".line"
      // ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
    }
  });
};

// Game Logic
// backgroundMusic.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      turnMusic.play();
      checkWin();
      if (!gameover) {
        document.getElementsByClassName(
          "info"
        )[0].innerHTML = `Turn for ${turn}`;
      }
    }
  });
});

// Add onClick Listener to reset Button
reset.addEventListener("click", () => {
  let boxText = document.querySelectorAll(".boxText");
  Array.from(boxText).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  gameover = false;
  // document.querySelector(".line").style.width = "0";
  document.getElementsByClassName("info")[0].innerHTML = `Turn for ${turn}`;
  document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width =
    "0px";
});
