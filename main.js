import "./style.css";

// DOM elements
const headerMenu = document.querySelector(".header-menu");
const hamburgerIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

// functions

function init() {
  hamburgerIcon.classList.add("block");
  closeIcon.classList.add("hidden");
  headerMenu.classList.add("hidden");
  overlay.classList.add("hidden");
}

function showMenu() {
  headerMenu.classList.replace("hidden", "grid");
  closeIcon.classList.replace("hidden", "block");
  hamburgerIcon.classList.replace("block", "hidden");
  overlay.classList.replace("hidden", "block");
}

function hideMenu() {
  headerMenu.classList.replace("grid", "hidden");
  closeIcon.classList.replace("block", "hidden");
  hamburgerIcon.classList.replace("hidden", "block");
  overlay.classList.replace("block", "hidden");
}

// event listeners
hamburgerIcon.addEventListener("click", showMenu);
closeIcon.addEventListener("click", hideMenu);
overlay.addEventListener("click", hideMenu);

// init
init();
