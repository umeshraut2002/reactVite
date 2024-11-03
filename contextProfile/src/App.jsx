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
