import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Maincontent from './components/Maincontent'
import Massage from './components/Massage'
import Greeting from './components/greeting'
import ProductList from './components/ProductList'
import ListComponent from './components/ListsComponent'
import ArrayComponent from './components/ArrayComponent'

function App() {

  return (
    <>
    <Navbar />
    <Massage />
    <Greeting />
    <ProductList />
    <ListComponent />
    <Maincontent />
    <ArrayComponent />
    <Footer />
    </>
  )
}

export default App
