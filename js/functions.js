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

  // console.log(topLeft, topCenter, topRight, middleLeft, middleCenter, middleRight, bottomLeft, bottomCenter, bottomRight);

  // Winning Combinations

  if (topLeft !== "" && topLeft === topCenter && topLeft === topRight) {
    gameIsLive = false;
    winner = topLeft;
    console.log("vincitore: ", winner);
    playerStatus[0].textContent = "Giocatore " +  winner + " ha vinto!";
  } else if (middleLeft !== "" && middleLeft === middleCenter && middleLeft === middleRight) {
    gameIsLive = false;
    winner = middleLeft;
    console.log("vincitore: ", winner);
    playerStatus[0].textContent = "Giocatore " +  winner + " ha vinto!";
  } else if (bottomLeft !== "" && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    gameIsLive = false;
    winner = bottomLeft;
    console.log("vincitore: ", winner);
    playerStatus[0].textContent = "Giocatore " +  winner + " ha vinto!";
  } else if (topLeft !== "" && topLeft === middleLeft && topLeft === bottomLeft) {
    gameIsLive = false;
    winner = topLeft;
    console.log("vincitore: ", winner);
    playerStatus[0].textContent = "Giocatore " +  winner + " ha vinto!";
  } else if (topCenter !== "" && topCenter === middleCenter && topCenter === bottomCenter) {
    gameIsLive = false;
    winner = topCenter;
    console.log("vincitore: ", winner);
    playerStatus[0].textContent = "Giocatore " +  winner + " ha vinto!";
  } else if (topRight !== "" && topRight === middleRight && topRight === bottomRight) {
    gameIsLive = false;
    winner = topRight;
    console.log("vincitore: ", winner);
    playerStatus[0].textContent = "Giocatore " +  winner + " ha vinto!";
  } else if (topLeft !== "" && topLeft === middleCenter && topLeft === bottomRight) {
    gameIsLive = false;
    winner = topLeft;
    console.log("vincitore: ", winner);
    playerStatus[0].textContent = "Giocatore " +  winner + " ha vinto!";
  } else if (topRight !== "" && topRight === middleCenter && topRight === bottomLeft) {
    gameIsLive = false;
    winner = topRight;
    console.log("vincitore: ", winner);
    playerStatus[0].textContent = "Giocatore " +  winner + " ha vinto!";
  } else if (topLeft && topCenter && topRight && middleLeft && middleCenter && middleRight && bottomLeft && bottomCenter && bottomRight) {
    gameIsLive = false;
    playerStatus[0].textContent = "Pareggio!";
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      playerStatus[0].textContent = "Tocca al Giocatore " + X_SYMBOL;
    } else {
      playerStatus[0].textContent = "Tocca al Giocatore " + O_SYMBOL;
    }
  }
}

function handleReset(){
  xIsNext = true;
  playerStatus[0].textContent = "Tocca al Giocatore " + X_SYMBOL;

  cellsEl.forEach(function(cell, index) {
    cell.innerHTML = "";
    cell.classList.add("overlay");
    winner = null;
  })
}
