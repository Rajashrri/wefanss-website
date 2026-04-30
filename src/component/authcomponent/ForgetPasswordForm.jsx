import React from 'react'
import FormHeading from './FormHeading'
import { Link } from 'react-router-dom'
import Authbtn from './Authbtn'

const ForgetPasswordForm = () => {
  return (
    <div className='md:col-span-6 col-span-12 relative flex justify-center items-center rounded-[16px] md:px-[80px] px-[0px] overflow-hidden'>
        <div className="bg-[#fff] p-10 rounded-[16px] text-center w-full md:my-[150px] my-[90px]">
            <FormHeading title="Forgot Password"/>
            <form className='mt-6'>
                <div className="flex flex-col text-left">
                    <label className='dm-sans text-[16px] text-[#374151] font-[600] mb-2'>Email Address</label> 
                    <input type="text" placeholder='abc@gmail.com' className='border-[#D9D9D9] border bg-[#F9FAFB] rounded-[8px] p-3 focus:outline-none'/>
                </div>
               
                <div>
                    <Authbtn href="/otp" btntext="Send OTP" className='mt-8'/>
                    
                </div>

            </form>
        </div>

    </div>
  )
}

export default ForgetPasswordForm