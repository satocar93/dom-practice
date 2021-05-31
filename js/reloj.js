const d = document;
// La función de reloj recibe tres elementos del DOM: El reloj, el boton de activar y el boton de desactivar.
export function digitalClock(clock, btnPlay, btnStop) {
    let clockTempo;
    // Delegación de eventos
    d.addEventListener("click", e => {
        if (e.target.matches(btnPlay)) {
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString()
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);

            e.target.disabled = true;
        }
        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}
// La función de alarma recibe tres elementos: El sonido mp3 de alarma, el boton de activar y el botón de desactivar.
export function alarm(sound, btnPlay, btnStop) {
    // Variable que almacene el tiempo del setTimeout.
    let alarmTempo;
    // Variable para guardar un elemento audio (etiqueta html) del DOM
    const $alarm = d.createElement("audio");
    // Añadir la variable sound en su atributo src.
    $alarm.src= sound;
    // Delegación de eventos.
    d.addEventListener("click", (e) => {
        if (e.target.matches(btnPlay)) {
            alarmTempo = setTimeout(() => {
                $alarm.play();
            },2000);

            e.target.disabled = true;
        };
        if (e.target.matches(btnStop)) {
            clearTimeout(alarmTempo);
            // No existe una propiedad stop del API de audio. debemos usar la propiedad .pause() y volver al inicio con la propiedad .curretTime
            $alarm.pause(); // pausar el sonido. Si volvemos a reproducir, empieza desde el punto de pausado.
            $alarm.currentTime = 0; // Regresar a cero el tiempo actual de reproducción.
            // Volver a false la propiedad disable del boton play (es decir, volve a habilitar el boton de play)
            d.querySelector(btnPlay).disabled = false;
        };
    });

};