// Se implementaran funciones de shortcuts de teclado.
// El teclado tiene tres eventos principales: keyup --> cuando soltamos la tecla / keydowm --> Cuando presionamos la tecla / keypress --> Mientras la presionamos.
const d = document;
// Variables que acumulen laposición de lapelota en x y y.
let x = 0,
    y = 0;

// La función para mover la bola recibe como parámetros: evento, selector de la pelota, selector del escenario.
export function moveBall(e, ball, stage) {
    // Guardamos en variables de dom a los elementos de pelota y stage.
    const $ball = d.querySelector(".ball");
    const $stage = d.querySelector(".stage");
    const $limitsBall = $ball.getBoundingClientRect(); // gBoundingClientRect es un objeto
    const $limitsStage = $stage.getBoundingClientRect();
    // // Para mover la bola se debe detectar el keyCode
    // console.log(e.keyCode);
    // console.log(e.key);
    // console.log($limitsBall, $limitsStage); // retorna un objeto de tipo DOM Rect
    // // Creamos una función que recibe la dirección en la vaya la pelota.
    // // const move = (direction) => {} 

    switch (e.keyCode) {
        case 37:
            // move("left")
            if($limitsBall.left > $limitsStage.left) {
                // Prevensión del scroll por default debido a las flechas del teclado
                e.preventDefault();
                x--;
            };
            break;
        case 38:
            // move("up") En el plano cartesiano de la web, la y en sentido positivo es negativo.
            if ($limitsBall.top > $limitsStage.top) {
                // Prevensión del scroll por default debido a las flechas del teclado
                e.preventDefault();
                y--;
            };
            break;
        case 39:
            // move("right")
            if ($limitsBall.right < $limitsStage.right) {
                // Prevensión del scroll por default debido a las flechas del teclado
                e.preventDefault();
                x++;
            };
            break;
        case 40:
            // move("down")
            if ($limitsBall.bottom < $limitsStage.bottom) {
                // Prevensión del scroll por default debido a las flechas del teclado
                e.preventDefault();
                y++;
            };
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}

// La función shortcuts recibe el evento como tal
export function shortcuts (e) {
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(`Ctrl: ${e.ctrlKey}`); // Retorna true si se presiona ctr.
    // console.log(`Alt: ${e.altKey}`); // Retorna true si se presiona alt.
    // console.log(`Shift: ${e.shiftKey}`);
    // console.log(e);

    // Shortcuts: en este ejercicio vamos a usar como referencia la propiedad .key. En el próximo usaremos .keyCode.
    // Cuando el usuario presione alt+a se ejecute un alert
    if(e.key === "a" && e.altKey) {
        alert("Haz lanzado una alerta con el Teclado.")
    }
    // Cuando el usuario presione alt+c se ejecute un confirm
    if(e.key === "c" && e.altKey) {
        confirm("Haz lanzado una confirmación con el Teclado.")
    }
    // Cuando el usuario presione alt+c se ejecuta un prompt
    if(e.key === "p" && e.altKey) {
        prompt("Haz lanzado un input con el Teclado.")
    }
}

// Cada tecla tiene un código. la propiedad KeyCode es una propiedad importante del evento keydown. su valor es un número, mientras que la propiedad key retorna el nombre de la tecla como tal.