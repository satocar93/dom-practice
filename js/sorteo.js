const d = document


// como parámetros necesitamos el selector del botón que active el sorteo y el selector con el que vamos a analizar el código html y obtener el ganador.
export default function draw(btn, selector) {
    // Internamente creamos una función expresada
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector) // Esto arroja una lista de nodos por ser un document.querySelectorAll()
        // Creamos una variable que nos arroje un número aleatorio entre 1 y el número máximo de participantes del sorteo.
        const random = Math.floor(Math.random() * $players.length);
        // Variable que almacena el elemento ganador de la lista de nodos.
        const winner = $players[random];

        // Analizamos algunas variables en consola.
        // console.log($players, random, winner);

        // Como el valor de winner es un list item. Hay que extraer su contenido de texto.
        return `El Ganador Es: ${winner.textContent}`;


    }

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            let result = getWinner(selector);
            alert(result);
            console.log(result);
        }
    })
}


// Hemos obtenido un algoritmo genérico para sorteo de comentarios en redes sociales.
// Copiamos la funcione y la pegamos en la consola del inspector del navegador estando en el post o video de una red social. Presionamos enter y así el navegador ya tiene la función en memoria.

const getWinnerComment = (selector) => {
    const $players = document.querySelectorAll(selector)
    const random = Math.floor(Math.random() * $players.length);
    const winner = $players[random];
  return `El Ganador Es: ${winner.textContent}`;
};

getWinnerComment("d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb mdeji52x sq6gx45u j5wam9gi lrazzd5p oo9gr5id")