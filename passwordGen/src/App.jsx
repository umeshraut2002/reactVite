import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowCHar, setAlloCHar] = useState(false);
  const [password, setPassword] = useState("");

  // CallBAck Function

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (allowNumber) str += "012346789";
    if (allowCHar) str += "!@#$%^&*()_+{}[]<>,?/|=';:`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [length, allowNumber, allowCHar, setPassword]);

  return (
    <>
      <div className="w-full max-w-lg mx-cd auto shadow-lg rounded-lg px-6 py-8 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center text-2xl font-semibold mb-6">
          Password Generator
        </h1>

        <div className="flex items-center shadow-inner rounded-lg overflow-hidden mb-6 bg-gray-600">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 text-white bg-gray-600 placeholder-gray-400"
            placeholder="Your password"
            readOnly
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-none">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
        <input 
        type="range"
        min={8}
        max={50}
        value={length}
        className= 'cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
        </div>

        <div className="flex text-sm gap-x-1">
        <input 
          type="checkbox"
          defaultChecked={allowNumber}
          id="NumberInput"
          onChange={() => {
            setAllowNumber((prev) => !prev);
            }}
        />
        <lable>Number: {allowNumber}</lable>
        </div>


        <div className="flex text-sm gap-x-1">
        <input 
          type="checkbox"
          defaultChecked={allowCHar}
          id="CharInput"
          onChange={() => {setAlloCHar((prev) => !prev);
          }}
        />
        <lable>Character: {allowCHar}</lable>
        </div>

        </div>

      </div>
    </>
  );
}

export default App;
