import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Maincontent from './components/Maincontent'
import Massage from './components/Massage'
import Greeting from './components/greeting'
import ProductList from './components/ProductList'
import ListComponent from './components/ListsComponent'
import ArrayComponent from './components/ArrayComponent'
import Person from './components/Person'
import Infos from './components/Infos'

function App() {

  return (
    <>
    <Navbar />
    <Massage />
    <Greeting />
    <Infos />
    <ProductList />
    <ListComponent />
    <Maincontent />
    <ArrayComponent />
    <Person />
    <Footer />
    </>
  )
}

export default App
