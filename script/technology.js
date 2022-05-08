const ul = document.querySelector("#ul");
const li = document.querySelectorAll("li");
const names = document.querySelector(".name");
const images = document.querySelector(".images");
const description = document.querySelector(".description");
var mediaQuery = window.matchMedia("(max-width: 970px)");
let page = 0;
eventListeners();
control();
function eventListeners() {
  ul.addEventListener("click", destinationSelect);
}
mediaQuery.addEventListener("change", control);
function control() {
  if (mediaQuery.matches) {
    images.src = "./assets/technology/image-launch-vehicle-landscape.jpg";
  } else {
    images.src = "./assets/technology/image-launch-vehicle-portrait.jpg";
  }
}
li[0].classList.add("selected");
function destinationSelect(e) {
  if (e.target.className == "one") {
    page = 0;
    data(page);
    className(page);
  } else if (e.target.className == "two") {
    page = 1;
    data(page);
    className(page);
  } else if (e.target.className == "three") {
    page = 2;
    data(page);
    className(page);
  } else if (e.target.className == "pages_4") {
    page = 3;
    data(page);
    className(page);
  }
}
 function className(page) {
  li[0].classList.remove("selected");
  for (let i = 0; i < 5; i++) {
    if (i == page) {
      li[page].classList.add("selected");
    } else {
      li[i].classList.remove("selected");
    }
  }
}
function data(page) {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      if (mediaQuery.matches) {
        images.src = data.technology[page].images.landscape;
        console.log("küçük");
      } else {
        images.src = data.technology[page].images.portrait;
      }
      names.innerHTML = data.technology[page].name;
      description.innerHTML = data.technology[page].description;
    });
}
