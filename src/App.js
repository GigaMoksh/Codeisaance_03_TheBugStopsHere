import React from 'react'
import Header from './components/header/Header'
import Home_hero from './components/home_hero/Home_hero'
import Home_about from './components/home_about/Home_about'
import Portfolio from './components/portfolio/Portfolio'
import CTA from './components/cta/CTA'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
      <Header/>
      <Home_hero/>
      <Home_about/>
      <Portfolio/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default App