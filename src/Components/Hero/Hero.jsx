import React from 'react'
import hero_img from '../../assets/cloth13.jpg'
import './Hero.css'
const Hero = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero_left">
                    <h2>Unleash Premium Clothing Quality</h2>
                    <p>Whether you want to shop for corporate wears, casual wear, mens wear, or kiddies clothing,we have comfortable clothes to elevate everyday look</p>
                    <button>Shop Our Collection</button>
                </div>
                <div className="hero_right">
                    <img src={hero_img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero