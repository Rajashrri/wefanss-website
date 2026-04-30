import React from 'react'
import Button from '../Button'

const ClaimProfileForm = ({type,width,className}) => {
  return (
    <>
    {/* <div className='py-[60px] max-w-[600px] px-6 m-auto'> */}
    <div className={` ${className}`}>
        <form className='grid grid-col-2 gap-y-5 gap-x-3'>
            <div className="md:col-span-2 col-span-2">
                <span className='berlin text-[16px] text-[#1E1E1E] block'>Name*</span>
                <input type="text" className='bg-[#F4FBFF] outline-none h-[48px] w-full rounded-[8px] px-4 mt-3' placeholder='Enter Full Name' />
            </div>
             <div className="md:col-span-1 col-span-2">
                <span className='berlin text-[16px] text-[#1E1E1E] block'>Email*</span>
                <input type="text" className='bg-[#F4FBFF] h-[48px] outline-none w-full rounded-[8px] px-4 mt-3' placeholder='Enter Email' />
            </div>
             <div className="md:col-span-1 col-span-2">
                <span className='berlin text-[16px] text-[#1E1E1E] block'>Phone No</span>
                <input type="text" className='bg-[#F4FBFF] h-[48px] outline-none w-full rounded-[8px] px-4 mt-3' placeholder='Enter Number' />
            </div>
            {
                type !== "Contactform" &&(
                    <div className="md:col-span-2 col-span-2">
                    <span className='berlin text-[16px] text-[#1E1E1E] block'>Relationship with Celebrity</span>
                    <div className='bg-[#F4FBFF] h-[48px] relative w-full rounded-[8px]  mt-3 text-[#B3B3B3]'>
                            <select name="" id="" className='h-full w-full appearance-none px-4 outline-none' >
                        <option value="Choose a Relation" selected>Choose a Relation</option>
                        <option value="Choose a Relation">Choose a Relation</option>
                        <option value="Choose a Relation">Choose a Relation</option>
                    </select> 
                    <svg className='absolute top-0 right-0 translate-y-5 -translate-x-4 ' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    </div>
                        
                </div>
                )
            }
            
            <div className="md:col-span-2 col-span-2">
                <span className='berlin text-[16px] text-[#1E1E1E] block'>Message</span>
                <textarea type="text" rows={6}  className='bg-[#F4FBFF] outline-none !w-full rounded-[8px] py-3 px-4 mt-3  resize-none' placeholder='Write your message here' />
            </div>
            <div className="md:col-span-2 col-span-2">
                <Button btnclass="w-full !rounded-[8px]" btntext="Submit" />
            </div>

        </form>

    </div>
    
    </>
  )
}

export default ClaimProfileForm