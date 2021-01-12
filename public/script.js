'use strict';

// STATE
let player0scoreEl = document.getElementById('score--0');
let player1scoreEl = document.getElementById('score--1');
let diceEl = document.querySelector('.dice');

// FUNCTIONS

function startGame () {
  player0scoreEl.textContent = 0;
  player1scoreEl.textContent = 0;
  diceEl.classList.add('hidden');
}

startGame();

// EVENT LISTENERS
