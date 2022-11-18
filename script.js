const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    ans = Math.random()*10%3;
    return choices[parseInt(ans)]
}

function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return ["It's a tie", 1, 1];
    }else if(playerChoice === "rock"){
        if(computerChoice === "paper"){
            return ["You Lose! Paper beats Rock", 0, 1];
        }else{
            return ["You Win! Rock beats Scissors", 1, 0];
        }
    }else if(playerChoice === "paper"){
        if(computerChoice === "scissors"){
            return ["You Lose! Scissors beats Paper", 0, 1];
        }else{
            return ["You Win! Paper beats Rock", 1, 0];
        }
    }else{
        if(computerChoice == "rock"){
            return ["You Lose! Rock beats Scissors", 0, 1];
        }else{
            return ["You Win! Scissors beats Paper", 1, 0];
        }
    }
}


function game(){
    let you = 0, pc = 0;
    let res, per, com
    for(let i = 0; i < 5; i++){
        let playerChoice = prompt("Enter your Choice: ").toLowerCase();
        let computerChoice = getComputerChoice()
        const roundres = playRound(playerChoice, computerChoice);
        res = roundres[0]; per = roundres[1]; com = roundres[2]
        console.log(`In ${i+1}th round, ${res}`);
        you += per;
        pc += com;
    }
    console.log()
    if(pc == you){
        return "It's a tie";
    }
    else if(pc > you){
        return "Computer won the game";
    }else{
        return "You won the game";
    }
}

console.log(game())