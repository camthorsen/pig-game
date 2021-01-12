'use strict';

const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// STATE
let player0scoreEl = document.getElementById('score--0');
let player1scoreEl = document.getElementById('score--1');

// FUNCTIONS

function rollDice () {
  // Generate a random dice roll
  const rollResult = Math.trunc(Math.random() * 6) + 1;

  // Display corresponding dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${rollResult}.png`;

  // Check for rolled 1: If true, switch to next player
}

function startGame () {
  player0scoreEl.textContent = 0;
  player1scoreEl.textContent = 0;
  diceEl.classList.add('hidden');
}

startGame();

// EVENT LISTENERS

btnRoll.addEventListener('click', rollDice);
