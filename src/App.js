import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello my friend this is my first project 
        </a>
      </header>
      <p>
          Application version: 1.0
      </p>
    </div>
  );
}

export default App;
