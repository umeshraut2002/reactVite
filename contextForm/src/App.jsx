import './App.css'
import Detail from './component/Detail'
import Screen from './component/Screen'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return(
    <UserContextProvider>
      <Detail />
      <Screen />
    </UserContextProvider>
  );
}

export default App;
