function makeYellow() {
  document.body.style.backgroundColor = "lightyellow";
}

//this is best way I think
var blueButton = document.getElementById("make-blue-color");
blueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "skyblue";
}

const greenButton = document.getElementById("make-green-color");
greenButton.onclick = function makeGreen() {
  document.body.style.backgroundColor = "green";
};

const blackButton = document.getElementById("make-black-color");
blackButton.addEventListener("click", makeBlack);
function makeBlack() {
  document.body.style.backgroundColor = "black";
}

const grayButton = document.getElementById("make-gray-color");
grayButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "gray";
});

const goldenButton = document.getElementById("make-golden-color").addEventListener("click", function () {
  document.body.style.backgroundColor = "goldenrod";
});
