import './App.css';
import { MiContexto } from './componentes/MiContexto';
import { useState } from 'react';

function App(props) {
  const [trago, setTrago] = useState("");
  const estado = {
    trago,
    setTrago
  };

  return (
    <MiContexto.Provider value={estado}>
      <div className="App">
        {props.children}
      </div>
    </MiContexto.Provider>

  );
}

export default App;
