// Hacemos uso del objeto match media que cuelga de window y del objeto document
const d = document,
    w = window;

// Creamos la función que genere un elemento multimedia responsivo. Como parámetros recibe: El elemento por su Id que va a revisar. Una media query valida en css, un contenido html que queremos ver a través del movil y el contenido para escritorio. La función se va a ejecutar a la carga del documento.  así que la invocamos dentro del event Listener DOMContentLoaded en el index js.

// Esta función la invocamos una vez por cada elemento que queramos transformar de manera responsiva. o sea por cada Id.
export default function responsiveMedia(id, mq, mobileContent, deskoptContent) {
    // breakpoint es la variable que guardará la media query que el usuario pase en el parámetro mq
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) => {
        if (e.matches) {
            d.getElementById(id).innerHTML = deskoptContent;
        }
        else {
            d.getElementById(id).innerHTML = mobileContent;
        }

        // console.log("MQ", breakpoint, e.matches);
    };
    // Usamos un listener de un objeto de tipo media query en JS.
    breakpoint.addListener(responsive) // Este listener recibe la función que va a evaluar la media query.
    responsive(breakpoint);
}