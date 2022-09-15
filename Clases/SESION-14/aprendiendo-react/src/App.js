import logo from './logo.svg';
import './App.css';
import BotonFuncion from './componentes/BotonFuncion';
import BotonClase from './componentes/BotonClase';
import FormularioContacto from './componentes/FormularioContacto';


function App() {
  return (
    <div className="App">

      <FormularioContacto />
      <br />
      <BotonFuncion texto="Boton Función" />
      <br />
      <br />
      <BotonClase texto="Boton Clase" />

    </div>
  );
}

export default App;
