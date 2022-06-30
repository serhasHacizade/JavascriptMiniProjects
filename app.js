const characters = [
    {
        id: 1,
        name: "Frisk",
        position: "main character",
        img: "https://static.wikia.nocookie.net/undertale/images/f/f8/Frisk_overworld.png",
        text: "I fell down ebot mountain and i want to go back home again."
    },
    {
        id: 2,
        name: "Flowey",
        position: "villian character",
        img: "https://static.wikia.nocookie.net/undertale/images/0/0d/Flowey_battle_winking.png",
        text: "I can go anywhere in the underworld and kill innocent people fell down ebot mountain and i want to go back home again."
    },
    {
        id: 3,
        name: "Toriel",
        position: "other character",
        img: "https://static.wikia.nocookie.net/undertale/images/f/f3/Toriel_battle.png",
        text: "I look around on Ruins to see if anyone has follen."
    },
    {
        id: 4,
        name: "Sans",
        position: "other character",
        img: "https://static.wikia.nocookie.net/undertale/images/a/a6/Sans_overworld.png",
        text: "I love to make a bad jokes and i work multiple works."
    },
    {
        id: 5,
        name: "Papyrus",
        position: "other character",
        img: "https://static.wikia.nocookie.net/undertale/images/e/ed/Papyrus_battle.png",
        text: "I will gather human souls to become the Royal Guardians and ı love to make pasta."
    },
    {
        id: 6,
        name: "Undyne",
        position: "other character",
        img: "https://static.wikia.nocookie.net/undertale/images/c/c2/Undyne_overworld.png",
        text: "I'm the master of Royal Guardians and i will gather a human souls to cross the barrier."
    },
    {
        id: 7,
        name: "W.D. Gaster",
        position: "mysterious character",
        img: "https://static.wikia.nocookie.net/undertale/images/d/de/Mysteryman_overworld.png",
        text: "I was royal scientist and then it was an accident and I became a missing person."
    },
    {
        id: 8,
        name: "Asgore Dreemurr",
        position: "other character",
        img: "https://static.wikia.nocookie.net/undertale/images/f/f1/Asgore_Dreemurr_battle.png",
        text: "I'm king of underground and i'm gather seven human souls to cross barrier and i will revenge my son"
    },
]
//characters items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const position = document.getElementById("position");
const info = document.getElementById("info");
//buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
const item = characters[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    position.textContent = item.position;
    info.textContent = item.text;
});

function showCharacter(person) {
    const item = characters[person];
    img.src = item.img;
    author.textContent = item.name;
    position.textContent = item.position;
    info.textContent = item.text;
}

// show next character
nextBtn.addEventListener("click", function () {
    //console.log("mahmut");
    currentItem++;
    if (currentItem > characters.length - 1) {
      currentItem = 0;
    }
    showCharacter(currentItem);
  });

// show previous character
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = characters.length - 1;
    }
    showCharacter(currentItem);
})
// show random character
randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * characters.length);
    showCharacter(currentItem);
})