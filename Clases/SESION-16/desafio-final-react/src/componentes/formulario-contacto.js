import { useState } from "react";

function FormularioContacto() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [celu, setCelu] = useState("");
    const [mensaje, setMensaje] = useState("");

    const enviarDatos = () => {
        const baseUrl = "https://curso-frontend-96395-default-rtdb.firebaseio.com/"
        const path = '/react.json';
        const url = baseUrl + path;
        const datos = {
            nombre,
            email,
            celu,
            mensaje
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos)
        })
            .then(raw => raw.json())
            .then(data => console.dir(data))
            .catch(err => console.error(err.message))
            ;
    };

    return (
        <>
            <form>
                Nombre: <br />
                <input
                    type="text"
                    value={nombre}
                    onChange={
                        (e) => setNombre(e.target.value)
                    }
                /><br />
                Email: <br />
                <input
                    type="email"
                    value={email}
                    onChange={
                        (e) => setEmail(e.target.value)
                    }
                ></input>
                <br />
                Celular: <br />
                <input
                    value={celu}
                    onChange={
                        (e) => setCelu(e.target.value)
                    }
                /><br />
                Motivo de contacto: <br />
                <textarea
                    value={mensaje}
                    onChange={
                        (e) => setMensaje(e.target.value)
                    }
                ></textarea>
                <br />
                <button
                    type="button"
                    onClick={enviarDatos}
                >
                    Enviar
                </button>
            </form>
            <div>
                Nombre: {nombre}<br />
                Mensaje: {email}
            </div>
        </>
    );
}

export default FormularioContacto;