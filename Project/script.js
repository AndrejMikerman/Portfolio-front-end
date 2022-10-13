"use strict";

//Dom Elements
const buttonContainer = document.querySelector(".button-container");
const fotos = document.querySelectorAll(".my-foto");
const nav = document.querySelector("nav");
const navArrow = document.querySelector(".down-arrow");

navArrow.addEventListener("click", function () {
  nav.scrollIntoView({ behavior: "smooth" });
});

buttonContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("btn")) return;
  const elementId = e.target.dataset.goto;
  document.getElementById(elementId).scrollIntoView({ behavior: "smooth" });
});
// to DO
// Click on arrow scroll to the nav
// lazy loading
