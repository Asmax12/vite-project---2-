import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Home from './pages/Home'
import Notes from './pages/NotesPage'
import Reviews from './pages/ReviewsPage'
import NewProducts from './pages/NewProducts'
import AllBooks from './pages/AllBooks'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/new-products" element={<NewProducts />} />
        <Route path="/all-books" element={<AllBooks />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
