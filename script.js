function getComputerChoice(){
    var _escolha = ["Rock", "Papper", "Scissor"]
    var _random = Math.floor(Math.random() * _escolha.length)

    return _escolha[_random]
}

function checkWin(humanChoice, computerChoice){
    if(humanChoice == computerChoice)
    {
        resultsP.textContent = "Draw"
    }
    //loss
    else if(computerChoice == "Rock" && humanChoice == "Scissor" || computerChoice == "Scissor" && humanChoice == "Papper" || computerChoice == "Papper" && humanChoice == "Rock") {
        resultsP.textContent = "You lost, " + computerChoice + " wins from " + humanChoice
        return computerScore++;
    }
    else{
        resultsP.textContent = "You Win, " + humanChoice + " wins from " + computerChoice
        return humanScore++;
    }
}

function playRound(humanChoice, computerChoice) {
    // your code here!
    //console.log("Your Choice: " + humanChoice)
    //console.log("Computer Choice: " + computerChoice)

    checkWin(humanChoice, computerChoice);

    resultTextPoints.textContent = "Player Score: " + humanScore + " Computer Score: " + computerScore;

    if(humanScore == 5){
        alert("YOU WIN :)");
        location.reload();
    }
    else if(computerScore == 5){
        alert("You Lost ;(")
        location.reload();
    }

    //playGame();
}

var humanScore = 0;
var computerScore = 0;
var round = 0;

const rock = document.getElementById("Rock");
rock.addEventListener('click', () =>{
    playGame("Rock");
})
const papper = document.getElementById("Papper");
papper.addEventListener('click', () =>{
    playGame("Papper");
})
const scissor = document.getElementById("Scissor");
scissor.addEventListener('click', () =>{
    playGame("Scissor");
})

const resultsP = document.getElementById("resultsText")
const resultTextPoints = document.getElementById("pointsGame")


function playGame(humanChoice){
    
    playRound(humanChoice, getComputerChoice());
    
}


//playGame();