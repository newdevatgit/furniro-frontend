import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'
import Navbar from './components/NavBar.jsx'
import ShopPage from './pages/Shop.jsx';
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShopPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
