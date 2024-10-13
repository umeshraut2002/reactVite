import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './componenets/Counter'
import Friends from './componenets/Friends'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <Friends />
    </>
  )
}

export default App
