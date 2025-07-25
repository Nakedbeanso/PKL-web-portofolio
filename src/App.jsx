import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Profile from './Pages/Profile'
import Detail from './Pages/Detail'
import TechCard from './Pages/TechCard'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Profile></Profile>
      <Footer></Footer>


    </>
  )
}

export default App
