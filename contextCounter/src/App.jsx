import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context/CountContext'
import Decrement from './component/Decrement'
import Increament from './component/Increament'
import Squared from './component/Squared'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CountContext.Provider value={{count, setCount}}>
    <Increament />
    <Decrement />
    <Squared />
    <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </CountContext.Provider>
    </>
  )
}

export default App
