import React from 'react'
import Home_hero from '../home_hero/Home_hero'
import Home_about from '../home_about/Home_about'
import CTA from '../cta/CTA'
const Home = () => {
  return (
    <div>
        <Home_hero />
        <Home_about />
        <CTA />
    </div>
  )
}

export default Home