const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const noChoice = "You didn't pick one!";

function getComputerChoice() {
  let randomNumber = Math.random() * 100;
  if (randomNumber <= 33.3) {
    return rock;
  } else if (randomNumber <= 66.6) {
    return paper;
  } else return scissors;
}

let choice = prompt("Rock, Paper, or Scissors?", "");
function game() {
  function getPlayerChoice() {
    let myChoice = choice.toLowerCase();
    if (myChoice === "rock") {
      return rock;
    } else if (myChoice === "paper") {
      return paper;
    } else if (myChoice === "scissors") {
      return scissors;
    } else return noChoice;
  }
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const tie = `You tie! ${playerSelection} matches ${computerSelection}!`;
  const win = `You win! ${playerSelection} beats ${computerSelection}!`;
  const lose = `You lose! ${playerSelection} is defeated by ${computerSelection}!`;

  function playRound(playerSelection, computerSelection) {
    /* let tie = `You tie! ${playerSelection} matches ${computerSelection}!`;
    let win = `You win! ${playerSelection} beats ${computerSelection}!`;
    let lose = `You lose! ${playerSelection} is defeated by ${computerSelection}!`; */
    if (playerSelection === rock && computerSelection === rock) {
      return tie;
    } else if (playerSelection === paper && computerSelection === paper) {
      return tie;
    } else if (playerSelection === scissors && computerSelection === scissors) {
      return tie;
    } else if (playerSelection === rock && computerSelection === paper) {
      return lose;
    } else if (playerSelection === rock && computerSelection === scissors) {
      return win;
    } else if (playerSelection === paper && computerSelection === scissors) {
      return lose;
    } else if (playerSelection === paper && computerSelection === rock) {
      return win;
    } else if (playerSelection === scissors && computerSelection === rock) {
      return lose;
    } else if (playerSelection === scissors && computerSelection === paper) {
      return win;
    } else return noChoice;
  }
  if (playRound(playerSelection, computerSelection) === tie) {
    result = tie;
  } else if (playRound(playerSelection, computerSelection) === win) {
    result = win;
  } else if (playRound(playerSelection, computerSelection) === lose) {
    result = lose;
  } else result = noChoice;
  console.log(playerSelection);
  console.log(computerSelection);
}
/* if (playRound(playerSelection, computerSelection) === tie) {
  result = tie;
} else if (playRound(playerSelection, computerSelection) === win) {
  result = win;
} else if (playRound(playerSelection, computerSelection) === lose) {
  result = lose;
} else result = noChoice; */

for (let i = 0; i < 5; i++) {
  tie = 1;
  win = 1;
  lose = 1;
  if (win + tie + lose === 5) {
    break;
  }
}
console.log(game());
// console.log(playerSelection);
// console.log(computerSelection);
// console.log(game);
// console.log(playRound(playerSelection, computerSelection));
console.log(result);
alert(result);
//Why does the playRound alert not work unless console.log is here? Is it because the playRound() calls both items?
//alert(playRound(playerSelection, computerSelection));
// let gameResult = alert(playRound(playerSelection, computerSelection));
