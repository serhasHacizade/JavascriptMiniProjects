
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

let counter = 0;

btns.forEach(function (btn) {
    btn.addEventListener("click", function (x) {
        const query = btn.classList;
        //function selection
        if (query.contains("increase")) {
            counter++;
        }
        else if (query.contains("decrease")) {
            counter--;
        }
        else{
            counter = 0;
        }
        value.textContent = counter

        // button color
        if (counter > 0) {
            value.style.color = "green";
        }
        if (counter < 0) {
            value.style.color = "red";
        }
        if (counter === 0) {
            value.style.color = "#222";
        }
    })
});