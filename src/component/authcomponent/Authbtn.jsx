import React from 'react'
import { Link } from 'react-router-dom'

const Authbtn = ({btntext,className,href}) => {
  return (
    <Link to={href} className={`h-[72px] flex justify-center items-center bg-[#4285F4] text-[#fff] berlin text-[24px] rounded-[8px] ${className}`}>{btntext}</Link>
  )
}

export default Authbtn