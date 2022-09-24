import React from 'react'
import AnimatedText from 'react-animated-text-content';
import ShapeBG from '../../assests/shape-bg.png'
import Eth from '../../assests/ethereum-img.png'
import Orbe from '../../assests/orbe-img.png'
import './home_hero.css'
const Home_hero = () => {

    return (
        // <section className="home-hero parallax-effect">
        //   <div className="container">
        //     <h1 className="title">DigiSec
        //     <span className=''>A Decentralized Certificate Issuance and Verification System to create certificates that are Immutable, Cryptographically Secured, and have Zero Downtime. All powered by decentralized Ethereum Smart Contracts.</span>
        //     </h1>

        //     <a href="#" className="button button-accent go_up">SEE OUR WORK</a>
        //   </div>
        // </section>
        <section class="home relative">
            {/* <img src={ShapeBG} alt="" class="home__shape-bg"/>     */}
            <div class="home__container">
                <div class="home__info">
                    <h1 class="home__title">
                        <span>DigiSec</span><br />
                        collect, and <br />
                    </h1>
                    <p class="home__desc mb-4">A Decentralized Certificate Issuance and Verification System to create certificates that are Immutable,Cryptographically Secured, and have Zero Downtime. All powered by decentralized Ethereum Smart Contracts.
                    </p>
                    <a href="#" class="home__button">Explore</a>
                </div>

                <div class="home__group">
                    <div class="home__images">
                        <div class="home__img-eth">
                            <img src={Eth} alt="" />
                        </div>
                        <div class="home__img-orbe">
                            <img src={Orbe} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute'>
                <path fill="#2b2537" fill-opacity="1" d="M0,160L40,181.3C80,203,160,245,240,234.7C320,224,400,160,480,149.3C560,139,640,181,720,192C800,203,880,181,960,192C1040,203,1120,245,1200,240C1280,235,1360,181,1400,154.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#2b2537" fill-opacity="1" d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,69.3C1120,53,1280,43,1360,37.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
        </section>
    )
}

export default Home_hero