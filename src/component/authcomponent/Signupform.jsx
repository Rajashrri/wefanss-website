import React from 'react'
import FormHeading from './FormHeading'
import { Link } from 'react-router-dom'
import Authbtn from './Authbtn'

const Signupform = () => {
  return (
    <div className='md:col-span-6 col-span-12 relative flex justify-center items-center rounded-[16px] md:px-[80px] px-[0px] overflow-hidden'>
        <div className="bg-[#fff] p-10 rounded-[16px] text-center w-full md:my-[150px] my-[40px]">
            <FormHeading title="Register"/>
            <form className='mt-6'>
                 <div className="flex flex-col text-left">
                    <label className='dm-sans text-[16px] text-[#374151] font-[600] mb-2'>Name</label> 
                    <input type="text" placeholder='Johne Doe' className='border-[#D9D9D9] border bg-[#F9FAFB] rounded-[8px] p-3 focus:outline-none'/>
                </div>
                <div className="flex flex-col text-left mt-6">
                    <label className='dm-sans text-[16px] text-[#374151] font-[600] mb-2'>Email Address</label> 
                    <input type="text" placeholder='abc@gmail.com' className='border-[#D9D9D9] border bg-[#F9FAFB] rounded-[8px] p-3 focus:outline-none'/>
                </div>
                <div className="flex flex-col text-left mt-6">
                    <label className='dm-sans text-[16px] text-[#374151] font-[600] mb-2'>Password</label> 
                    <input type="text" placeholder='abc3@#' className='border-[#D9D9D9] border bg-[#F9FAFB] rounded-[8px] p-3 focus:outline-none'/>
                </div>
                   <div className="flex flex-col text-left mt-6">
                    <label className='dm-sans text-[16px] text-[#374151] font-[600] mb-2'>Confirm Password</label> 
                    <input type="text" placeholder='abc3@#' className='border-[#D9D9D9] border bg-[#F9FAFB] rounded-[8px] p-3 focus:outline-none'/>
                </div>
           
                <div>
                    <Authbtn btntext="Register" className='mt-8'/>
                     <div className='flex justify-center items-center gap-3 mt-8'>
                        <Link className='primary-font text-[#6B7280] text-[14px] font-[400] flex justify-center gap-1'>Already have an account?</Link>
                        <Link to="/login" className='primary-font text-[#0F4F72] text-[14px] font-[500]'>Login</Link>
                    </div>
                      <Link className={`h-[72px] mt-8 flex gap-2 justify-center berlin items-center bg-[#F9FAFB] text-[#ADAEBC] text-[24px] rounded-[8px] `}>
                                        Login with Google
                                        <img src="/google.svg" alt="" />
                     
                                        </Link>
                   
                </div>

            </form>
        </div>

    </div>
  )
}

export default Signupform