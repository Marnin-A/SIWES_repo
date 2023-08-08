const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav");
const navList = document.querySelector(".nav-right");
const root = document.querySelector(":root");

window.onload = function setNavbarHeight() {
  let height = navbar.offsetHeight + "px";
  root.style.setProperty("--navbarHeight", height);
  console.log(height);
};

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

document.querySelectorAll(".link").forEach((element) =>
  element.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  })
);
