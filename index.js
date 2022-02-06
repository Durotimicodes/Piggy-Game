"use strict";

//SELECTING ELEMENTS
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");

//STARTING CONDITIONS

let scores, currentScore, activePlayer, playing;

const initialization = function () {
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;
  diceEL.classList.add("hidden");
  player0EL.classList.remove("player--winner");
  player1EL.classList.remove("player--winner");
  player0EL.classList.add("player--active");
  player1EL.classList.remove("player--active");
};

initialization();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle("player--active");
  player1EL.classList.toggle("player--active");
};

//FUNCTIONALITY

btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. display dice
    diceEL.classList.remove("hidden");
    diceEL.src = `dice-${dice}.png`;

    //3. Check for rolled 1: if true,

    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }

    //switch to next player
    else {
      switchPlayer();
    }
  }
});

//HOLDING THE SCORE
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEL.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

// RESETING THE GAME

btnNew.addEventListener("click", initialization);
