import React from 'react'
import Home_hero from '../home_hero/Home_hero'
import Home_about from '../home_about/Home_about'
import CTA from '../cta/CTA'
import Footer from '../footer/Footer'
const Home = () => {
  return (
    <div>
        <Home_hero />
        <Home_about />
        <CTA />
        <Footer/>
    </div>
  )
}

export default Home