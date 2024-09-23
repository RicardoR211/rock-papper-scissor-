function getComputerChoice(){
    var _escolha = ["Rock", "Papper", "Scissor"]
    var _random = Math.floor(Math.random() * _escolha.length)

    return _escolha[_random]
}

function getHumanChoice(){
    _HumanChoice = prompt("Escolha um valor. Rock: 0, Papper: 1, Scissor: 2");
    if(_HumanChoice > 2 || _HumanChoice < 0)  {
        console.log("Invalid Number, change another")
        _HumanChoice = prompt("Escolha um valor. Rock: 0, Papper: 1, Scissor: 2");
        //console.clear();
    }
    var _HumEscolha = ["Rock", "Papper", "Scissor"]

    return _HumEscolha[_HumanChoice]
}

function playRound(humanChoice, computerChoice) {
    // your code here!
    //console.log("Your Choice: " + humanChoice)
    //console.log("Computer Choice: " + computerChoice)

    if(humanChoice == computerChoice) console.log("Draw")
    //loss
    else if(computerChoice == "Rock" && humanChoice == "Scissor" || computerChoice == "Scissor" && humanChoice == "Papper" || computerChoice == "Papper" && humanChoice == "Rock") {
        console.log("You lost " + computerChoice + " wins from " + humanChoice)
        computerScore++;
    }
    else{
        console.log("You Win " + humanChoice + " wins from " + computerChoice)
        humanScore++;
    }

    console.log("Player Score: " + humanScore + " Computer Score: " + computerScore)
    playGame();
}
  
var humanScore = 0;
var computerScore = 0;
var round = 0;

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

function playGame(){
    if(round < 5) {
        round++;
        console.log("Round: " + round)
        playRound(getHumanChoice(), getComputerChoice());
    }
    else console.log("Thanks For Play :)")
}
    
playGame();