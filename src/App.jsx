import { useState } from 'react'


import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageCarousel from './Component/Home/ImageCarousel';
import Fertilizer from './Component/Fertilizer'
import GreenSaplings from './Component/GreenSaplings'
import FlowerSapling from './Component/FlowerSapling'
import Coconut from './Component/Coconut'
import FruitSapling from './Component/FruitSapling'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Ensures full height */}
        <Navbar />
        <main className="flex-grow"> {/* Pushes footer to bottom */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/carousel' element={<ImageCarousel />} />
            <Route path='/coconut' element={<Coconut />} />
            <Route path='/fertilizer' element={<Fertilizer />} />
            <Route path='/green_saplings' element={<GreenSaplings />} />
            <Route path='/flower_sapling' element={<FlowerSapling />} />
            <Route path='/fruit_sapling' element={<FruitSapling />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

