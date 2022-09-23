import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const VerifyDocument = () => {
    const [hashdata, setHashData] = useState('');


    const userId=123;
    const tocken ="hello"

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <form class="w-1/2 justify-center p-10" method="POST" action={`verify/${hashdata}`} >
                <div className=" flex flex-col bg-cyan-100 p-12">

                    <label class="block text-gray-700 text-md font-bold mb-4" for="hash">
                        Enter Hash here to Check Status of PDF
                    </label>

                    <input id='hashcode' onChange={event => setHashData(event.target.value)} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Hash here...." />
                    
                    <div class="">
                        <Link to={`/verify/?userId=${userId}&tocken=${tocken}`} type='submit' class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" value="verify">Get Verified</Link>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default VerifyDocument