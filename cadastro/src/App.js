import './App.css';
import sespa from './img/sespa.jpeg'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'>
          <img src={sespa} alt='logo da sespa' width='400px'></img>
          <h1>Cadastro de Servidores</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
