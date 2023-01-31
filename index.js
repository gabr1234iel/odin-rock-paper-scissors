
let playerScore = 0;
let compScore = 0;

let scorePl = document.getElementById("player-score");
let scoreCo = document.getElementById("comp-score");

let playerRPS;
let playerRock = document.getElementById("player-rock");
let playerPaper = document.getElementById("player-paper");
let playerScissors = document.getElementById("player-scissors");

let comment = document.getElementById("comment");

let compSelector;
let compRPS;

let reset = document.getElementById("restart");
let info = document.getElementById("info");

let winner = document.getElementById("winner");

let instruction = document.getElementById("instructions");


function decideWinner(player, comp){
    
    if (((player === "rock") && (comp === "rock")) || ((player === "scissors") && (comp === "scissors")) || ((player == "paper") && (comp === "paper"))){
        comment.innerHTML = "It's a draw";
    }else if(((player === "rock") && (comp === "scissors")) || ((player === "paper") && (comp === "rock")) || ((player === "scissors") && (comp === "paper"))){
        playerScore += 1;
        scorePl.innerHTML = playerScore;
        return playerScore;
    }else if(((comp === "rock") && (player === "scissors")) || ((comp === "paper") && (player === "rock")) || ((comp === "scissors") && (player === "paper"))){
        compScore += 1;
        scoreCo.innerHTML = compScore;
        return compScore;
    }
}

function commentateGame(player, comp){
    if(((player === "rock") && (comp === "paper")) || ((comp === "rock") && (player === "paper"))){
        comment.innerHTML = "Paper beats Rock";
    }else if(((player === "paper") && (comp === "scissors")) || ((comp === "paper") && (player === "scissors"))){
        comment.innerHTML = "Scissors beats Paper";
    }else if(((player === "scissors") && (comp === "rock")) || ((comp === "scissors") && (player === "rock"))){
        comment.innerHTML = "Rock beats Scissors";
    }
}

function compRoll(){
    
    compSelector= Math.floor(Math.random()*3);

    if (compSelector == 0) {
        compRPS = "rock";
        document.getElementById("comp-rock").style.border = "10px solid blue";
        document.getElementById("comp-paper").style.border = "2px solid black";
        document.getElementById("comp-scissors").style.border = "2px solid black";


    }else if(compSelector == 1){
        compRPS = "paper";
        document.getElementById("comp-rock").style.border = "2px solid black";
        document.getElementById("comp-paper").style.border = "10px solid blue";
        document.getElementById("comp-scissors").style.border = "2px solid black";
    }
    else if(compSelector == 2){
        compRPS = "scissors";
        document.getElementById("comp-rock").style.border = "2px solid black";
        document.getElementById("comp-paper").style.border = "2px solid black";
        document.getElementById("comp-scissors").style.border = "10px solid blue";
    }
    return compRPS;
}

function gameOver(){
    console.log("hello");
    if(playerScore === 5){
        winner.innerHTML = "Congratulations You WIN!";
    }else if(compScore === 5){
        winner.innerHTML = "You LOST, try again next time...";
    }
    endGame = 1;
    return endGame;

}

function checkGameOver(playerScore, compScore){
    if((playerScore === 5)||(compScore === 5)){
        gameOver();
    }
}


    playerRock.onclick = function(){
        playerRPS = "rock";
        compRPS = compRoll();
        decideWinner(playerRPS, compRPS);
        commentateGame(playerRPS, compRPS);
        checkGameOver(playerScore,compScore);
       // playerRock.style.border = "10px solid red";
       // playerPaper.style.border = "2px solid black";
       // playerScissors.style.border = "2px solid black";
    }
    
    playerPaper.onclick = function(){
        playerRPS = "paper";
        compRPS = compRoll();
        decideWinner(playerRPS, compRPS);
        commentateGame(playerRPS, compRPS);
        checkGameOver(playerScore,compScore);
       // playerRock.style.border = "2px solid black";
       // playerPaper.style.border = "10px solid red";
       // playerScissors.style.border = "2px solid black";
    }
    
    playerScissors.onclick = function(){
        playerRPS = "scissors";
        compRPS = compRoll();
        decideWinner(playerRPS, compRPS);
        commentateGame(playerRPS, compRPS);
        checkGameOver(playerScore,compScore);
       // playerRock.style.border = "2px solid black";
       // playerPaper.style.border = "2px solid black";
       // playerScissors.style.border = "10px solid red";
    }

    reset.onmouseenter = function(){
        instruction.innerHTML = "restart game?"
    }

    reset.onmouseleave = function(){
        instruction.innerHTML = ""
    }
    
    reset.onclick = function(){
        document.getElementById("comp-rock").style.border = "2px solid black";
        document.getElementById("comp-paper").style.border = "2px solid black";
        document.getElementById("comp-scissors").style.border = "2px solid black";
        //playerRock.style.border = "2px solid black";
        //playerPaper.style.border = "2px solid black";
        //playerScissors.style.border = "2px solid black";
        playerScore = 0;
        compScore = 0;
        comment.innerHTML = ""
        scoreCo.innerHTML = "0"
        scorePl.innerHTML = "0"
        winner.innerHTML = "first to 5 wins"
    }

    info.onmouseenter = function(){
        instruction.innerHTML = "The game is very easy, select rock, paper or scissors, rock beats scissors because it just crushes it, paper can wrap around rock, and scissors can, well... cut paper. First to five wins this game, enjoy :)"
    }
    info.onmouseleave = function(){
        instruction.innerHTML = ""
    }

    


   