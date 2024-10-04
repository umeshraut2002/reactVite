import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Maincontent from './components/Maincontent'
import Massage from './components/Massage'
import Greeting from './components/greeting'
import ProductList from './components/ProductList'

function App() {

  return (
    <>
    <Navbar />
    <Massage />
    <Greeting />
    <ProductList />
    <Maincontent />
    <Footer />
    </>
  )
}

export default App
