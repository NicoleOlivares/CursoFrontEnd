import {useState} from "react";

function BotonMeGusta() {
    //hook useState() - permite guardar el estado
    const [likes, setLikes] = useState(0);//digo que comienza con 0 likes

    return (
        <>
            <button
                onClick={() => setLikes(likes + 1)}//al pinchar el boton aumentara en uno el like
            >
                Me gusta
            </button>
            <span>A {likes} les gusta esto.</span>
        </>

    )
}

export default BotonMeGusta;