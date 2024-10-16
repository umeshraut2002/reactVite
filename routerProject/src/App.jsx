import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Mainsection from './components/Mainsection';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return(
  <>
    <Navbar />
    <Herosection />
    <Mainsection />
    <Footer />
    <About />
  </>
  );
}

export default App
