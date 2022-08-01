const modalBtn = document.querySelector(".modalBtn");
const btn = document.querySelector(".modalOverlay");
const clsBtn = document.querySelector(".clsBtn")


modalBtn.addEventListener("click", function() {
    btn.classList.add("openModal")
})
clsBtn.addEventListener("click", function () {
    btn.classList.remove("openModal")
})