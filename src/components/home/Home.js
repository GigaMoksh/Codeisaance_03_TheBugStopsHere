import React from "react";
import Home_hero from "../home_hero/Home_hero";
import Home_about from "../home_about/Home_about";
import CTA from "../cta/CTA";
import Footer from "../footer/Footer";
import Header from "../header/Header";
const Home = () => {
  return (
    <div>
      <Header />
      <Home_hero />
      <Home_about />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
