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


/*----------------------------- Event Listeners -----------------------------*/
// handle a player clicking a button

document.querySelector('#rock').addEventListener('click', play);
document.querySelector('#paper').addEventListener('click', play);
document.querySelector('#scissors').addEventListener('click', play);