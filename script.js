"use strict";

//Dom Elements
const buttonContainer = document.querySelector(".button-container");
const nav = document.getElementById("navigation");
const navArrow = document.querySelector(".down-arrow");
const backToTop = document.querySelector(".back-to-top");
const header = document.querySelector("header");
const copyright = document.querySelector(".copyright");
const projectsContainer = document.querySelector(".projects-container");
const sections = document.querySelectorAll("section");

//arrow to the nav menu
navArrow.addEventListener("click", function () {
  nav.scrollIntoView({ behavior: "smooth" });
});

//nav menu scrolling
buttonContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("btn")) return;
  const elementId = e.target.dataset.goto;
  document.getElementById(elementId).scrollIntoView({ behavior: "smooth" });
});

//back to the top scroll
backToTop.addEventListener("click", function () {
  header.scrollIntoView({ behavior: "smooth" });
});

//Set Year in the Copyright
const currentYear = new Date().getFullYear();
copyright.textContent = `© ${
  currentYear === 2022 ? "" : "2022-"
}${currentYear} Andrii Ivasiuk 🙂`;

//toogle Overlay
projectsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("close-overlay")) {
    e.target.closest(".overlay").classList.add("hidden");
  }
  if (e.target.closest(".project")) {
    e.target
      .closest(".project-container")
      .querySelector(".overlay")
      .classList.remove("hidden");
  }
});
//revelal sections
const reveal = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden-section");
  observer.unobserve(entry.target);
};
const options = {
  root: null,
  treshold: 0,
};
const intersectionObserver = new IntersectionObserver(reveal, options);

sections.forEach(function (section) {
  intersectionObserver.observe(section);
  section.classList.add("hidden-section");
});

//scroll the page always to the top when reloading
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
// to DO
//sections come into view when scrolling
