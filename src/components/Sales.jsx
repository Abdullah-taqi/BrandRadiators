import React from 'react'
import salesimg from "../assets/banner-img.png"
import '../styles/Sales.css'

const Sales = () => {
  return (
    <div className='sales'>
      <div className="sales-text">
        <h1>SALES</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere ipsam <br /> nesciunt veniam vero fugit doloribus assumenda.</p>
        <div className="sales-btn">
            <button className='read-btn'>READ MORE</button>
            <button className='btn'>SHOP NOW</button>
        </div>
      </div>
      <div className="sales-img">
        <img src={salesimg} alt="sales" />
      </div>
    </div>
  )
}

export default Sales
