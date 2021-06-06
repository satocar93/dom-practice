
import hamburgerMenu from "./js/menu_hamburger.js";
import {digitalClock, alarm} from "./js/reloj.js";
import {moveBall, shortcuts} from "./js/teclado.js";
import countdown from "./js/cuenta_regresiva.js";
import scrollTopButton from "./js/botton_scroll.js";
const d = document;
// Asignación de eventos en el momento en que el documento carge (DOM ContentLoaded)
d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Jun 1, 2022 16:41:00", "Cuenta Regresiva Finalizada.😎"); // Como vamos a trabajar con getElementById no es necesario el '#' para el parámetro selector de elemento.
    scrollTopButton(".scroll-top-btn");
})

// Desencadenamoslos eventos del teclado
d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})

