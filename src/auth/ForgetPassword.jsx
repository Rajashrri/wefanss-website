import React from 'react'
import Sidebox from '../component/authcomponent/Sidebox'
import Loginform from '../component/authcomponent/Login'
import ForgetPasswordForm from '../component/authcomponent/ForgetPasswordForm'


const ForgetPassword = () => {
  return (
    <>
        <div className="min-h-screen grid grid-cols-12 p-4 bg-white relative">
             <img src="/authbg.jpg" className='absolute z-0 top-0 w-full left-0 h-full object-cover ' alt="" />
            <Sidebox/>
            <ForgetPasswordForm/>       
        </div>
    </>
  )
}

export default ForgetPassword