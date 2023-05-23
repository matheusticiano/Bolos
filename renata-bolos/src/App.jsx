import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Sobre from './components/Sobre';
import Bolos from './components/Bolos';

function App() {

  return (
    <>
      <Header/>
      <div className='app'>
        <Home/>
        <Sobre/>
        <Bolos/>
      </div>
      <Footer/>
    </>
  )
}

export default App
