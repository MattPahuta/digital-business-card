import { useState } from 'react'

import './App.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Info />
      <About />
      <Interests />
      <Footer />
    </>
  )
}

export default App
