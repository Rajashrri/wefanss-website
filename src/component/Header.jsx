import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Header = () => {
  return (
    <>
      <div className='header px-[50px] py-[20px] flex justify-between items-center bg-[#fff]'>
        <div>
          <Link to="/">
          <img src="../wefanss.svg" className='w-[150px] md:block hidden' alt="" />
          <img src="../w.png" className='md:hidden block' alt="" />
          </Link>
        </div>
        <ul className='md:flex hidden lg:gap-x-[40px] md:gap-x-[20px] items-center'>
          <li><Link className='primary-font text-[16px] font-[500] text-[#1E1E1E]' to="/actor">Actors</Link></li>
          <li><Link className='primary-font text-[16px] font-[500] text-[#1E1E1E]' to="/politician">Politicians</Link></li>
          <li><Link className='primary-font text-[16px] font-[500] text-[#D5D5D5]' to="#!">Singers</Link></li>
          <li><Link className='primary-font text-[16px] font-[500] text-[#D5D5D5]' to="#!">Sportsperson</Link></li>
          <li><Link className='primary-font text-[16px] font-[500] text-[#D5D5D5]' to="#!">More</Link></li>
        </ul>
        <div className='lg:w-[200px] flex justify-end'>
          <Button btnlink="/login" btnclass="" btntext="Login" />
           <img src="../menu.svg" className='md:hidden block ml-3' alt="" />

        </div>

      </div>
    </>
  )
}

export default Header