//Se puede colocar en el head o al final del body
//funciona en ambas, la diferencia esta en el tiempo de carga de la página

/*Esto es un comentario
multiple */

//alert("Hola Mundo!!");


window.addEventListener('DOMContentLoaded', (e) => {
    // con el evento DOMContentLoaded me aseguro que todas las etiquetas HTML
    //fueron cargadas y procesadas por el browser
    // más info en: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
    console.log("evento DOMContentLoaded");

    /*Sintaxis de variables:
    let nombreVariable = valor;
    más ejemplos:
    let nombre = "Santiago";
    let edad = 34;
    */

    let boton = document.getElementById("btn-suscribir");
    boton.addEventListener("click", (ev) => {

        //recuperar los valores del formulario
        let nombre = document.getElementById("nombre").value;
        console.log("El nombre del suscriptor es: " + nombre);
    });

});



console.log("Hola mundo!!");