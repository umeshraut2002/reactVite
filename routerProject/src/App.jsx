import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Mainsection from './components/Mainsection';
import Footer from './components/Footer';

function App() {
  return(
  <>
    <Navbar />
    <Herosection />
    <Mainsection />
    <Footer />
  </>
  );
}

export default App
