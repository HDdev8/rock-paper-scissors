const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const rockBtn = document.querySelector(".rock-button");
const paperBtn = document.querySelector(".paper-button");
const scissorsBtn = document.querySelector(".scissors-button");
const rockImg = document.querySelector(".rock-image");
const paperImg = document.querySelector(".paper-image");
const scissorsImg = document.querySelector(".scissors-image");
const buttons = document.querySelector("button");
//
let playerSelection;
let playerScore = 0;
let computerScore = 0;
//
rockBtn.addEventListener("click", (e) => {
  const audio = document.querySelector(".destroy");
  audio.currentTime = 0;
  audio.play();
  playerSelection = rock;
  playRound();
});
paperBtn.addEventListener("click", (e) => {
  const audio = document.querySelector(".crumpling");
  audio.currentTime = 0;
  audio.play();
  playerSelection = paper;
  playRound();
});
scissorsBtn.addEventListener("click", (e) => {
  const audio = document.querySelector(".snip");
  audio.currentTime = 0;
  audio.play();
  playerSelection = scissors;
  playRound();
});

function playRound() {
  function getComputerChoice() {
    let randomNumber = Math.random() * 100;
    if (randomNumber <= 33.3) {
      return rock;
    } else if (randomNumber <= 66.6) {
      return paper;
    } else return scissors;
  }
  const computerSelection = getComputerChoice();
  const tie = "You tie this round!";
  const win = "You win this round!";
  const lose = "You lose this round!";

  function listResult() {
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
    }
  }
  const scoreboard = document.querySelector(".scoreboard");
  const mySide = document.querySelector(".my-side");
  const center = document.querySelector(".center");
  const compSide = document.querySelector(".comp-side");
  const myText = document.querySelector(".my-text");
  const div = document.createElement("div");
  //it would be cool to put win, tie, or lose variables between the two texts (on the scoreboard) between each round
  const compText = document.querySelector(".comp-text");
  const myScore = document.querySelector(".my-score");
  const compScore = document.querySelector(".comp-score");
  const roundResult = listResult();

  if (roundResult === win) {
    playerScore++;
    myScore.textContent = playerScore;
    mySide.appendChild(myScore);
  } else if (roundResult === lose) {
    computerScore++;
    compScore.textContent = computerScore;
    compSide.appendChild(compScore);
  }
  myText.textContent = `You chose ${playerSelection}!`;
  center.appendChild(myText);
  compText.textContent = `The computer chose ${computerSelection}!`;
  center.appendChild(compText);
  function finalScore() {
    if (playerScore === 5) {
      center.removeChild(myText);
      center.removeChild(compText);
      div.textContent = "You win!";
      center.appendChild(div);
    } else if (computerScore === 5) {
      center.removeChild(myText);
      center.removeChild(compText);
      div.textContent = "You lose!";
      center.appendChild(div);
    }
  }
  finalScore();
}
//after acknowleding the final score, I want the game to reset to the beginning without having to manually refresh the page. Maybe a button pops up after someone scores 5. and you cant do anything on the page until the button is pressed.
