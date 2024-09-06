
let HumanScore = ComputerScore = 0;
let H, C;
PlayGame (H, C)






function getComputerChoice () {
    
    let choiceBot;
    let i = Math.floor(Math.random() * 3)
    switch (i) {

        case 0:
            choiceBot = "rock";
            break;
        case 1:
            choiceBot = "paper"
            break;
        case 2:
            choiceBot = "scissors"
            break;
    }
    console.log(choiceBot)
    return choiceBot;
}

function getHumanChoice () {

    let choicehuman;
    choicehuman = prompt("Choose Rock, Paper or Scissors")
    choicehuman = choicehuman.toLowerCase()

    console.log(choicehuman);

    return choicehuman;

}

function PlayRound (humanChoice, computerChoice) {

    if (humanChoice === computerChoice){

    console.log(`You: ${HumanScore}  Computer: ${ComputerScore}`);
    console.log("It is a tie");

} else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {

    ComputerScore++;
    console.log( `You: ${HumanScore}  Computer: ${ComputerScore}`);
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);

} else if ((computerChoice === "rock" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "scissors") || (computerChoice === "scissors" && humanChoice === "rock")) {

    HumanScore++;
    console.log(`You: ${HumanScore}  Computer: ${ComputerScore}`);
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);

} else { console.log("Invalid Choice"); }

}

function PlayGame (humanChoice, computerChoice) {

    for(let i = 0; i <5; i++){

        humanChoice = getHumanChoice ();
        computerChoice = getComputerChoice ();

        PlayRound(humanChoice, computerChoice);

    }

}



