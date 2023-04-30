import React from 'react';
import "../styles/Footer.css"
import { FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import payments from "../assets/payments.png"

const Footer = () => {
  return (
    <div className="footer-container">
        <div className='footer'>
        <div className="about-footer footer-item">
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur odio blanditiis earum error fugit similique vitae ea fugiat sequi magni?Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, consequuntur.</p>
        </div>
        <div className="contact footer-item">
            <h3>Contact</h3>
            <div className="c-item">
                <FaLocationArrow/>
                <p>H.no.: 41 Sheikhpuri, Roorkee, Uttarakhand - 247667</p>
            </div>
            <div className="c-item">
                <FaMobileAlt/>
                <p>Phone: +91-8077470278</p>
            </div>
            <div className="c-item">
                <FaEnvelope/>
                <p>Email: ataqi99@gmail.com</p>
            </div>
        </div>
        <div className="categories footer-item">
            <h3>Categories</h3>
            <p className='cat-item'>Headphones</p>
            <p className='cat-item'>Speakers</p>
            <p className='cat-item'>Bluetooth</p>
            <p className='cat-item'>Earphones</p>
        </div>
        <div className="pages footer-item">
            <h3>Pages</h3>
            <p className='pages-item'>Home</p>
            <p className='pages-item'>About</p>
            <p className='pages-item'>Contact</p>
            <p className='pages-item'>Admin</p>
        </div>
        </div>
        <hr />
        <div className="base-footer">
            <p>STORE 2023 CREATED BY ABDULLAH TAQI | ECOMMERCE SOLUTIONS</p>
            <img src={payments} alt="payments" />
        </div>
    </div>
  )
}

export default Footer
