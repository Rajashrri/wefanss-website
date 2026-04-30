import React from 'react'
import Sidebox from '../component/authcomponent/Sidebox'
import Signupform from '../component/authcomponent/Signupform'


const Singup = () => {
  return (
    <>
        <div className="min-h-screen grid grid-cols-12 p-4 bg-white relative">
             <img src="/authbg.jpg" className='absolute z-0 top-0 w-full left-0 h-full object-cover ' alt="" />
            <Sidebox/>
            <Signupform/>       
        </div>
    </>
  )
}

export default Singup