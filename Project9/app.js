const btn = document.querySelector(".switchBtn");
const video = document.querySelector(".videoContainer");
const preLoader = document.querySelector(".preLoader")

btn.addEventListener("click", function () {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause();
    }else {
        btn.classList.remove("slide");
        video.play();
    }
})

//preLoader
window.addEventListener("load", function() {
    preLoader.classList.add(".hidePreLoader");
})