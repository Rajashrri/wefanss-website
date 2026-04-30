import React from 'react'
import ClaimProfileForm from '../component/form/ClaimProfileForm'

const ClaimProfile = () => {
  return (
    <div className='bg-[#fff]'>
    <div className="py-[70px] bg-[#4285F4] px-5">
        <div className="max-w-[1100px] m-auto text-center">
            <h3 className='berlin text-[36px] text-[#F3F3F3]'>What is Claim Profile</h3>
            <p className='text-center text-[#F3F3F3] primary-font mt-3 text-[16px]'>In a world where technology reigns supreme, the sun rises over the bustling city of New Haven. People rush to their jobs, coffee in hand, while the aroma of fresh pastries wafts through the air. The streets are alive with the sounds of laughter, chatter, and the occasional honk of a car. In the park, children play joyfully, their laughter echoing amidst the trees. As the day unfolds, the vibrant energy of the city captivates everyone, reminding us of the beauty in everyday moments. Life is a tapestry of experiences, each thread woven with care.</p>
        </div>
    </div>
     <ClaimProfileForm  type="" className="py-[60px] max-w-[600px] px-6 m-auto"/>
    </div>
  )
}

export default ClaimProfile