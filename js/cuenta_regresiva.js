
const d = document;
// Exportamos por defecto porque es la única función que vamso a manejar.
// La función countown recibe tres parámetros: el id selector del elemento en donde estará  la cuenta regresiva, el tiempo o fecha límite (es una fecha válida para JS) y el mensaje final.
export default function countdown(id, limitDate, finalMessage) {
    const $countdown = d.getElementById(id);
    const countdownDate = new Date(limitDate).getTime(); // .getTime es para obtener el valor de la fecha en milisegundos (time stamp)

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime();
        let limiteTime = countdownDate - now;
        let days = Math.floor(limiteTime / (1000*60*60*24));
        let hours = ("0" + Math.floor(limiteTime % (1000*60*60*24) / (1000*60*60))).slice(-2);
        let minutes = ("0" + Math.floor(limiteTime % (1000*60*60) / (1000*60))).slice(-2);
        let seconds = ("0" + Math.floor(limiteTime % (1000*60) / (1000))).slice(-2);

        $countdown.innerHTML = `<h3>Faltan: ${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos.</h3>`;

        // console.log(countdownDate, now, limiteTime);

        if (limiteTime < 0) {
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
        }
    }, 1000)
}