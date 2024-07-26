/*-------------------------------- Constants --------------------------------*/
// 3 choices of tock paper scissors
// Dom 
const choices = ['rock', 'paper', 'scissors'];



/*-------------------------------- Variables --------------------------------*/

let playerChoice;
let computerChoice; 
let msg;



/*------------------------ Cached Element References ------------------------*/

const resultDisplayEl = document.querySelector('#result-display');



/*-------------------------------- Functions --------------------------------*/
//handle player click

const getPlayerChoice = (event) => {
    playerChoice = event.target.id;
  };
  
  const play = (event) => {
    getPlayerChoice(event);
    console.log(playerChoice); // <= verify that everything is working!
  };
  
  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
  };
  
  
  
//generation of random selections for the comp player
//compare player and comp choices to check for winner using if/else
//render win/lose/tie messages
const compare = () => {
    if (playerChoice === computerChoice) {
      msg = 'You tied!';
    } else if (playerChoice === choices[0] && computerChoice === choices[2]) { 
      // "rock" vs. "scissors"
      msg = 'Congrats! You win!';
    } else if (playerChoice === choices[1] && computerChoice === choices[0]) { 
      // "paper" vs. "rock"
      msg = 'Congrats! You win!';
    } else if (playerChoice === choices[2] && computerChoice === choices[1]) { 
      // "scissors" vs. "paper"
      msg = 'Congrats! You win!';
    } else {
      msg = 'You lose! Try again?';
    }
  };
  

/*----------------------------- Event Listeners -----------------------------*/
// handle a player clicking a button

document.querySelector('#rock').addEventListener('click', play);
document.querySelector('#paper').addEventListener('click', play);
document.querySelector('#scissors').addEventListener('click', play);