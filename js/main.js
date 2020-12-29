const X_SYMBOL = "✕";
const O_SYMBOL = "◯";

// HTML Elements
const cellsEl = Array.from(document.getElementsByClassName("cell"));
const resetBtn = document.getElementById("reset-btn");
const playerStatus = document.getElementsByClassName("player-status");
playerStatus[0].textContent = "Giocatore ✕";

// Game Variables
let xIsNext = true;
let gameIsLive = true;
let winner = null;

// Event Handlers
cellsEl.forEach(function(cell, index){
  cell.addEventListener("click", handleCellClick);
})

resetBtn.addEventListener("click", handleReset);
