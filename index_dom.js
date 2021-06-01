import hamburgerMenu from "./js/menu_hamburger.js";
import {digitalClock, alarm} from "./js/reloj.js";
import {moveBall, shortcuts} from "./js/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
})

// Desencadenamoslos eventos del teclado
d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})