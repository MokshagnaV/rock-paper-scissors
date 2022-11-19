const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    ans = Math.random()*10%3;
    return choices[parseInt(ans)]
}

const playRound = (playerChoice, computerChoice) => {
    if(playerChoice === computerChoice){
        return [1, 1];
    }else if(playerChoice === "rock"){
        if(computerChoice === "paper"){
            return [0, 1];
        }else{
            return [1, 0];
        }
    }else if(playerChoice === "paper"){
        if(computerChoice === "scissors"){
            return [0, 1];
        }else{
            return [1, 0];
        }
    }else{
        if(computerChoice == "rock"){
            return [0, 1];
        }else{
            return [1, 0];
        }
    }
}

const eachRound = (button) => {
    playerChoice = button.textContent.toLowerCase;
    computerChoice = getComputerChoice();
    let [you, pc] = playRound(playerChoice, computerChoice);
    console.log(you, pc)
    pScore += you;
    cScore += pc
    playerResultDiv.textContent = `Your Score ${pScore}`;
    pcResultDiv.textContent = `Computer Score ${cScore}`;
}

let pScore = 0, cScore = 0;
let playerChoice, computerChoice;
const buttons = document.querySelectorAll(".choice");

const curr = document.createElement("div");
curr.classList.add("currentResult");
const results = document.querySelector(".results");
results.appendChild(curr);
buttons.forEach((button) => {
    button.addEventListener('click', e => {
        eachRound(button)
        curr.textContent = currResult(pScore, cScore);

    })
})

const currResult = (pScore, cScore) => {
    if(pScore === cScore){
        return "It's a tie!";
    }else if(pScore > cScore){
        return "You are in the lead!";
    }else{
        return "Computer in the lead!";
    }
}

const playerResultDiv = document.querySelector("#playerresult");
const pcResultDiv = document.querySelector("#pcresult");

const reset = document.querySelector("#reset");
reset.addEventListener('click', (e) => {
    [pScore, cScore] = [0, 0];
    playerResultDiv.textContent = `Your Score ${pScore}`;
    pcResultDiv.textContent = `Computer Score ${cScore}`;
})






































// function playRound(playerChoice, computerChoice){
//     if(playerChoice === computerChoice){
//         return ["It's a tie", 1, 1];
//     }else if(playerChoice === "rock"){
//         if(computerChoice === "paper"){
//             return ["You Lose! Paper beats Rock", 0, 1];
//         }else{
//             return ["You Win! Rock beats Scissors", 1, 0];
//         }
//     }else if(playerChoice === "paper"){
//         if(computerChoice === "scissors"){
//             return ["You Lose! Scissors beats Paper", 0, 1];
//         }else{
//             return ["You Win! Paper beats Rock", 1, 0];
//         }
//     }else{
//         if(computerChoice == "rock"){
//             return ["You Lose! Rock beats Scissors", 0, 1];
//         }else{
//             return ["You Win! Scissors beats Paper", 1, 0];
//         }
//     }
// }



// function game(){
//     let you = 0, pc = 0;
//     let res, per, com
//     for(let i = 0; i < 5; i++){
//         let playerChoice = prompt("Enter your Choice: ").toLowerCase();
//         let computerChoice = getComputerChoice()
//         const roundres = playRound(playerChoice, computerChoice);
//         res = roundres[0]; per = roundres[1]; com = roundres[2]
//         console.log(`In ${i+1}th round, ${res}`);
//         you += per;
//         pc += com;
//     }
//     console.log()
//     if(pc == you){
//         return "It's a tie";
//     }
//     else if(pc > you){
//         return "Computer won the game";
//     }else{
//         return "You won the game";
//     }
// }

