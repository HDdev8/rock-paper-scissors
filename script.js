function game() {
  const rock = "Rock";
  const paper = "Paper";
  const scissors = "Scissors";
  const noChoice = "Nothing!";

  let choice = prompt("Rock, Paper, or Scissors?", "");

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

  function getComputerChoice() {
    let randomNumber = Math.random() * 100;
    if (randomNumber <= 33.3) {
      return rock;
    } else if (randomNumber <= 66.6) {
      return paper;
    } else return scissors;
  }
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const tie = `${playerSelection} matches ${computerSelection}! You tie!`;
  const win = `${playerSelection} beats ${computerSelection}! You win!`;
  const lose = `${playerSelection} is defeated by ${computerSelection}! You lose!`;
  const noChoiceLose = `You chose ${playerSelection}! You lose!`;

  function playRound() {
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
    } else return noChoiceLose;
  }

  if (playRound(playerSelection, computerSelection) === win) {
    playerScore++;
  } else if (playRound(playerSelection, computerSelection) === lose) {
    computerScore++;
  } else if (playRound(playerSelection, computerSelection) === noChoiceLose) {
    computerScore++;
  } else;

  console.log(`You chose ${playerSelection}!`); //shows my selection
  console.log(`The computer chose ${computerSelection}!`); //shows the computer's selection
  console.log(playRound(playerSelection, computerSelection)); //shows the result of round
  console.log(`Your score is ${playerScore}!`);
  console.log(`The computer's score is ${computerScore}!`);
}
let playerScore = 0;
let computerScore = 0;
for (let i = 0; i < 5; i++) {
  game(); //repeats the game five times
  console.log(`Round ${i + 1}`); //shows the number of each round, starting from 0
}
if (playerScore > computerScore) {
  alert(`You win by a score of ${playerScore} to ${computerScore}!`);
}
if (playerScore < computerScore) {
  alert(`You lose by a score of ${computerScore} to ${playerScore}!`);
}
if (playerScore === computerScore) {
  alert(`You tie by a score of ${computerScore} to ${playerScore}!`);
}
