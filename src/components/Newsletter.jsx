import React from 'react'
import "../styles/Newsletter.css"

const Newsletter = () => {
  return (
    <div className='newsletter'>
      {/* <img className='newsletter-bg' src={newsletter} alt="newsletter" /> */}
      <div className="newsletter-text">
      <p>NEWSLETTER</p>
      <h2>SIGN UP FOR LATEST UPDATES AND OFFERS</h2>
      <div className="email-div">
        <input type="text" placeholder='Enter Email'/>
        <button>Subscribe</button>
      </div>
      <p>Will be used in accordance with Privacy Policy</p>
      </div>
    </div>
  )
}

export default Newsletter
