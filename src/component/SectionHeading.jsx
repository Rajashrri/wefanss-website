import React from 'react'

const SectionHeading = ({titleclass,title,subtitleclass,subtitle}) => {
  return (
    <>
        <h2 className={`text-center text-[36px] berlin ${titleclass}`}>{title}</h2>
        <p className={`primary-font text-[16px] max-w-[600px] mt-3 m-auto ${subtitleclass}`}>{subtitle}</p>
    </>
  )
}

export default SectionHeading