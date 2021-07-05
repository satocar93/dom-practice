// userAgent cuelga de el elemento navigator. por tanto vamos a crear variables para almacenar el document, el navigator y el user agent.

const d = document,
    n = navigator,
    ua = n.userAgent

// Creamos la función que recibe como parámetro el id del elemento que proporsiona toda la información que vamos a extraer (user agent)

export default function userDeviceInfo(id) {

    const $id = d.getElementById(id) // Elemento traido según el id. con esto vamos a traer el userAgent.
    // Creamos tres variables que almacenarán objetos:
    const isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function () {
            return this.android() || this.ios() ||this.windows()
        },
        // Las primeras tres propiedades están declaradas en arrow function, pero como la cuarta prpiedad hace referencia a las demás propiedades, esta está declarada en una función anónima.
        // cada propiedad usa una expresión regular para saber si se encuentra la palabra android, iphone, etc.

    }, // Detecta si usuario visita desde sistema para móvil.
        isDesktop = {
            linux: () => ua.match(/linux/i),
            mac: () => ua.match(/mac os/i),
            windows: () => ua.match(/windows nt/i),
            any: function () {
                return this.linux() || this.mac || this.windows();
            },
        }, // Detecta si usuario visita desde sistema para escritorio.
        isBrowser = {
            chrome: () => ua.match(/chrome/i),
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/firefox/i),
            opera: () => ua.match(/opera|iemobile/i),
            ie: () => ua.match(/msie|iemobile/i),
            edge: () => ua.match(/edge/i),
            any: function () {
                return (this.ie() ||this.edge() || this.chrome() || this.safari() || this.firefox() || this.opera());
            }
        }; //Detecta en qué navegador web se está


    // //Podemos probar nuestro userAgent en la consola
    // console.log(ua); // Se muestra en consola el userAgent, que es una cadena de texto que contiene mucha información sobre el usuario que nos está visitando. Esta cadena de texto que podemos obtener por navigator.userAgent nos da mucha información de ayuda para redirecciones, tipos de responsividad que necesitemos, etc. mediante validaciones.
    // console.log(isMobile.android());
    // console.log(isMobile.ios);
    // console.log(isMobile.any);
    $id.innerHTML = `
    <ul>
        <li>User Agent: <b>${ua}</b></li>
        <li>Plataforma: <b>${
            isMobile.any()? isMobile.any():isDesktop.any()
        }</b></li>
        <li>Navegador <b>${isBrowser.any()}</li>
    </ul>
    `;

    // Podemos crear contenido exclusivo para cierta plataforma, haciendo validaciones con ifs.
    // Si se valida arroja true, si no, arroja null ya que no se encuentra como expresión regular el navegador indicado.

    /* Contenido exclusivo para Chrome */
    if (isBrowser.chrome()) {
        // Para no borrar el contenido anterior definido en la variable $id.innerHTML, usamos +=
        $id.innerHTML += `<p><b><mark>Este contenido sólo se ve en Chrome</mark></b></p>`;
    };
    /* Contenido Exclusivo para Firefox */
    if (isBrowser.firefox()) {
        $id.innerHTML += `<p><b><mark>Este contenido sólo se ve en Firefox</mark></b></p>`;
    };
       /* Contenido Exclusivo para Linux */
    if (isDesktop.linux()) {
        $id.innerHTML += `<p><b><mark>Descarga Nuestro Software Para Linux</mark></b></p>`;
    };
       /* Contenido Exclusivo para mac */
    if (isDesktop.mac()) {
        $id.innerHTML += `<p><b><mark>Descarga Nuestro Software Para Mac OS</mark></b></p>`;
    };
       /* Contenido Exclusivo para windows */
    if (isDesktop.windows()) {
        $id.innerHTML += `<p><b>Descarga Nuestro Software Para windows</b></p>`;
    };

    // Para hacer redirecciones usamos el mismo concepto que con el contenido exclusivo:

    /* Redirección */
    if (isMobile.android()) {
        window.location.href = "https://sites.google.com/view/trinitymusicgroup/inicio"
    }

};