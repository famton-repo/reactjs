import React from "react"
import hero_image from '../../assets/cloth13.jpg'
import './Hero.css'

const Hero = () => {
    return (
        <div>
      
        <div className="hero">
          <div className="hero_left" >
            <h2>Unleash Premium Clothing Quality</h2>
         <p>Whether you want to shop for crporate wears, casual wear, mens wear,</p>
          <button>Shop Our Collections</button>
          </div>
          <div className="hero_right">
            <img src={hero_image} alt="" />
          </div>
        </div>
    
    </div>
    )
}
export default Hero