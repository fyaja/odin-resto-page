import "./styles.css";
import { renderHomeElement } from "./home.js";
import { renderMenuElement } from "./menu.js";
import { renderContactElement } from "./contact.js";

renderHomeElement()
document.querySelector('.home').addEventListener('click', renderHomeElement);
document.querySelector('.menu').addEventListener('click', renderMenuElement);
document.querySelector('.contact').addEventListener('click', renderContactElement);
