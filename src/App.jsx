import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Profile from './Pages/Profile'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Profile></Profile>
      <About></About>
      <Skills></Skills>
      <Footer></Footer>


    </>
  )
}

export default App
