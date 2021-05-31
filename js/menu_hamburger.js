// Función para desplegar el menú de opciones. recibe tres argumentos argumentos
export default function hamburgerMenu(panelBtn, panel, menuLink) {
    // Utilizamos la delegación de eventos. guardamos en una variable sencilla al document.
    const d = document;
    // Mediante delegación de eventos asignamos el evento click al document. se usa matches que es para saber si una clase dada coincide con el elemento.
    d.addEventListener("click", e => {
        // Delegación de eventos para desplegar el meno cuando se haga click sobre el icono hamburguesa. el click debe activarse con el boton y con cualquiera de los elemento dentro del botón.
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle("is-active")
            d.querySelector(panelBtn).classList.toggle("is-active")
        }
        // delegaciónd e eventos para cerrar elpanel cuando se haga click a uno de los enlaces.
        if(e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    })
}