import React from 'react'
import FeatureImg from '../../assests/feature.png'
import './feature.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'
const Features = () => {
    return (
        <div className='flex h-screen featured-area p-10' id='explore'>
            <div className='basis-0 grow' data-aos="fade-right" data-aos-duration="1500">
                <img src={FeatureImg} alt="" />
            </div>
            <div className='basis-0 grow p-10 text-white' data-aos="fade-left" data-aos-duration="1500">
                <div className='flex flex-col items-start' data-aos="zoom-in">
                    <h1 className='my-4 font-medium'>Secure your Digital Documents</h1>
                    <p className='text-left'>You control your own documents and upload them to get verified by the government. After verifying, you can 
                    share those documents to any of agencies needed without the need of the agency logging in.</p>
                </div>
                <div className='flex justify-between my-10' data-aos="fade-up" data-aos-duration="2000">
                    <ul className='grow basis-0'>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Decentralized Database</li>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Consent access</li>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />No need of hard copy certificates</li>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Easy to use</li>
                        { /* <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Lorem, ipsum.</li> */}
                    </ul>
                    <ul className='grow basis-0'>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Secured Smart Contracts</li>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Data is private</li>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Information stored in Blockchain</li>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Accessibility</li>
                        {/* {<li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Lorem, ipsum.</li> */} 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Features