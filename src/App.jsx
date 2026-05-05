import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import HomePage from './Pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
    
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
