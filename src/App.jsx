import React from 'react'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero'
import Logos from './assets/components/logos'
import Manu from './assets/components/manu'
import Skilline from './assets/components/Skilline'
import Main from './assets/components/main'
import Footer from './assets/components/footer'
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