const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const PLAYER_WIN = 'PLAYER_WIN';
const COMPUTER_WIN = 'COMPUTER_WIN';

let gameIsRunning = false;

const getplayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice we chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const rnNum = Math.random();
  console.log(rnNum);
  if (rnNum < 0.34) {
    return ROCK;
  } else if (rnNum < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

//with arrow function, no return keyword for single expression.
const getWinner = (computer, player = DEFAULT_USER_CHOICE) =>
  computer == player
    ? RESULT_DRAW
    : (computer == ROCK && player == PAPER) ||
      (computer == PAPER && player == SCISSORS) ||
      (computer == SCISSORS && player == ROCK)
    ? PLAYER_WIN
    : COMPUTER_WIN;

// if (computer == player) {
//   return RESULT_DRAW;
// } else if (
//   (computer == ROCK && player == PAPER) ||
//   (computer == PAPER && player == SCISSORS) ||
//   (computer == SCISSORS && player == ROCK)
// ) {
//   return PLAYER_WIN;
// } else {
//   return COMPUTER_WIN;
// }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getplayerChoice();
  const computerSelection = getComputerChoice();
  let winner;
  if(playerSelection) {
   winner = getWinner(computerSelection, playerSelection);
  }else {
   winner = getWinner(computerSelection); 
  }
  let message = `player choice is ${playerSelection || DEFAULT_USER_CHOICE} and computer choice is ${computerSelection} so you`;
  if (winner === RESULT_DRAW) {
    message = message + ' have draw';
  } else if (winner === PLAYER_WIN) {
    message = message + ' won the match';
  } else {
    message = message + ' lost the match';
  }
  alert(message);
  gameIsRunning = false;

  console.log('player', playerSelection);
  console.log('computer', computerSelection);
  console.log(winner);
});
