
import hamburgerMenu from "./js/menu_hamburger.js";
import {digitalClock, alarm} from "./js/reloj.js";
import {moveBall, shortcuts} from "./js/teclado.js";
import countdown from "./js/cuenta_regresiva.js";
const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Jun 1, 2022 16:41:00", "Cuenta Regresiva Finalizada.😎"); // Como vamos a trabajar con getElementById no es necesario el '#' para el parámetro selector de elemento.
})

// Desencadenamoslos eventos del teclado
d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})

