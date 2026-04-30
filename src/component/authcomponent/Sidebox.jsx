import React from 'react'

const Sidebox = () => {
  return (
    <>
    <div className="md:col-span-6 col-span-12 relative flex justify-center items-center rounded-[16px] overflow-hidden">
        <div className='absolute inset-0 bg-[#00000040] z-10 '></div>
        <img src="/banner/banner.png" className='absolute z-0 top-0 left-0 h-full w-full object-cover ' alt="" />
        <div className=" relative z-20 py-[60px]">
            <img src="/logo.png" className='md:w-auto w-[121px]' alt="" />
        </div>
    </div>
    </>
  )
}

export default Sidebox