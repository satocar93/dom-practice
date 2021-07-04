const d = document;

// La función solo recibe el id del formulario
export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    // Creamos una variable vacía en la que se almacenará el window.open() de la ventana en la que abriremos el tester. Para trabajar con los métodos window.open() y window.close() lo correcto es almacentar en variables la referencia de la ventana que abrimos.
    let tester;
    // Vamos a trabajar con el formulario y usaremos la delegación de eventos para asociar al evento submit
    d.addEventListener("submit", e => {
        // Usamos otra manera distina al e.target.matches (recordar que e.target es el objeto que origina el evento.)
        if (e.target === $form) {
            // Cancelamos la acción por defecto del formulario (que es enviar información) porque la programación la vamos a hacer por JavaScript
            e.preventDefault()
            // Queremos que cuando el fomulario se procese se abra una ventana
            // Con la dot notation podedmos acceder a cualquier input que este dentro de un formulario. como si se tratara de un elemento html dentro de un contenedor padre.
            // La ventana que quiero abrir está en el input de dirección y usamos .value para sacar el valor (Lo que el usuario escribió en ese input)
            // El método window.open() usa muchos parámetros pero vamos a usar estos: Url, target, "width, height" con templates string. 
            tester = window.open($form.direccion.value, "tester", `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`)
        }
    });

    // Para usar el window.cose() usamos un addListener para el evento click. USamos la comparación de si el objeto que origina el evento click es igual a el botón de cerrar de nuestro formulario.
    d.addEventListener("click", e => {
        if (e.target === $form.cerrar) tester.close();
    })
}