const square = document.getElementById("square");
const words = document.getElementById("words");

function changeColour(colour) {
  square.style.backgroundColor = colour;
}

function buzzword() {
  const wordsList = [
    "Synergy",
    "Blockchain",
    "Cloud-native",
    "Metaverse",
    "AI",
    "5G",
    "Machine Learning",
    "Decentralized",
    "Digital Twin",
    "Quantum",
  ];
  const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  words.innerHTML = "Today's buzzword: " + randomWord;
}

window.onload = function () {
  words.innerHTML = "Welcome to Flatland!";
};

square.addEventListener("click", () => changeColour("green"));
square.addEventListener("mouseover", () => changeColour("gray"));
square.addEventListener("mouseout", () => changeColour("red"));
square.addEventListener("dblclick", buzzword);
