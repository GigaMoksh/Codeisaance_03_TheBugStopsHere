import React from 'react'
import AnimatedText from 'react-animated-text-content';

import './home_hero.css'
const Home_hero = () => {

  return (
    <section className="home-hero parallax-effect">
      <div className="container">
        <h1 className="title">DigiSec
        <span className=''>A Decentralized Certificate Issuance and Verification System to create certificates that are Immutable, Cryptographically Secured, and have Zero Downtime. All powered by decentralized Ethereum Smart Contracts.</span>
        </h1>

        <a href="#" className="button button-accent go_up">SEE OUR WORK</a>
      </div>
    </section>
  )
}

export default Home_hero