function Cabecera(props) {
    //usar JSX se invito con react
    //react requiere que solo devuelva un nodo
    //<></> etiqueta vacia 
    return (
        <header className="bg-rojo">
            <p style={{
                backgroundColor: "yellow",
                color:"green"
            }}>
                Título: {props.titulo}
            </p>

            <ul>
                <li>Uno</li>
                <li>Dos</li>
                <li>Tres</li>
            </ul>
        </header>
    )
}

export default Cabecera;