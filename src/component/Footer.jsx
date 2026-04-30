import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <div className="mainfooter flex md:flex-row md:gap-0 gap-5 flex-col justify-between min-h-[400px] w-full overflow-hidden py-[60px] px-8 relative">
           <img
            src="/banner/banner.png"
            className='absolute top-0 h-full object-cover inset-0 w-full z-10'
            alt=""
          />
          <div className='relative z-20 md:mb-0 mb-12'>
            <img src="/logo.png" className='md:h-fit h-[121px] md:m-0 m-auto' alt="" />
          </div>
          <div className='md:max-w-[440px] md:flex-row flex-col flex justify-between gap-[50px] md:mr-[60px] relative z-20'>
            <ul className='gap-3 flex flex-col text-center'>
              <li className='text-[#FFFFFF] primary-font text-[16px]'><Link>Actors</Link></li>
              <li className='text-[#FFFFFF] primary-font text-[16px]'><Link>Politicians </Link></li>
              <li className='text-[#FFFFFF] primary-font text-[16px]'><Link>About</Link></li>
              <li className='text-[#FFFFFF] primary-font text-[16px]'><Link>Contact</Link></li>
            </ul>
            <ul className='gap-3 flex flex-col text-center'>
              <li className='text-[#FFFFFF] primary-font text-[16px]'><Link>Privacy Policy</Link></li>
              <li className='text-[#FFFFFF] primary-font text-[16px]'><Link>Terms & Condition</Link></li>
            </ul>
            <ul className='gap-3 flex flex-col text-center'>
              <li className='text-[#FFFFFF] primary-font text-[16px]'><Link>Linkedin</Link></li>
              <li className='text-[#FFFFFF] primary-font text-[16px]'><Link>Instagram</Link></li>
              <li className='text-[#FFFFFF] primary-font text-[16px]'><Link>X</Link></li>
            </ul>

          </div>


        </div>
        <div className="copyright bg-[#000000] py-5">
          {/* <p className='text-[#fff] text-center text-[16px] primary-font'>Copyright {year}, All rights reserved with DiigiiHost</p> */}
          <p className='text-[#fff] text-center text-[16px] primary-font'>Copyright © {year} We Fanss. All Rights Reserved. Powered By : <a target='_blank' href="https://www.digihost.in/">DIIGIIHOST</a></p>
        </div>
      </div>
    </>
  )
}

export default Footer