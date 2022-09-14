import logo from './logo.svg';
import './App.css';
import Cabecera from './componentes/Cabecera'; //ruta relativa lo va a buscar en las carpetas


function App() {
  return (
    <div className="App">
      <Cabecera></Cabecera>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
