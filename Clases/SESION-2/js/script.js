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

        //bloque try
        try {

            //recuperar los valores del formulario
            let nombre = document.getElementById("nombre").value;
            let email = document.getElementById("correo").value;

            //declarando variable para generar código
            let genero = getGenero();
            let intereses = getIntereses();

            //objeto JSON
            let suscriptor = { //JSON = Javascript object notation
                //clave: valor
                nombre_completo: nombre,
                email,//es lo mismo que email: email,
                genero,
                intereses,
                fecha_registro: (new Date()).toISOString()
            };
            //console.log("El nombre del suscriptor es: " + nombre);
            console.dir(suscriptor);
            guardarSuscriptor(suscriptor);
            mostrarExito("Se guardó correctamente su suscripción");
        } catch(e) {
            mostrarError(e.message);
        }
    });
});

function mostrarExito (mensaje) {
    alert(mensaje);
    //tarea: hacer que el mensaje se muestre en el cuadro verde

}

async function guardarSuscriptor(suscriptor) {
    const url = "https://curso-frontend-96395-default-rtdb.firebaseio.com/suscriptores.json";
    /*alternativas:
    1) Callbacks
    fetch(url, {
        method: "POST",
        body: JSON.stringify(suscriptor)
    })
        .then( respuesta => respuesta.json()) //devuelve promesa
        .then( data => mostrarExito("Se guardó correctamente su suscripción"))
    ;
    */
    //2) Async Await
    const respuesta = await fetch(url, {
        method: "POST",
        body: JSON.stringify(suscriptor)
    });
    const data = await respuesta.json();
    mostrarExito("Se guardó correctamente su suscripción");
}

function getIntereses() {
    let inputIntereses = document.querySelectorAll("input[name='intereses']:checked");
    //lista para guardar los diferentes intereses
    let arrIntereses = [];

    //alternativa 1:
    //inputIntereses.forEach(nodoInteres => arrIntereses.push(nodoInteres.value));

    //alternativa 2:
    for (let i = 0; i < inputIntereses.length; i++) {
        const interes = inputIntereses[i].value;
        arrIntereses.push(interes);
    }

    if (inputIntereses.length < 1) {
        throw new Error("Debe seleccionar al menos 1 tema de su interés!");
    }
    return arrIntereses;
}

function getGenero() {
    let inputSeleccionado = document.querySelector("input[name='genero']:checked")
    if (inputSeleccionado == null) {
        throw new Error("Debe seleccionar un género!");
    }
    const genero = inputSeleccionado.value;
    return genero;
}

function mostrarError(mensajeDeError) {
    //valor anterior "none"
    document.getElementById("form-mensaje-error").style.display = "block";
    const ul = document.querySelector("#form-mensaje-error ul");
    const li = document.createElement("li");
    const liText = document.createTextNode(mensajeDeError);
    li.appendChild(liText);
    ul.appendChild(li);
}

console.log("Hola mundo!!");