import React from 'react'
import '../styles/Sidebar.css'
function Sidebar() {
    return (
        <>
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact us</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/admin">Admin</a></li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;