'use strict';

const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// STATE

let currentScore0 = 0;
// let currentScore1 = 0;

// FUNCTIONS

function rollDice () {
  // Generate a random dice roll
  const rollResult = Math.trunc(Math.random() * 6) + 1;

  // Display corresponding dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${rollResult}.png`;

  // Check for rolled 1: If true, switch to next player
  if (rollResult !== 1) {
    // add dice roll to current score
    currentScore0 += rollResult;
    setTextContent('#current--0', currentScore0);
    // display new score
  } else {

    // reset current score

    // switch player
  }
}

function setTextContent(targetElement, newContent) {
  document.querySelector(`${targetElement}`).textContent = newContent;
}

function startGame () {
  setTextContent('#score--0', 0);
  setTextContent('#score--1', 0);
  diceEl.classList.add('hidden');
}

startGame();

// EVENT LISTENERS

btnRoll.addEventListener('click', rollDice);
