import React from 'react'
import { RiMenuLine } from "react-icons/ri"

const Navbar = () => {
  return (
  <nav className="absolute top-0 left-0 pt-10 w-full text-white z-20">
    <div className="container">
        <div className="flex justify-between items-center">
    
    {/* logo section */}
    <h1 className="text-2xl font-semibold uppercase">
        <span className="text-primary">Coders</span>Coffee.
    </h1>

    {/* Hamburger Menu section */}
    <div>
      <RiMenuLine className="text-3xl cursor-pointer" />
    </div>
  
  </div>
  </div>
  </nav>
  )
}

export default Navbar
