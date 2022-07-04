//  If there is a dot at the beginning of the reference 
//word as a parameter, it means the class is being searched.
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    //console.log(links.classList);-> classList - shows/gets all classes
    //console.log(links.classList.contains("random"));-> contains-checks classList for specific class
    // console.log(links.classList.contains("links"));
    // if (links.classList.contains("show-links")) {
    //   links.classList.remove("show-links");->remove - remove class
    // } else {
    //   links.classList.add("show-links");->add - add class
    // }

    links.classList.toggle("show-links");
})