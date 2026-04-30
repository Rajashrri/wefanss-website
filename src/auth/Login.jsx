import React from 'react'
import Sidebox from '../component/authcomponent/Sidebox'
import ForgetPasswordForm from '../component/authcomponent/ForgetPasswordForm'
import Loginform from '../component/authcomponent/Login'


const Login = () => {
  return (
    <>
        <div className="min-h-screen grid grid-cols-12 p-4 bg-white relative">
             <img src="/authbg.jpg" className='absolute z-0 top-0 w-full left-0 h-full object-cover ' alt="" />
            <Sidebox/>
            <Loginform/>       
        </div>
    </>
  )
}

export default Login