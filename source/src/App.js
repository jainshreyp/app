import logo from './logo.svg';
import { useState, useEffect, render } from "react"
import './App.css';

function App() {
  const [speed, setSpeed] = useState(20)
  useEffect(() => {
    <p className="text-white">Hello World</p>
  })
  function buttonClick() {
    setSpeed(speed-1)
    render()
  }
  return (
    <div className="App">
      <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css"/>
      <header className="App-header">
        <img src={logo} className="" style={{animation: `App-logo-spin infinite 20s linear`, height: "40vmin"}} alt="logo" />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <button onClick={buttonClick} className="w-48 h-24 bg-gray-100 text-black rounded-lg">Click me to spin faster</button>
      </header>
    </div>
  );
}

export default App;
