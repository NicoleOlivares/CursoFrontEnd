import { useState } from "react";

function BotonMeGusta() {
    //hook useState() - permite guardar el estado
    const [likes, setLikes] = useState(0);//digo que comienza con 0 likes
    //estamos generando dos constantes
    //la primera: likes, mantiene el valor que nos interesa
    //la segunda: setLikes, es una variable que mantiene la funcion para modificar esa variable.

    return (
        <>
            <button
                onClick={() => setLikes(likes + 1)}//al pinchar el boton aumentara en uno el like
            >
                Me gusta
            </button>
            {/*vamos a quitar el mensaje cuando hayan 0 likes*/}
            {likes > 0 && //si hay 0 likes el mensaje desaparece
                <span>A {likes} les gusta esto.</span>
            }
        </>

    )
}

export default BotonMeGusta;