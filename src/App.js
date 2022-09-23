import React from 'react'
import Header from './components/header/Header'
import Home_hero from './components/home_hero/Home_hero'
import Home_about from './components/home_about/Home_about'
import Portfolio from './components/portfolio/Portfolio'
import CTA from './components/cta/CTA'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <div>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home_hero/>} />
        <Route exact path="/login" element={<h1>vaibhav</h1>}/>
        <Route exact path="/recovery-password" element={<h1>Login</h1>}/>
        <Route path="*" element={<h1>Login</h1>}/>
      </Routes>
      <Footer/>
    </div>
  </Router>
      
 
    

  )
}

export default App