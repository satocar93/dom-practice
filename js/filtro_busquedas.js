const d = document;


// Esta función recibe como parámetros: 1. el selector del input que hará la búsqueda. 2. Sobre qué selector va a hacer la búsqueda de texto.
export default function searchFilters(input, selector) {
    d.addEventListener("keyup", e => {
        if (e.target.matches(input)) {
            // console.log(e.key);
            // console.log(e.target.value);

            if (e.key === "Esc") e.target.value = "";

            d.querySelectorAll(selector).forEach(el => (el.textContent.toLowerCase().includes(e.target.value))
            ? el.classList.remove("filter") 
            : el.classList.add("filter")
            );
        }
    })
}

// El segundo parámetro hace referencia al selector card en singular. no el selector cards que corresponde a la clase del article que agrupa todas las cartas. cada carda tiene clase card.
// Linea 11: Convierte el contenido de texto del elemento a minúsculas. valida si este contenido está incluido o no en el valor del elemento que origina el evento y arroja un booleano al respecto.

// Esa linea se convierte en un operador terminario ya que finalmente va a aroojar un booleano