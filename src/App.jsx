import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import i18n from './i18n';
import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Notes from './pages/NotesPage';
import Reviews from './pages/ReviewsPage';
import NewProducts from './pages/NewProducts';
import AllBooks from './pages/AllBooks';

import "./i18n"; 

function App() {
  const [language, setLanguage] = useState(i18n.language || 'en');

  useEffect(() => {
    const handleChange = (lng) => setLanguage(lng);
    i18n.on('languageChanged', handleChange);
    return () => i18n.off('languageChanged', handleChange);
  }, []);

  return (
    <Router>

      <Header language={language} />

      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/new-products" element={<NewProducts />} />
        <Route path="/all-books" element={<AllBooks />} />
      </Routes>

      <Footer language={language} />

    </Router>
  );
}

export default App;
