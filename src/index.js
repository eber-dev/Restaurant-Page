import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import "./styles.css";
import logo from "./images/restaurant.svg";

const encabezado = document.querySelector(".encabezado");
const content = document.getElementById("content");
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");
const imagen = new Image();
imagen.src = logo;
encabezado.prepend(imagen);

function clearContent() {
    content.textContent = "";
}

home.addEventListener("click", () => {
    clearContent();
    loadHome();
});

menu.addEventListener("click", () => {
    clearContent();
    loadMenu();
});

contact.addEventListener("click", () => {
    clearContent();
    loadContact();
});

loadHome();
