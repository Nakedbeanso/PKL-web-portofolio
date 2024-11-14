import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Profile from './Components/Profile'
import Detail from './Components/Detail'
import Experience from './Components/Experience'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Profile></Profile>
      <Detail></Detail>
      <Experience></Experience>


    </>
  )
}

export default App
