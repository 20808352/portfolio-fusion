function play(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    let result = "";
  
    if (playerChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      result = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
      result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
  
    alert(result);
    console.log(
      `Player: ${playerChoice}, Computer: ${computerChoice}, Result: ${result}`
    );
  }
  
  document
    .getElementById("rockButton")
    .addEventListener("click", function (event) {
      console.log(event.target.id);
      play("rock");
    });
  
  document
    .getElementById("paperButton")
    .addEventListener("click", function (event) {
      console.log(event.target.id);
      play("paper");
    });
  
  document
    .getElementById("scissorsButton")
    .addEventListener("click", function (event) {
      console.log(event.target.id);
      play("scissors");
    });
  