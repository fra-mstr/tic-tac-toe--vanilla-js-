function handleCellClick(e){

    if (e.target.innerHTML !== ""){
      return
    }

    if (gameIsLive === false){
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

}

function checkGameStatus(){
  const topLeft = cellsEl[0].innerHTML;
  const topCenter = cellsEl[1].innerHTML;
  const topRight = cellsEl[2].innerHTML;
  const middleLeft = cellsEl[3].innerHTML;
  const middleCenter = cellsEl[4].innerHTML;
  const middleRight = cellsEl[5].innerHTML;
  const bottomLeft = cellsEl[6].innerHTML;
  const bottomCenter = cellsEl[7].innerHTML;
  const bottomRight = cellsEl[8].innerHTML;

  // Winning Combinations

  if (topLeft !== "" && topLeft === topCenter && topLeft === topRight) {
    handleWin(topLeft);
    cellsEl[0].classList.add("red-text");
    cellsEl[1].classList.add("red-text");
    cellsEl[2].classList.add("red-text");
  } else if (middleLeft !== "" && middleLeft === middleCenter && middleLeft === middleRight) {
    handleWin(middleLeft);
    cellsEl[3].classList.add("red-text");
    cellsEl[4].classList.add("red-text");
    cellsEl[5].classList.add("red-text");
  } else if (bottomLeft !== "" && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
    cellsEl[6].classList.add("red-text");
    cellsEl[7].classList.add("red-text");
    cellsEl[8].classList.add("red-text");
  } else if (topLeft !== "" && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    cellsEl[0].classList.add("red-text");
    cellsEl[3].classList.add("red-text");
    cellsEl[6].classList.add("red-text");
  } else if (topCenter !== "" && topCenter === middleCenter && topCenter === bottomCenter) {
    handleWin(topCenter);
    cellsEl[1].classList.add("red-text");
    cellsEl[4].classList.add("red-text");
    cellsEl[7].classList.add("red-text");
  } else if (topRight !== "" && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    cellsEl[2].classList.add("red-text");
    cellsEl[5].classList.add("red-text");
    cellsEl[8].classList.add("red-text");
  } else if (topLeft !== "" && topLeft === middleCenter && topLeft === bottomRight) {
    handleWin(topLeft);
    cellsEl[0].classList.add("red-text");
    cellsEl[4].classList.add("red-text");
    cellsEl[8].classList.add("red-text");
  } else if (topRight !== "" && topRight === middleCenter && topRight === bottomLeft) {
    handleWin(topRight);
    cellsEl[2].classList.add("red-text");
    cellsEl[4].classList.add("red-text");
    cellsEl[6].classList.add("red-text");
  } else if (topLeft && topCenter && topRight && middleLeft && middleCenter && middleRight && bottomLeft && bottomCenter && bottomRight) {
    gameIsLive = false;
    playerStatus[0].textContent = "Pareggio!";
  } else {
    switchTurn();
  }
}

function switchTurn(){
  xIsNext = !xIsNext;
  if (xIsNext) {
    playerStatus[0].textContent = "Tocca al Giocatore " + X_SYMBOL;
  } else {
    playerStatus[0].textContent = "Tocca al Giocatore " + O_SYMBOL;
  }
}

function handleWin(winningPlayer){
  gameIsLive = false;
  winner = winningPlayer;
  console.log("vincitore: ", winner);
  playerStatus[0].textContent = "Giocatore " +  winner + " ha vinto!";
}

function handleReset(){
  xIsNext = true;
  gameIsLive = true;
  playerStatus[0].textContent = "Tocca al Giocatore " + X_SYMBOL;

  cellsEl.forEach(function(cell, index) {
    cell.innerHTML = "";
    cell.classList.add("overlay");
    cell.classList.remove("red-text");
    winner = null;
  })
}
