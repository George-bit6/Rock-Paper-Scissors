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

let HumanScore = ComputerScore = 0;
let H = getHumanChoice ();
let C = getComputerChoice ();

console.log(C);
console.log(H);

if (H === C){

    console.log("It is a tie");
} else if ((H === "rock" && C === "paper") || (H === "paper" && C === "scissors") || (H === "scissors" && C === "rock")) {

    console.log(`You Lose! ${C} beats ${H}`)
} else if ((C === "rock" && H === "paper") || (C === "paper" && H === "scissors") || (C === "scissors" && H === "rock")) {

    console.log(`You Win! ${H} beats ${C}`)
}


