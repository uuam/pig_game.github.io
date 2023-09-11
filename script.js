"use strict";

const currentEls = [
  document.getElementById("current--0"),
  document.getElementById("current--1"),
];
const scoreEls = [
  document.querySelector("#score--0"),
  document.getElementById("score--1"),
];
const playerEls = [
  document.querySelector(".player--0"),
  document.querySelector(".player--1"),
];

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const diceImg = document.querySelector(".dice");

const scores = [0, 0];
let currentScore = 0;
let acitvePlayer = 0;

let hasRolled = false;
let activeGame = true;
// 起始條件
scoreEls[0].textContent = 0;
scoreEls[1].textContent = 0;
diceEl.classList.add("hidden");

// 擲骰子功能
btnRoll.addEventListener("click", () => {
  if (!activeGame) return;
  hasRolled = true;
  // 1. 生成隨機的骰子
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. 顯示骰子
  diceEl.classList.remove("hidden");
  rollAnimate(() => {
    showDice(dice);
    if (dice !== 1) {
      // 添加分數到 current score
      currentScore += dice;
      currentEls[acitvePlayer].textContent = currentScore;
    } else {
      // dice = 1，換下一位玩家
      currentScore = 0;
      currentEls[acitvePlayer].textContent = currentScore;
      playerEls[acitvePlayer].classList.toggle("player--active");
      acitvePlayer = acitvePlayer === 0 ? 1 : 0;
      playerEls[acitvePlayer].classList.toggle("player--active");
      hasRolled = false;
    }
  });
});
btnHold.addEventListener("click", () => {
  if (!activeGame) return;
  if (!hasRolled) {
    alert("請擲骰子！");
    return;
  }
  scores[acitvePlayer] += currentScore;
  scoreEls[acitvePlayer].textContent = scores[acitvePlayer];
  currentScore = 0;
  currentEls[acitvePlayer].textContent = currentScore;
  if (scores[acitvePlayer] >= 100) {
    playerEls[acitvePlayer].classList.add("player--winner");
    playerEls[acitvePlayer].classList.remove("player--active");
    activeGame = false;
  } else {
    playerEls[acitvePlayer].classList.toggle("player--active");
    acitvePlayer = acitvePlayer === 1 ? 0 : 1;
    playerEls[acitvePlayer].classList.toggle("player--active");
    hasRolled = false;
  }
});
function initializeGame() {
  hasRolled = false;
  scoreEls[0].textContent = 0;
  scoreEls[1].textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  diceEl.classList.add("hidden");
  playerEls[0].classList.add("player--active");
  playerEls[0].classList.remove("player--winner");
  playerEls[1].classList.remove("player--winner");
  acitvePlayer = 0;
  currentEls[0].textContent = 0;
  currentEls[1].textContent = 0;
  activeGame = true;
}
btnNew.addEventListener("click", initializeGame);

// 顯示骰子數字
const showDice = (dice) => {
  diceImg.src = `./images/dice-${dice}.png`;
};
// 動畫
const rollAnimate = (callback) => {
  diceEl.style.transform = "translateX(-50%) rotate(90deg)";
  let intervalId = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    diceEl.src = `./images/dice-${randomNumber}.png`;
    diceEl.style.transform = "translateX(-50%) rotate(0deg)";
  }, 80);
  setTimeout(() => {
    clearInterval(intervalId);
    if (callback) callback();
  }, 1000);
};
