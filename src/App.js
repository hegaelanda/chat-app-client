import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState("NoFetch");
  useEffect(() => {
    fetch("http://localhost:9000/user")
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{data}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
