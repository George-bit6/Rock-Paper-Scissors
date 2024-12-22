
let clickedRock = document.querySelector("#rock");
let clickedPaper = document.querySelector("#paper");
let clickScissor = document.querySelector("#scissors");
let result = document.querySelector("#resultText");

let gamesWon = gamesLost = HumanScore = ComputerScore = 0;

let C;

clickedRock.addEventListener("click", () => {

    PlayRound("rock", C);

}); 

clickedPaper.onclick = () =>{
    return PlayRound("paper", C);
};

clickScissor.onclick = () => {
    return PlayRound("scissors", C);
}; 

function getComputerChoice () {
    
    let choiceBot;
    let i = Math.floor(Math.random() * 3)
    switch (i) {

        case 0:
            choiceBot = "rock";
            break;
        case 1:
            choiceBot = "paper";
            break;
        case 2:
            choiceBot = "scissors";
            break;
    }
    return choiceBot;
}

function PlayRound (humanChoice, computerChoice) {
    computerChoice = getComputerChoice();

    if(HumanScore <= 5 && ComputerScore <= 5){
        if (humanChoice === computerChoice){

        result.text =`You: ${HumanScore}  Computer: ${ComputerScore} \r\nIt is a tie`;


    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {

        ComputerScore++;
        result.textContent =`You: ${HumanScore}  Computer: ${ComputerScore} \r\nYou Lose`;


    } else if ((computerChoice === "rock" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "scissors") || (computerChoice === "scissors" && humanChoice === "rock")){

        HumanScore++;
        result.textContent =`You: ${HumanScore}  Computer: ${ComputerScore} \r\nYou Win`;


    }   else { result.textContent =`You: ${HumanScore}  Computer: ${ComputerScore} \r\nInvalid Input`;}
    }
    if(HumanScore == 5){
        gamesWon++;
        result.textContent = result .textContent + "\r\nCongratulations!!!\r\nGames Won: " + gamesWon + "  Games Lost: " + gamesLost;
        HumanScore = 0;
        ComputerScore = 0;
    }
    else if(ComputerScore == 5){
        gamesLost++;
        result.textContent = result.textContent + "\r\nSkill Issue\r\nGames Won: " + gamesWon + "  Games Lost: " + gamesLost;
        HumanScore = 0;
        ComputerScore = 0;
    }
    

}




