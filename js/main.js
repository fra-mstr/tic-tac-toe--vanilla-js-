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
  cell.addEventListener("click", function (e){
    // console.log("cell", e.target);

    if (e.target.innerHTML !== ""){
      return
    }

    if (xIsNext === true && e.target.innerHTML === ""){
      e.target.innerHTML = X_SYMBOL;
      e.target.classList.remove("overlay");
      checkGameStatus();
    } else if (xIsNext === false && e.target.innerHTML === "") {
      e.target.innerHTML = O_SYMBOL;
      e.target.classList.remove("overlay");
      checkGameStatus();
    }

  // console.log(xIsNext);

  })
})

resetBtn.addEventListener("click", handleReset);
