import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      {/* <div className="absflex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl"> */}
          <button onClick={() => setColor("red")} className="bg-red-700 m-2 rounded-3xl text-white px-4 py-2">Red</button>
          <button onClick={() => setColor("blue")} className="bg-blue-900 m-2 rounded-3xl text-white px-4 py-2">Blue</button>
          <button onClick={() => setColor("black")} className="bg-black m-2 text-white rounded-3xl px-4 py-2">Black</button>
          <button onClick={() => setColor("cyan")} className="bg-cyan-700 m-2 text-white rounded-3xl px-4 py-2">Cyan</button>
          <button onClick={() => setColor("yellow")} className="bg-yellow-400 m-2 text-black rounded-3xl px-4 py-2">Yellow</button>
          <button onClick={() => setColor("green")} className="bg-green-900 m-2 text-white rounded-3xl px-4 py-2">Green</button>
          <button onClick={() => setColor("purple")} className="bg-purple-400 m-2 text-white rounded-3xl px-4 py-2">Purple</button>
          <button onClick={() => setColor("white")} className="bg-white m-2 text-black rounded-3xl px-4 py-2 border">White</button>
          <button onClick={() => setColor("pink")} className="bg-pink-700 m-2 text-white rounded-3xl px-4 py-2">Pink</button>
        </div>
      {/* </div> */}
    {/* </div> */}
    </>
  )
}

export default App
