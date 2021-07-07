const d = document,
    n = navigator,
    w = window;

// Recibe como parámetro el id del elemnto html en donde dinamicamente le crearemos la información sobre geolocalización.
// al invocarlo en el index.js, dentro de la carga del DOM, poner como parámetro el id que le creamos al elemento html en cuestion.
export default function getGeolocation(id) {
    // capturamos en una variable el id
    const $id = d.getElementById(id),
    // la función que ejecuta la geolocalización necesita una serie de opciones
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    // Parámetro #1 de getCurrentPosition --> función en caso de exito
    const success = (position) => {
        let coords = position.coords; // estamos almacenando en una variable el objeto GeolocationPosition, especificamente las coordenadas, de entre todos sus atributos.
        console.log(position);

        $id.innerHTML = `
        <p>Tu Posición actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Presición: <b>${coords.accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `;
    };
    // Parámetro #2 de getCurrentPosition --> función en caso de error
    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.log(`Error ${err.code}: ${err.message}`); // Este mismo mensaje de error que se imprime en consola lo vamos a poner en el contenido html para que el usuario pueda leerlo tambien.
    };
    // accedemos a la función de geolocalización
    n.geolocation.getCurrentPosition(success, error, options)
}

// window es el contexto global que controla la ventana de nuestro navegador
// document es el arbol o estructura html que nos permite acceder a los nodos de nuestro documento. 
// navigator siempre nos va a dar información de las características del dispositivo o del usuario que accede a nuestra aplicación.

// getCurrentPosition() --> es una función para acceder a la localización actual. Como parámetro recibe una función que se va a ejecutar en caso de exito, una función en caso de error y las opciones.

// Al recargar el navegador, la página pedira permiso para conocer la ubicación. Si presionamos la opción de bloquear, se va a ejecutar la función de caso de error.

// En caso de Permitir, en consola se imprime el objeto GeolocationPosition, el cual contiene información sobre ubicación actual como accuracy, latitud, longitud, etc. Escribimos codigo para mostrar esta información como contenido innerHTML dentro del elemento en cuetstión. además colocamos en el html una etiqueta para enlace a google maps con las coordenadas generadas de forma dinámica y un zoom de 1z.