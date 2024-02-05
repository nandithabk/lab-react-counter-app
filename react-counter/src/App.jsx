import { useState } from "react";
import React from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const subtract = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="container">
        <h2>Counter App</h2>
        <div id="counter">{count}</div>
        <div className="buttons">
          <button id="add" onClick={add}>
            +
          </button>
          <button id="subtract" onClick={subtract}>
            -
          </button>
          <button id="reset" onClick={reset}>
            reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;