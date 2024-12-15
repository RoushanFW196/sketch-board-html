let baricon = document.querySelector(".menu-container").children[0];
let showmenuflag = false;
let iconmenus = document.querySelector(".menu-icon-container");
let pickcolorelement = document.querySelector(".pick-color");
let pencilIcon = document.querySelector(".fa-pencil");
let eraseIcon = document.querySelector(".fa-eraser");

pickcolorelement.style.display = "none";
let eraseElement = document.querySelector(".erase");
eraseElement.style.display = "none";

let showcolorpicker = false;
let showeraserpicker = false;

baricon.addEventListener("click", (e) => {
  e.preventDefault();
  showmenuflag = !showmenuflag;
  console.log("baricon clicked", showmenuflag);
  if (showmenuflag) {
    baricon.classList.remove("fa-bars");
    baricon.classList.add("fa-xmark");
    iconmenus.style.display = "none";
    pickcolorelement.style.display = "none";
    eraseElement.style.display = "none";
  } else {
    baricon.classList.remove("fa-xmark");
    baricon.classList.add("fa-bars");
    iconmenus.style.display = "flex";
    iconmenus.classList.add("scale-up");
    // pickcolorelement.style.display = "block";
    // eraseElement.style.display = "block";
  }
});

pencilIcon.addEventListener("click", (e) => {
  e.preventDefault();
  showcolorpicker = !showcolorpicker;
  if (showcolorpicker) {
    pickcolorelement.style.display = "block";
  } else {
    pickcolorelement.style.display = "none";
  }
});

eraseIcon.addEventListener("click", (e) => {
  e.preventDefault();
  showeraserpicker = !showeraserpicker;
  if (showeraserpicker) {
    eraseElement.style.display = "block";
  } else {
    eraseElement.style.display = "none";
  }
});
