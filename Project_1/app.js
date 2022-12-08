const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const color = document.getElementsByClassName("color")[0];

btn.addEventListener("click", function () {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hex[randomNumber()];
  }
  //console.log("Renk kodu", hexColor);

  color.textContent = hexCode;
  document.body.style.backgroundColor = hexCode;
});

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}