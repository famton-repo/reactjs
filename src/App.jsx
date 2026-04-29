import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Homepage from './Pages/Homepage/Homepage'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cart from './Components/Cart/Cart'
import { Routes, Route } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
const App = () => {
  return (
    <div>
      <Navbar />



      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App