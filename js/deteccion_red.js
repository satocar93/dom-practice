const d = document,
    w = window,
    n = navigator;

// A diferencia de las funciones anteriores, esta funcióin no necesita ningun parámetro. del objeto navigator obtendremos la info necesaria sobre conexión con un booleano.
// esta función tampoco necesita ejecutarse cuando se cargue el document. se activara cuando detecte que se perdió la conexión.

export default function networkStatus() {
    // creamos una función expresada
    const isOnLine = () => {
        const $div = d.createElement("div"); // Constante que almacena la creación de un nuevo elemento div.
        if (n.onLine) { // "Si la propiedad n.onLine es verdadera, agregar contenido de texto al div almacenado en la contante $div."
            $div.textContent = "Conexión Reestablecida."
            $div.classList.add("online"); // Además agregar la clase .online al elemento html div.
            $div.classList.remove("offline"); // Y eliminar la clase .offline (Esta clase pudo haber sido agregada antes, si se ha perdido la conexión en el pasado.)
        } else { // Esto es en caso de que n.online arroje un false ( o sea que no haya conexión a internet ), cambia el textContent y las clases serían a la inversa.
            $div.textContent = "Conexión Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }

        d.body.insertAdjacentElement("afterbegin", $div); // Teniendo el elemento listo, lo agregamos o insertamos al body el documento. como primer elemento, por eso usamos afterbegin.
        setTimeout(() => { // Función con temporizador para eliminar el aviso de conexión perdida. ya que este tapa al de conexión reestablecida.
            d.body.removeChild($div) // Método para remover elementos del body del document.
        }, 2000);
    }
    w.addEventListener("online", e => isOnLine());
    w.addEventListener("offline", e => isOnLine());
}

// navigator.onLine --> retorna un true o false si se está conectado a internet o no.
// JavaScript tiene dos eventos de window: online y offline. Con estos eventos, se 