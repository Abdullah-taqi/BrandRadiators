import React from 'react'
import "../styles/HeroSection.css"
import background from "../assets/background.jpg"

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <img className='bg-img' src={background} alt="bg" />
      <div className="hero-text">
        <h1>Shop The <span>BEST</span></h1>
        <button className='shop-btn'>Shop Now</button>
      </div>
    </div>
  )
}

export default HeroSection
