import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './componenets/Weather'
import UserStatus from './componenets/UserStatus'
import Greeting from './componenets/Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Weather tempreture={(Math.floor(Math.random() * 100) + 1)}/>
    <UserStatus isLoggedIn={true} isAdmin={false}/>
    <Greeting timeOfDay={"morning"} />
    </>
  )
}

export default App
