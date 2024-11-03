import { useState } from 'react'
import './App.css'
import Info from './component/Info'
import UserContextProvider from './context/UserContextProvider'
import Update from './component/Update'
import Reset from './component/Reset'
import Show from './component/Show'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Info />
      <Update />
      <Reset />
      <Show />
    </UserContextProvider>
  )
}

export default App
