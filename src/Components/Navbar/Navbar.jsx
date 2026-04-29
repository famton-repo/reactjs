import React from 'react'
import { BiCart, BiUser } from 'react-icons/bi'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='logo'>
          <h2>ohKelly</h2>
        </div>
        <div className='link'>
          <ul>
            <li>HOME</li>
            <li>PRODUCTS</li>
            <li>CONTACT</li>
            <li>APP</li>
          </ul>
        </div>

        <div className='nav_icon_wrapper'>
          <Link to='/cart'>
            <div className='nav_cart'>
              <BiCart className='nav_icon' />
              <p className='cart_qty'>0</p>
            </div>
          </Link>
          <BiUser className='nav_icon' />
        </div>
      </div>
    </div>
  )
}

export default Navbar