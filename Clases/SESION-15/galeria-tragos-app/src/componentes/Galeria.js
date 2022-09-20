import { useContext, useEffect, useState } from "react";
import { MiContexto } from "./MiContexto";

function Galeria(props) {
    const contexto = useContext(MiContexto);

    //guardar un array con las fotos de los tragos
    const [fotos, setFotos] = useState([]);

    const [textoCargando, setTextoCargando] = useState("");

    //la llamo a traves de este hook
    useEffect(() => {
        if (contexto.trago.length > 3) {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + contexto.trago;
            setTextoCargando("Cargando fotos...");
            fetch(url)
                .then(raw => raw.json())
                .then(datos => setFotos(datos.drinks))
                .catch(err => console.error(err.message))
                .finally(() => setTextoCargando(""))
                ;
        }

    }, [contexto]); //funcion que se va a ejecutar cuando el 2do parametro 
    //de la variable contexto se modifique. Va estar escuchando 

    return (
        <section style={{ background: "#ccc" }}>
            <h2>{props.titulo}{contexto.trago}</h2>
            <span>{textoCargando}</span>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {fotos.map(f =>
                    <img
                        key={f.idDrink}
                        src={f.strDrinkThumb}
                        style={{ width: "30%" }}
                    />
                )}
            </div>

        </section>
    )
}

export default Galeria;