import logo from './logo.svg';
import './App.css';

function App() {
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
          {[1, 2, 3, 4].map((e) => console.log(e)).map((e) => e + 4).filter((e) => e > 5).map((e) => console.log(e + 4))}
          {[1, 2, 3, 4].map((e) => console.log(e)).map((e) => e + 4).filter((e) => e > 5).map((e) => console.log(e + 4))}
        </a>
      </header>
    </div>
  );
}

export default App;
