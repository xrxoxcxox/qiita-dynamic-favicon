import logo from './logo.svg';
import './App.css';
import { Helmet } from "react-helmet";

function App() {
  const string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  const random = string[Math.floor(Math.random()*string.length)]
  return (
    <div className="App">
      <Helmet>
        <link
          rel="icon"
          href={`
            data:image/svg+xml;
            utf8,
            <svg enable-background="new 0 0 16 16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <text font-family="'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" font-size="16" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
                ${random}
              </text>
            </svg>
          `}
        />
      </Helmet>
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
