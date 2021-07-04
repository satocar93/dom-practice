// Como parámetro necesitaríamos el selector para el botón, y el selector que hace referencia a los elementos que vayan a tener la clase dark

const d = document;
const ls = localStorage;

export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");

    console.log($selectors);

    let moon = "🌙",
        sun = "☀️";

    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        // Establecemos el valor del tema correspondiente en el localStorage
        ls.setItem("theme", "light");
    }
    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        // Establecemos el valor del tema correspondiente en el localStorage
        ls.setItem("theme", "dark");
    }  


    // Delegación de evento
    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            console.log($themeBtn.textContent);
            if ($themeBtn.textContent === moon) {
                darkMode();
            } else {
                lightMode();
            }
        }
    });
    d.addEventListener("DOMContentLoaded", (e) => {
        if (ls.getItem("theme") === null) {
            ls.setItem("theme", "light")
        };

        if (ls.getItem("theme")  === "light") {
            lightMode();
        };

        if (ls.getItem("theme")  === "dark") {
            darkMode();
        };
    })
}

// A todos los elementos a los que les quiera aplicar el dark mode, simplemente hay que agregarles en el htmn un data atribute inventado llamado data-dark

// Vamos a usar la API de Local Storage para guardar variables y que el tema oscuro se conserve al reiniciar el navegador.
// Necesitamos dos métodos de localStorage: Uno para obtener el valor de una variable de localStorage y otro que permita actualizar establecer un valor para localStorage

// Necesitamos desencadenar un evento de tipo DOMContentLoad porque a la hora de que cargue la aplicación queremos que pregunte al localStorage si existe una variable que controla el tema oscuro y en base a esto aplique los estilos correspondientes

// No se puede tener dos eventos del mismo tipo ejecutandose. En este caso una función ejecuta un evento dentro de otro evento del mismo tipo.
// Para esto sacamos la invocación del DOMContentLoad por fuera de la invocación del archivo principal.

// API localStorage: es una API que nos permite almacenar información en el disco duro del usuario y cada navegador tiene su algoritmo para almecenar. se pueden guardar variables que sirven para almacenar información utiles para el funcionamiento de las aplicaciones.

// Necesitamos dos métodos de localStorage: Uno para obtener el valor de una variable de tipo localStorage y otro que permita actualizar o establecer un valor para local Storage.

// Método para obtener una variable de localStorage --> .getItem("nombre_variable")
// Método para crear una variable y establecerle un valor a esta en el localStorage --> .setItem("nombre_variable", valor)          es un funcionamiento igual al de getAttribute y setAttribute.