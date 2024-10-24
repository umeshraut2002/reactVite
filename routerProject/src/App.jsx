import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Mainsection from './components/Mainsection';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Github from './components/Github';
import User from './components/User';

function App() {
  return(
  <>
    <Navbar />
    <Herosection />
    <Mainsection />
    <Footer />
    <About />
    <Contact />
    <Github />
    <User />
  </>
  );
}

export default App
