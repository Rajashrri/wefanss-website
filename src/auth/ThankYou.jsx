import React from 'react'
import Authbtn from '../component/authcomponent/Authbtn'

const ThankYou = () => {
  return (
      <div className="min-h-screen flex  justify-center items-center p-4 bg-white relative">
            <img src="/authbg.jpg" className='absolute z-0 top-0 w-full left-0 h-full object-cover ' alt="" />
           <div className='relative max-w-[1050px] m-auto z-20'>
              <h1 className='text-[#4285F4] berlin font-[700] md:!leading-[160px] md:text-[200px] text-[64px] text-center md:text-left'>Thank You</h1>
              <div className='mt-6 flex justify-between md:flex-row flex-col gap-6'>
                
              <p className='text-[16px] text-[#000000] primary-font max-w-[445px] text-center md:text-left'>Lorem ipsum dolor sit amet consectetur. Sit consectetur nunc venenatis integer at et pellentesque pretium.</p>
                <Authbtn btntext='Return Home' className='!h-[56px] px-5 !text-[20px]' href="/"/>
              </div>
            </div>      
        </div>

  )
}

export default ThankYou