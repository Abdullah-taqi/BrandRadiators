import React, { useState } from 'react'
import '../styles/Header.css'
import logo from '../assets/logo.png'
import Sidebar from './Sidebar';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
    const handleSidebarToggle = () => {
      setShowSidebar(!showSidebar);
    };

  return (
    <>
      <header className='header'>
        <div className="logo-div">
          <img className='logo-img' src={logo} alt="" srcset="" />
        </div>
        <div className="hamburger-icon" onClick={handleSidebarToggle}>
          <span className='dash'></span>
          <span className='dash'></span>
          <span className='dash'></span>
        </div>
      </header>
        {/* <img className='bg-img' src={background} alt="bg" /> */}
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
          <Sidebar/>
      </div>
    </>
  )
}

export default Header
