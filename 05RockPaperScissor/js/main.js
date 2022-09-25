const choice = document.querySelectorAll(".choice");
const user = document.getElementById("result-user-stat");
const computer = document.getElementById("result-comp-stat");
const result = document.getElementById("result-final-stat");
const userScore = document.querySelector("#userScoreVal");
const compScore = document.querySelector("#compScoreVal");
const resetGameBtn = document.getElementById("resetGameBtn");

let compCount = 0;
let userCount = 0;

choice.forEach((element, index) => {
    element.addEventListener("click", () => {
        const userChoice = index + 1;
        const computerChoice = Math.ceil(Math.random() * 3);
        checkWinner(userChoice, computerChoice);
        battleWinner();
    })
});


const winner = {
    computerWin: function () {
            result.innerText = `Winner: Computer Win`;
            let voiceSpeak = new SpeechSynthesisUtterance("Computer Win");
            speechSynthesis.speak(voiceSpeak);
            resetGameBtn.hidden = true;
            compCount++;
    },
    userWin: function () {
            result.innerText = `Winner: User Win`;
            let voiceSpeak = new SpeechSynthesisUtterance("User Win");
            speechSynthesis.speak(voiceSpeak);
            resetGameBtn.hidden = true;
            userCount++;
    },
    gameDraw: function () {
        result.innerText = `Winner: Game Draw`;
        let voiceSpeak = new SpeechSynthesisUtterance("Game Draw");
        speechSynthesis.speak(voiceSpeak);
    },
}

function checkWinner(userChoice, computerChoice) {
    switch (true) {
        case userChoice == 1 && computerChoice == 2:
            winner.computerWin();
            break;
        case userChoice == 1 && computerChoice == 3:
            winner.userWin();
            break;
        case userChoice == 2 && computerChoice == 1:
            winner.userWin();
            break;
        case userChoice == 2 && computerChoice == 3:
            winner.computerWin();
            break;
        case userChoice == 3 && computerChoice == 1:
            winner.computerWin();
            break;
        case userChoice == 3 && computerChoice == 2:
            winner.userWin();
            break;
        default:
            winner.gameDraw();
            break;
    }
    userScore.innerHTML = userCount;
    compScore.innerHTML = compCount;
    user.innerHTML = `User: ${userChoice}`;
    computer.innerHTML = `Computer: ${computerChoice}`;
}
