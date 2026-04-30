import React from 'react'
import ClaimProfileForm from '../component/form/ClaimProfileForm'

const Contact = () => {
  return (
    <div className='bg-[#fff]'>
        <div className=''>
            <ul className='flex gap-3 px-6 py-2 bg-[#4285F4]'>
                <li className='text-[#fff] ptimary-font text-[12px]'><a href="#!">Home</a></li>
                <li className='text-[#fff] ptimary-font text-[12px]'>/</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>Contact</li>
            </ul>
            <h1 className='berlin md:text-[64px] text-[48px] text-[#1E1E1E] m-auto text-center py-8'>Contact</h1>


        </div>
        <div className=' m-auto flex flex-wrap px-6 md:py-[60px] py-[40px] gap-[60px] max-w-[1200px] m-auto justify-center' >
            <div className='md:w-[400px] w-[100%] flex flex-col md:gap-[80px] gap-[40px]'>
                <div className="">
                    <h3 className='text-[#757575] primary-font'>Contact Email</h3>
                    <a href="#!" className='berlin text-[#1E1E1E] text-[16px] mt-2 block'>dummyuser@example.com</a>
                </div>
                <div className="">
                    <h3 className='text-[#757575] primary-font'>Home Address</h3>
                    <a href="#!" className='berlin text-[#1E1E1E] text-[16px] mt-2 block'>890 Oak Avenue, Suite 22,<br /> Willow Creek, CA 90210</a>
                </div>
                <div className="">
                    <h3 className='text-[#757575] primary-font'>Social Media</h3>
                    <ul>
                        <li className='berlin text-[#1E1E1E] text-[16px] mt-2 block'><a href="">LinkedIn</a></li>
                        <li className='berlin text-[#1E1E1E] text-[16px] mt-2 block'><a href="">Facebook</a></li>
                        <li className='berlin text-[#1E1E1E] text-[16px] mt-2 block'><a href="">Instagram</a></li>
                        <li className='berlin text-[#1E1E1E] text-[16px] mt-2 block'><a href="">X</a></li>
                    </ul>
                </div>
            </div>
           
            <ClaimProfileForm  type="Contactform" className="md:w-[600px] w-[100%]  px-0"/>
           

        </div>
    </div>
  )
}

export default Contact