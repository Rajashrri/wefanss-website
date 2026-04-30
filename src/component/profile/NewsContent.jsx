import React from 'react'
import Subheading from '../Subheading'

const NewsContent = ({item}) => {
  return (
    <div className="bg-white rounded-xl p-4 space-y-4 border-[#4285F429] border-b ">
     <Subheading data={item?.title} />
    {item?.items?.map((mediaItem) => (
        <a href="#!" key={mediaItem.id} className="space-y-2 block mb-6">


                <p className="text-[12px] font-[500] text-[#868484]">
                  {mediaItem.source}
                </p>

                <h4 className="text-[14px] text-[#1E1E1E] leading-snug font-medium">
                  {mediaItem.title}
                </h4>
                <p className="text-[12px] text-[#757575] leading-snug font-medium">
                  {mediaItem.dis}
                </p>
              </a>
              ))}
    </div>
  )
}

export default NewsContent