// this variable used inside the element
const questions = document.querySelectorAll(".question");


questions.forEach(function (question) {
    const btn = question.querySelector(".questionBtn");

    btn.addEventListener("click", function () {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("showText");
            }
        });
        question.classList.toggle("showText");
    })
});