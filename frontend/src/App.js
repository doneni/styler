import { useEffect } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

function App() {

  useEffect(() => {
    fetch('http://localhost:5000')
      .then(res => res.text())
      .then(data => console.log(data))
      .catch(err => console.error('Error connecting to backend:', err));
  }, []);
  

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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
