// La función solo recibe como parámetro el selector del botón de scroll

// Creamos la variable para document y una variable w para el objeto window ya que vamos a trabajar con elementos del bom.
const d = document,
    w = window;
export default function scrollTopButton(btn) {
    // necesitamos Detectar el scroll y a qué distancia de la barra de scroll vertical se quiere que el elemento se muestre.
    const $scrollBtn = d.querySelector(btn);
    // Designación del evento scroll
    w.addEventListener("scroll", e => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        // Si la distancia es mayor a 600, mostrar el botón
        if (scrollTop > 600) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden")
        }
        // Por cualquiera de estas dos propiedades (una de window y otra de document) podemos detectar la distancia de la barra.
        console.log(w.pageYOffset, d.documentElement.scrollTop);
    });
    // Designación del evento click
    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            // Propiedad de window para scrollear a donde necesitemos. tiene varias propiedades como el comportamiento y la ubicación de coordenadas y sus respectivos valores.
            w.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }
    })
}