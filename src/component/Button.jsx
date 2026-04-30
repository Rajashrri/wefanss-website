import React from 'react'
import { Link } from 'react-router-dom'

const Button = (
    {btntext,btnlink, btnclass}
) => {
  return (
    <>
        <Link to={btnlink}  className={`bg-[#4285F4] px-[30px] py-[12px] primary-font font-semibold leading-[19px] text-[#FFFFFF] rounded-[100px] justify-center items-center w-fit  flex ${btnclass}`}>
            {btntext}
        </Link>
    </>
  )
}

export default Button