import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello la piscine</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dans mon monde a moi il n'ya que des poneys, ils mangent des arc-en-ciel et ils font des cacas papillons
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clique pour avoir un poney
        </a>
      </header>
    </div>
  );
}

export default App;
