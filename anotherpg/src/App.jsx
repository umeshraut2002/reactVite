import { useState, useCallback , useEffect, useRef} from "react";
import "./App.css";

function App() {

  //  lets create a state first 

  const [length, setLength] =useState(8);
  const [numbers, allowNumbers] = useState(false);
  const [uppercases, allowUppercase] = useState(false);
  const [symbol, allowSymbol] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef()

  const passGenenrator = useCallback(() => {
    let pass ="";
    let str = "abcdefghijklmnopqrstuvwxyz";

    if(numbers){
      str += "0123456789";
    }

    if(uppercases){
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(symbol){
      str += "~!@#$%^&*()_+{}|:?/<>";
    }

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char)
    }

    setPassword(pass);

  },[length, numbers, uppercases, symbol, setPassword]);

  const passCopy = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    passGenenrator();
  }, [length, numbers, uppercases, symbol, setPassword])

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
          {/* <!-- Password Length Input --> */}
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-400"
              htmlFor="passwordLength"
            >
              Password Length
            </label>
            <input
              id="passwordLength"
              type="range"
              min="8"
              max="50"
              placeholder="8"
              value={length}
              className=" cursor-pointer mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-200 placeholder-gray-500 sm:text-sm"
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          {/* <!-- Checkboxes for Options --> */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked = {uppercases}
                id="uppercase"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 bg-gray-700 border-gray-600 rounded"
                onChange ={() =>{
                  allowUppercase((prev) => !prev);
                }}
              />
              <label
                className="ml-2 block text-sm text-gray-400"
                htmlFor="uppercase"
              >
                Uppercase
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="numbers"
                checked = {numbers}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 bg-gray-700 border-gray-600 rounded"
                onChange={()=> {
                  allowNumbers((prev)=> !prev)
                }}
              />
              <label
                className="ml-2 block text-sm text-gray-400"
                htmlFor="numbers"
              >
                Numbers
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="symbols"
                checked = {symbol}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 bg-gray-700 border-gray-600 rounded"
                onChange={() => {
                  allowSymbol((prev) => !prev) 
                }}
              />
              <label
                className="ml-2 block text-sm text-gray-400"
                htmlFor="symbols"
              >
                Symbols
              </label>
            </div>
          </div>

          <div className="mt-6">
            <button onClick={passGenenrator} className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Generate Password
            </button>
          </div>

          {/* <!-- Display Generated Password --> */}
          <div className="mt-6">
            <input
              type="text"
              value={password}
              placeholder="Generated password will appear here"
              readOnly
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-200 placeholder-gray-500 sm:text-sm"
            />
          </div>

          {/* <!-- Copy to Clipboard Button --> */}
          <div className="mt-4">
            <button onClick={passCopy} className="w-full px-4 py-2 bg-green-500 text-white font-medium rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
              Copy to Clipboard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
