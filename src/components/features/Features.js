import React from 'react'
import FeatureImg from '../../assests/feature.png'
import './feature.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'
const Features = () => {
    return (
        <div className='flex h-screen featured-area p-10'>
            <div className='basis-0 grow' data-aos="fade-right" data-aos-duration="1500">
                <img src={FeatureImg} alt="" />
            </div>
            <div className='basis-0 grow p-10 text-white' data-aos="fade-left" data-aos-duration="1500">
                <div className='flex flex-col items-start' data-aos="zoom-in">
                    <h1 className='my-4 font-medium'>Powerful Digital security system</h1>
                    <p className='text-left'>You control your private encryption keys and you own your data. No outside company or third party can access or control your files, unlike traditional cloud storage providers.</p>
                </div>
                <div className='flex justify-between my-10' data-aos="fade-up" data-aos-duration="2000">
                    <ul className='grow basis-0'>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Lorem, ipsum.</li>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Lorem, ipsum.</li>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Lorem, ipsum.</li>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Lorem, ipsum.</li>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Lorem, ipsum.</li>
                    </ul>
                    <ul className='grow basis-0'>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Lorem, ipsum.</li>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Lorem, ipsum.</li>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Lorem, ipsum.</li>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Lorem, ipsum.</li>
                        <li className='flex my-2'><BsFillCheckCircleFill className='text-yellow-500 bg-black rounded-full border-0 text-xl mr-2' />Lorem, ipsum.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Features