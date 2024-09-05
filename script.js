function getComputerChoice (choiceAI) {
    
    let i = Math.floor(Math.random() * 3)
    switch (i) {

        case 0:
            choiceAI = "rock";
            break;
        case 1:
            choiceAI = "paper"
            break;
        case 2:
            choiceAI = "scissors"
            break;
    }
    return choiceAI;
}

function getHumanChoice (choicehuman) {

    choicehuman = prompt("Choose Rock, Paper or Scissors")
    choicehuman = choicehuman.toLowerCase()

    console.log(choicehuman);

    return choicehuman;

}

let a;

getHumanChoice(a);


