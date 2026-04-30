import React from 'react'
import Subheading from '../Subheading'
import { Link } from 'react-router-dom'

const Podcast = ({item}) => {
  return (
    <div className="bg-white rounded-xl p-4 space-y-4 border-[#4285F429] border-b ">
          <Subheading data={item?.title} />
    {item?.items?.map((mediaItem) => (
        <a href='#!' key={mediaItem.id} className="space-y-2 mb-6 block">


                <p className="text-[12px] font-[500] text-[#868484]">
                  {mediaItem.source}
                </p>
                <div className="flex items-center gap-2">


                  <p className="text-[14px] text-[#1E1E1E] leading-snug font-medium">
                    {mediaItem.title}
                  </p>
                  <div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="#4285F4" />
                    <g clip-path="url(#clip0_366_1509)">
                      <path d="M16.5689 12.3517C15.1289 11.5277 13.9609 12.1997 13.9609 13.8637V26.1357C13.9609 27.7997 15.1289 28.4717 16.5689 27.6477L27.2969 21.4957C28.7369 20.6957 28.7369 19.3277 27.2969 18.5037L16.5689 12.3517Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_366_1509">
                        <rect width="16" height="16" fill="white" transform="translate(13 12)" />
                      </clipPath>
                    </defs>
                  </svg>
                  </div>
                </div>

              </a>
        ))}
         {item?.type !== "profile" && (
          <Link to={item?.link} className="text-[#4285F4] w-full block text-[14px] text-center font-primary font-[700] mt-2 cursor-pointer hover:underline">
            see more
          </Link>
        )}
   </div>
  )
}

export default Podcast