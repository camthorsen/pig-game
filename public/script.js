'use strict';

// STATE
let player0scoreEl = document.getElementById('score--0');
let player1scoreEl = document.getElementById('score--1');

// FUNCTIONS

function startGame () {
  player0scoreEl.textContent = 0;
  player1scoreEl.textContent = 0;
}

startGame();

// EVENT LISTENERS
