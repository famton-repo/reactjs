import React from 'react'
import hero_img from '../../assets/cloth13.jpg'

import './Hero.css'
const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero_left'>
                <h2>Unleash product Clothing Quality</h2>
                <p>Whether your shop for corporation casual,wear,mens shirt, castimes and cloths dresses very comfortable daily and very beatiful look.</p>
                <button>Shop Our Collection</button>
            </div>
            <div className='hero_right'>
                <img src={hero_img} alt=" " />

            </div>
        </div>
    )
}

export default Hero