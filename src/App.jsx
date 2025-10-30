import { useState } from 'react'
import './App.css'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Contact from './components/3-contact/Contact'
import Footer from './components/4-footer/Footer'
function App() {

  return (
    <div>
     <Header/>
     <Hero/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
