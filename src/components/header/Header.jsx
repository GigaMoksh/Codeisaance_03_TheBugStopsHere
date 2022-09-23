import React from 'react'
import './header.css'
import { ConnectButton } from 'web3uikit'
const Header = () => {
  return (
    <header>
        <h1 className="logo">DigiSec</h1>
        <nav className="navbar">
            {/* <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul> */}
            <ConnectButton/>
        </nav>
    </header>
  )
}

export default Header