let mode = "computer";

let player1Score = 0;
let player2Score = 0;

let player1Choice = "";
let player2Choice = "";

const choices = ["rock", "paper", "scissors"];

const turn = document.getElementById("turn");
const result = document.getElementById("result");
const modeText = document.getElementById("mode-text");

const player1ScoreText = document.getElementById("player1-score");
const player2ScoreText = document.getElementById("player2-score");

const player2Name = document.getElementById("player2-name");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const computerBtn = document.getElementById("computer-mode");
const playerBtn = document.getElementById("player-mode");

const reset = document.getElementById("reset");
function checkWinner(player, opponent) {

    if (player === opponent) {
        return "tie";
    }

    if (
        (player === "rock" && opponent === "scissors") ||
        (player === "paper" && opponent === "rock") ||
        (player === "scissors" && opponent === "paper")
    ) {
        return "player";
    }

    return "opponent";
}
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
function playGame(playerChoice) {

    let computerChoice = getComputerChoice();

    let winner = checkWinner(playerChoice, computerChoice);

    if (winner === "player") {

        player1Score++;

        result.textContent =
            "🎉 You Win! " +
            playerChoice +
            " beats " +
            computerChoice;

    } 
    
    else if (winner === "opponent") {

        player2Score++;

        result.textContent =
            "🤖 Computer Wins! " +
            computerChoice +
            " beats " +
            playerChoice;

    } 
    
    else {

        result.textContent =
            "🤝 It's a Tie! Both chose " +
            playerChoice;

    }

    player1ScoreText.textContent = player1Score;
    player2ScoreText.textContent = player2Score;
}
rock.addEventListener("click", function () {
    playGame("rock");
});

paper.addEventListener("click", function () {
    playGame("paper");
});

scissors.addEventListener("click", function () {
    playGame("scissors");
});
reset.addEventListener("click", function () {

    player1Score = 0;
    player2Score = 0;

    player1ScoreText.textContent = 0;
    player2ScoreText.textContent = 0;

    result.textContent = "Choose your move!";
});
computerBtn.addEventListener("click", function () {
    mode = "computer";
    modeText.textContent = "Current Mode: Player vs Computer";
    player2Name.textContent = "Computer";
    turn.textContent = "Your Turn";
    result.textContent = "Choose your move!";
});

playerBtn.addEventListener("click", function () {
    mode = "player";
    modeText.textContent = "Current Mode: Player vs Player";
    player2Name.textContent = "Player 2";
    turn.textContent = "Player 1's Turn";
    result.textContent = "Player vs Player Mode";
});