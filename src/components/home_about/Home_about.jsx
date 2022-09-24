import React from 'react'
import './home_about.css'
import One from '../../assests/logo.webp'
import { BiLockAlt } from 'react-icons/bi'
import { GiCheckedShield } from 'react-icons/gi'
import { FaUserSecret } from 'react-icons/fa'
const Home_about = () => {
  return (
    <>
      <div className='grid grid-cols-3 gap-x-10 p-10 my-10 home-about h-screen place-items-center'>
        <div className="bg-blue-50 p-8 rounded-2xl shadow-md h-fit" data-aos="fade-right" data-aos-duration="2000">
          <div className="flex items-center justify-center">
            <BiLockAlt className='text-[100px]' />
          </div>
          <div className="bg-aliceblue-500 p-1 pt-4 pb-4">
            <h1 className='pb-2 font-medium'>Encrypted</h1>
            <p className='text-justify'>Each file is encrypted using the SHA-256 before being stored in the blockchain.</p>
          </div>
        </div>
        <div className="bg-blue-100 p-8 rounded-2xl shadow-md h-fit" data-aos="fade-up" data-aos-duration="2000">
          <div className="flex items-center justify-center">
            <GiCheckedShield className='text-[100px]' />
          </div>
          <div className="p-1 pt-4 pb-4">
            <h1 className='pb-2 font-medium'>Secure</h1>
            <p className='text-justify'>A privately maintained Blockchain ensures that youur data is always secure.</p>
          </div>
        </div>
        <div className="bg-blue-200 p-8 rounded-2xl shadow-md h-fit" data-aos="fade-left" data-aos-duration="2000">
          <div className="flex items-center justify-center">
            <FaUserSecret className='text-[100px]' />
          </div>
          <div className="p-1 py-2">
            <h1 className='pb-2 font-medium'>Confidential</h1>
            <p className='text-justify'>No outside company or third party can access or control your files, unlike traditional cloud storage providers.</p>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="rgba(14, 15, 20, 1)" fill-opacity="1" d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,69.3C1120,53,1280,43,1360,37.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
    </>
    // <div class="container">
    //   <div class="section">

    //     <div class="row">
    //       <div class="col s12 m4">
    //         <div class="icon-block" style={{textAlign: "center"}}>
    //           <BiLockAlt/>
    //           <h5 class="center">Encrypted</h5>

    //           <p class="">Each file is encrypted using the Advanced Encryption Standard(AES) before being
    //             stored in the blockchain.</p>
    //         </div>
    //       </div>

    //       <div class="col s12 m4">
    //         <div class="icon-block" style={{textAlign: "center"}}>
    //           <GiCheckedShield/>
    //           <h5 class="center">Secure</h5>

    //           <p class="">A privately maintained Blockchain ensures that youur data is always secure.</p>
    //         </div>
    //       </div>
    //       <div class="col s12 m4">
    //         <div class="icon-block" style={{textAlign: "center"}}>
    //           <FaUserSecret/>
    //           <h5 class="center">Confidential</h5>

    //           <p class="">You control your private encryption keys and you own your data. No outside
    //             company or third party can access or control your files, unlike traditional cloud storage
    //             providers.</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Home_about