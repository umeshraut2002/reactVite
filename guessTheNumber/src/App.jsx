import { useState } from 'react'
import './App.css'
import Main from './component/Main'
import Random from './component/Random'
import Logic from './component/Logic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Main />
    <Random />
    <Logic />
    </>
  )
}

export default App
