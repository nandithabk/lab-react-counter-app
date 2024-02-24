import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter App</h1>
      <div>
        <h1>{count}</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
        <button onClick={() => setCount((count) => 0)}>
          Reset
        </button>
      </div>

    </>
  )
}

export default App