const names = document.querySelector("#name");
const role = document.querySelector("#role");
const bio = document.querySelector("#bio");
const person = document.querySelector("#person");
const button = document.querySelectorAll("button");
const buttons = document.querySelector(".buttons");

let page = 0;
eventListeners();

function eventListeners() {
  buttons.addEventListener("click", destinationSelect);
}
button[0].classList.add("selected");
function destinationSelect(e) {
  if (e.target.classList == "pages_1") {
    page = 0;
    data(page);
    
    className(page);
  } else if (e.target.classList == "pages_2") {
    console.log("tikkk");
    page = 1;
    data(page);
    
    className(page);
  } else if (e.target.classList == "pages_3") {
    page = 2;
    data(page);
    
   className(page);
  } else if (e.target.classList == "pages_4") {
    page = 3;
    data(page);

   className(page);
  }
}
function className(page) {
  button[0].classList.remove("selected");
  for (let i = 0; i < button.length + 1; i++) {
    if (i == page) {
      button[page].classList.add("selected");
    } else {
      button[i].classList.remove("selected");
    }
  }
}
function data(page) {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      person.src = data.crew[page].images.png;
      names.innerHTML = data.crew[page].name;
      role.innerHTML = data.crew[page].role;
      bio.innerHTML = data.crew[page].bio;
    });
}
