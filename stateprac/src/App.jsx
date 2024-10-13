import { useState } from 'react'
import './App.css'
import Counter from './componenets/Counter'
import Friends from './componenets/Friends'
import Movies from './componenets/Movies'
import ComponentOne from './componenets/ComponentOne'
import ComponentTwo from './componenets/ComponentTwo'
import ToDoList from './componenets/ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <Friends />
      <Movies />
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count + 2)} />
      <ToDoList />
    </>
  )
}

export default App
