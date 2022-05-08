const destination_img = document.querySelector("#destination_img");
const destination_name = document.querySelector("#destination_name");
const description = document.querySelector("#description");
const distance = document.querySelector("#distance");
const travel = document.querySelector("#travel");
const ul = document.querySelector(".ul");
const li = document.querySelectorAll("li");
const destination_content = document.querySelector(".destination_content");
const destination = document.querySelector(".destination");

let page = 0;

eventListeners();

function eventListeners() {
  ul.addEventListener("click", destinationSelect);
}

li[0].classList.add("add_bottom_line");
function destinationSelect(e) {
  if (e.target.className == "moon") {
    page = 0;
    data(page);
    className(page);
  } else if (e.target.className == "mars") {
    page = 1;
    
    data(page);
    className(page);
  } else if (e.target.className == "europa") {
    page = 2;
    data(page);
    className(page);
  } else if (e.target.className == "titan") {
    page = 3;
    data(page);
    className(page);
  }
}
function className(page) {
  li[0].classList.remove("add_bottom_line");
  for (let i = 0; i < li.length + 1; i++) {
    if (i == page) {
      li[page].classList.add("add_bottom_line");
    } else {
      li[i].classList.remove("add_bottom_line");
    }
  }
}
function data(page) {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      destination_img.src = data.destinations[page].images.png;
      destination_name.innerHTML = data.destinations[page].name;
      description.innerHTML = data.destinations[page].description;
      distance.innerHTML = data.destinations[page].distance;
      travel.innerHTML = data.destinations[page].travel;
    });
}
