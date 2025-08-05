import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Manu from './components/Manu'
import Skilline from './components/Skilline'
import Main from './components/Main'
import Footer from './components/footer'
const App = () => {
  return (
    <div>
      <header className='header'>
        <Navbar/>
        <Hero/>
      </header>
        <Logos/>
        <Manu/>
        <Skilline/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default App