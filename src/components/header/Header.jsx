import React from 'react'
import './header.css'
const Header = () => {
  return (
    <header>
        <h1 className="logo">PIXO Inc.</h1>
        <nav className="navbar">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header