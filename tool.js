let baricon = document.querySelector(".menu-container").children[0];
let showmenuflag = false;
let iconmenus = document.querySelector(".menu-icon-container");
let pickcolorelement = document.querySelector(".pick-color");
let pencilIcon = document.querySelector(".fa-pencil");
let eraseIcon = document.querySelector(".fa-eraser");
let stickyNoteIcon = document.querySelector(".fa-file");

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

// sticky container
stickyNoteIcon.addEventListener("click", function (e) {
  e.preventDefault();

  // Create the sticky container dynamically
  let stickcontainer = document.createElement("div");
  stickcontainer.setAttribute("class", "stick-container");

  stickcontainer.innerHTML = `
    <div class="sticky-header">
      <div class="remove"></div>
      <div class="minimize"></div>
    </div>
    <div class="sticky-content">
      <textarea></textarea>
    </div>`;

  // Append the sticky container to the document body
  document.body.appendChild(stickcontainer);

  // Add drag-and-drop feature
  makeDraggable(stickcontainer);
});

// Drag-and-drop logic
function makeDraggable(element) {
  element.onmousedown = function (event) {
    // Get initial mouse position relative to the element
    let shiftX = event.clientX - element.getBoundingClientRect().left;
    let shiftY = event.clientY - element.getBoundingClientRect().top;

    // Set element to absolute positioning
    element.style.position = "absolute";
    element.style.zIndex = 1000;

    // Move the element to the new position
    function moveAt(pageX, pageY) {
      element.style.left = pageX - shiftX + "px";
      element.style.top = pageY - shiftY + "px";
    }

    // Move the sticky container when the mouse moves
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener("mousemove", onMouseMove);

    // Stop dragging when mouse is released
    element.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      element.onmouseup = null;
    };
  };

  // Prevent default drag behavior
  element.ondragstart = function () {
    return false;
  };
}

// Event delegation for minimize and remove
document.body.addEventListener("click", (e) => {
  const stickyContainer = e.target.closest(".stick-container");
  if (e.target.classList.contains("remove")) {
    // Remove the sticky note

    if (stickyContainer) stickyContainer.remove();
  }

  if (e.target.classList.contains("minimize")) {
    // Minimize or restore the sticky note
    const stickyContent = e.target
      .closest(".stick-container")
      .querySelector(".sticky-content");
    if (stickyContent) {
      stickyContent.style.display =
        stickyContent.style.display === "none" ? "block" : "none";
    }
  }
});
