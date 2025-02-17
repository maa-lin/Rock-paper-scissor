const heading = document.createElement("h2");
heading.innerHTML = "Sten, sax, påse. <i>(bäst av 3)</i>";
document.getElementById("app").appendChild(heading);

const btnRock = document.createElement("button");
btnRock.innerHTML = "Sten";
document.getElementById("app").appendChild(btnRock);

const btnScissor = document.createElement("button");
btnScissor.innerHTML = "Sax";
document.getElementById("app").appendChild(btnScissor);

const btnPaper = document.createElement("button");
btnPaper.innerHTML = "Påse";
document.getElementById("app").appendChild(btnPaper);

const selection = document.createElement("section");
selection.className = "selectionSection";
document.getElementById("app").appendChild(selection);

const humanSelection = document.createElement("p");
selection.appendChild(humanSelection);

const pcSelection = document.createElement("p");
selection.appendChild(pcSelection);

const score = document.createElement("p");
document.getElementById("app").appendChild(score);

const winner = document.createElement("p");
document.getElementById("app").appendChild(winner);

const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3 + 1);
  if (choice === 1) {
    return "sten";
  }
  if (choice === 2) {
    return "sax";
  }
  if (choice === 3) {
    return "påse";
  }
};

let choice = "";
let btnCounter = 0;

btnRock.addEventListener("click", () => {
  choice = "sten";
  btnCounter++;
  playGame(choice);
});

btnScissor.addEventListener("click", () => {
  choice = "sax";
  btnCounter++;
  playGame(choice);
});

btnPaper.addEventListener("click", () => {
  choice = "påse";
  btnCounter++;
  playGame(choice);
});

let computerScore = 0;
let humanScore = 0;

const playGame = (choice) => {
  const person = choice;
  const pc = getComputerChoice();

  humanSelection.innerHTML = "<strong>Ditt val:</strong> " + person;
  pcSelection.innerHTML = "<strong>Datorns val:</strong> " + pc;

  const playRound = (pc, person) => {
    if (pc === "sten" && person === "sax") {
      computerScore++;
    }
    if (pc === "sten" && person === "påse") {
      humanScore++;
    }
    if (pc === "sax" && person === "sten") {
      humanScore++;
    }
    if (pc === "sax" && person === "påse") {
      computerScore++;
    }
    if (pc === "påse" && person === "sten") {
      computerScore++;
    }
    if (pc === "påse" && person === "sax") {
      humanScore++;
    }
  };

  playRound(pc, person);

  score.innerHTML = "Poäng: " + humanScore + "/" + computerScore;

  if (btnCounter === 3) {
    if (humanScore > computerScore) {
      winner.innerHTML = "<strong>GRATTIS, DU VANN!</strong> &#129395;";
    }
    if (humanScore < computerScore) {
      winner.innerHTML = "<strong>TYVÄRR, DU VANN INTE!</strong> &#128557;";
    }
    if (humanScore === computerScore) {
      winner.innerHTML = "<strong>OAVGJORT!</strong> &#128154;";
    }

    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissor.disabled = true;

    const playAgain = document.createElement("button");
    playAgain.innerHTML = "Spela igen";
    document.getElementById("app").appendChild(playAgain);

    playAgain.addEventListener("click", () => {
      location.reload();
    });
  }
};
