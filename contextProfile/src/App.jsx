import { useState } from i'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'
import Update from './component/Update'


function App() {
  return ( 
    <UserContextProvider>
      <Profile />
      <Update />
    </UserContextProvider>        
  )
}

export default App
