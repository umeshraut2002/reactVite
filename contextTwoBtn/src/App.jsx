import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info from './component/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Info />
    </>
  )
}

export default App
