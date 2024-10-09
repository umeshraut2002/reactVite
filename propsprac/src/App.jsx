import { useState } from 'react'
import './App.css'
import Product from './components/Product'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <img src='https://m.media-amazon.com/images/I/711lqT8hoCL._AC_UY218_.jpg'></img>
      {/* <person name="Umesh Raut" age={23} /> */}
      <Product name="Asus Tuf a17" price={120000} />
      </div>

      <Card>
        <h1>My Card</h1>
        <p>My Card Is Cools Guys... </p>
      </Card>
    </>
  )
}

export default App
