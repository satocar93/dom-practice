const d = document,
    n = navigator;
// Esta función va a recibir como parámetro el id de la etiqueta video en donde se va a mostrar la webcam. Esta función si debe ejecutarse junto a la carga del documento.
export default function webcam(id) {
    // Se crea la variable que apunte al elemento en el dom
    const $video = d.getElementById(id)
    console.log(n.mediaDevices);

    // Validación de que la función navigator.mediaDevices.getUserMedia exista para el navegador
    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({video:true, audio:false})
        .then(stream => {
            console.log(stream);
            $video.srcObject = stream; // .srcObject es el el recurso que aporta el stream para el video. este es un tipo objeto o séa que scrObject es el especial para este.
            $video.play(); // Reproduce el video. si no sería solo una foto.
        })
        .catch(err => {
            $video.insertAdjacentHTML("beforebegin", `<p>Sucedió el siguiente error: <mark>${err}</mark></p>`)
            console.log(`Sucedió el siguiente error: ${err}`)
        });
    }
}



// Objeto navitator.mediaDevices --> 

// Función getUserMedia() --> Es una función que recibe parámetros para activar el video, audio, etc. ESTA FUNCIÓN ES UNA PROMESA.