const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

const menu = document.querySelector(".nav-icon #menu-icon");
const icon = document.querySelector(".nav-icon");
const nav = document.querySelector(".navmenu");
const side = document.querySelector(".sidebar");
const main = document.querySelector("#main");

menu.addEventListener("click", function () {
  icon.classList.toggle("active");
  nav.classList.toggle("active");
  side.classList.toggle("active");
  main.classList.toggle("active");
});
