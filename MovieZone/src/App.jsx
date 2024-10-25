import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/header/Header";
import Herosection from "./component/layout/Herosection";
import Main from "./component/layout/Main";
import Footer from "./component/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header />
    <Herosection />
    <Main />
    <Footer />
    </>
  );
}

export default App;
