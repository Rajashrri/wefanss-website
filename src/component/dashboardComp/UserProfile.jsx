import React from 'react'
import Button from '../Button'

const UserProfile = () => {
  return (
    <div className='max-w-[684px] px-[20px] md:gap-9 gap-4 m-auto grid md:grid-cols-3 grid-cols-4 py-[60px]'>
        <div className="md:col-span-1 col-span-2">
            <div className='relative' >
                <img src="/dash-pro.png" className='rounded-full w-full overflow-hidden border border-[#34C759] border-[4px] p-1' alt="" />
                <h3 className='p-2 text-[#34C759] primary-font text-[14px] font-[500] px-3 m-auto absolute bottom-0 left-[38%] bg-[#F3FFF6] w-fit rounded-[8px]'>80%</h3>
            </div>
            <div className='mt-6  md:flex hidden justify-center'>

                <Button btntext="Complete Profile" btnclass="!  px-2"/>
            </div>
        </div>
        <div className="md:col-span-2 col-span-2 pt-[40px]">
            <h3 className='text-[#1E1E1E] text-[16px] primary-font font-[500]'>Welcome</h3>
            <h2 className='md:text-[96px] text-[48px] berlin text-[#4285F4] font-[400]'>Jhone</h2>
            <div className='md:grid hidden gap-2 grid-cols-2 mt-7 '>
                <div className='col-span-1 shadow-[0px_10px_10px_0px_#0000001F] p-5'>
                    <h4 className='text-[#1E1E1E] primary-font text-[14px] text-[500]' >Followed Celebrities</h4>
                    <h2 className='berlin text-[40px] text-[#4285F4] mt-3'>40</h2>
                </div>
                 <div className='col-span-1 shadow-[0px_10px_10px_0px_#0000001F] p-5'>
                    <h4 className='text-[#1E1E1E] primary-font text-[14px] text-[500]' >Saved Celebrities</h4>
                    <h2 className='berlin text-[40px] text-[#4285F4] mt-3'>21</h2>
                </div>
               
            </div>
        </div>
         <div className="md:col-span-2 md:hidden col-span-4 ">
       <div className=' flex justify-center'>

                <Button btntext="Complete Profile" btnclass="!px-2 w-full"/>
            </div>
        </div>
         <div className='md:hidden col-span-4  w-full mt-7'>
               <div className="grid  gap-2 grid-cols-2">
                 <div className='col-span-1 shadow-[0px_10px_10px_0px_#0000001F] p-5'>
                    <h4 className='text-[#1E1E1E] primary-font text-[14px] text-[500]' >Followed Celebrities</h4>
                    <h2 className='berlin text-[40px] text-[#4285F4] mt-3'>40</h2>
                </div>
                 <div className='col-span-1 shadow-[0px_10px_10px_0px_#0000001F] p-5'>
                    <h4 className='text-[#1E1E1E] primary-font text-[14px] text-[500]' >Saved Celebrities</h4>
                    <h2 className='berlin text-[40px] text-[#4285F4] mt-3'>21</h2>
                </div>
               </div>
               
            </div>
        
    </div>
  )
}

export default UserProfile