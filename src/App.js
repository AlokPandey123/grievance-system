import logo from './logo.svg';
import './App.css';
import Home from './Comp/Home';
import Navbar from './Comp/Navbar';
function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
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
