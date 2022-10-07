"use strict";

//Dom Elements
const buttonContainer = document.querySelector(".button-container");
const fotos = document.querySelectorAll(".my-foto");

const showpicture = function (e) {
  if (!e.target.classList.contains("btn")) return;
  const fotoId = e.target.id;
  fotos.forEach((foto) => foto.classList.add("hidden"));
  document.querySelector(`.foto-${fotoId}`).classList.remove("hidden");
};
buttonContainer.addEventListener("click", showpicture);
