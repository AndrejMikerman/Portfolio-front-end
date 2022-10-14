"use strict";

//Dom Elements
const buttonContainer = document.querySelector(".button-container");
const fotos = document.querySelectorAll(".my-foto");
const nav = document.querySelector("nav");
const navArrow = document.querySelector(".down-arrow");
const backToTop = document.querySelector(".back-to-top");
const header = document.querySelector("header");
const copyright = document.querySelector(".copyright");

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

// to DO
// lazy loading
//sections come into view when scrolling
