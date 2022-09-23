import React from 'react'
import './home_about.css'
import One from '../../assests/logo.webp'
import { BiLockAlt } from 'react-icons/bi'
import { GiCheckedShield } from 'react-icons/gi'
import { FaUserSecret } from 'react-icons/fa'
const Home_about = () => {
  return (
    <div className='grid grid-cols-3 gap-x-10 p-10'>
      <div className="bg-blue-50 p-4">
        <div className="flex items-center justify-center">
          <BiLockAlt className='text-[115px]'/>
        </div>
        <div className="bg-aliceblue-500 p-1 pt-4 pb-4">
          <h1 className='pb-2 font-medium'>Encrypted</h1>
          <p className='text-justify'>Each file is encrypted using the Advanced Encryption Standard(AES) before being stored in the blockchain.</p>
        </div>
      </div>
      <div className="bg-blue-100 p-4">
        <div className="flex items-center justify-center">
          <GiCheckedShield className='text-[115px]'/>
        </div>
        <div className="p-1 pt-4 pb-4">
          <h1 className='pb-2 font-medium'>Secure</h1>
          <p className='text-justify'>A privately maintained Blockchain ensures that youur data is always secure.</p>
        </div>
      </div>
      <div className="bg-blue-200 p-4">
        <div className="flex items-center justify-center">
          <FaUserSecret className='text-[115px]'/>
        </div>
        <div className="p-1 pt-4 pb-4">
          <h1 className='pb-2 font-medium'>Confidential</h1>
          <p className='text-justify'>You control your private encryption keys and you own your data. No outside company or third party can access or control your files, unlike traditional cloud storage providers.</p>
        </div>
      </div>
    </div>
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