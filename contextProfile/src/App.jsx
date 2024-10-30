import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserContext } from './context/UserContext'
import Profile from './component/Profile'
import Update from './component/Update'
import Reset from './component/Reset'

function App() {
  return (
    <>      
    <UserContext>
      <Profile />
      <Update />
      <Reset />
    </UserContext>        
    </>
  )
}

export default App
