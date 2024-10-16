import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Catagary from './components/Catagary'
import TopRest from './components/TopRest'
import OnlineDelivery from './components/OnlineDelivery'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Catagary/>
      <TopRest/>
      <OnlineDelivery/>
      <Footer/>
    </div>
  )
}

export default App
