import logo from './logo.svg';
import './App.css';
const axios = require('axios').default; 

function App() {
  axios.get('https://superheroapi.com/api/2228356823962414') 
  .then((res) => {console.log(res)})
  .catch((err) => {console.log(err)})
  .then(() => {console.log('esto siempre se va ejecutar')})
  return (
    <div className="App">
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
          Learn Programming
        </a>
      </header>
    </div>
  );
}

export default App;
