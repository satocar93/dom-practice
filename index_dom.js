
import hamburgerMenu from "./js/menu_hamburger.js";
import {digitalClock, alarm} from "./js/reloj.js";
import {moveBall, shortcuts} from "./js/teclado.js";
import countdown from "./js/cuenta_regresiva.js";
import scrollTopButton from "./js/botton_scroll.js";
import darkTheme from "./js/tema_oscuro.js";
import responsiveMedia from "./js/objeto_responsive.js";
import responsiveTester from "./js/prueba_responsive.js";
import userDeviceInfo from "./js/deteccion_dispositivos.js";
const d = document;
// Asignación de eventos en el momento en que el documento carge (DOM ContentLoaded)
d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Jun 1, 2022 16:41:00", "Cuenta Regresiva Finalizada.😎"); // Como vamos a trabajar con getElementById no es necesario el '#' para el parámetro selector de elemento.
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/watch?v=cRGnHoUgTWs&ab_channel=TrinityMusicGroup" target="_blank" rel="noopener">Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/cRGnHoUgTWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/XaLKWpi2hwcHvbkr6" target="_blank" rel="noopener">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6451.269051780587!2d-74.08891997648442!3d4.658939427363492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85921810393d%3A0x1d953f644042b03b!2sParque%20Central%20Sim%C3%B3n%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1625406281839!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
        );
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
})

// Desencadenamoslos eventos del teclado
d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})

darkTheme(".dark-theme-btn", "dark-mode"); // Como a la clase dark-mode la vamos a activar/desactivar con un .add o .remove no necesitamos escribirla con el punto al llamar el parámetro.
// Esta invocación fue sacada de la delegación principal de eventos, ya que internamente en la función darkTheme hay otra invocación del mismo evento DOM ContentLoad.