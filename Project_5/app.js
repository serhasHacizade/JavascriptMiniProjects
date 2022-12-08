const toggleBtn = document.querySelector(".sideBar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sideBar");

toggleBtn.addEventListener("click", function() {
    sidebar.classList.toggle("show-sideBar");
    // if (sideBar.classList.contains("show-sideBar")) {
    //   sideBar.classList.remove("show-sideBar");
    // } else {
    //   sideBar.classList.add("show-sideBar");
    //
});

closeBtn.addEventListener("click", function() {
    sidebar.classList.remove("show-sideBar");
});
