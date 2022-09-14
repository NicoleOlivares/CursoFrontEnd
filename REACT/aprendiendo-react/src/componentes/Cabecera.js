function Cabecera(props) {
    //usar JSX se invito con react
    //react requiere que solo devuelva un nodo
    //<></> etiqueta vacia 
    return (
        <header className="bg-rojo">
            <p style={{
                backgroundColor: "aquamarine",
                color:"black"
            }}>
                Título: {props.titulo}
            </p>

            <ul style={{
                color:"white"
            }}>
                <li>Uno</li>
                <li>Dos</li>
                <li>Tres</li>
            </ul>
        </header>
    )
}

export default Cabecera;