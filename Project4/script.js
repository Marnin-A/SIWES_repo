const hamburger = document.querySelector(".hamburger");
const navElement = document.querySelector("#section_links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navElement.classList.toggle("active");
});

document.querySelectorAll(".link").forEach((element) =>
  element.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navElement.classList.remove("active");
  })
);
