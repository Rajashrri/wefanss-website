import React from "react";
import { Bookmark, Share2, Plus, Share } from "lucide-react";
import { Link } from "react-router-dom";

const Card2 = ({data}) => {
  return (
    <div className={`w-[100%] bg-[#F4FBFF]   rounded-[16px] p-4 space-y-3 ${data.cardcalss}`}>

    

      {/* Content */}
      <div className="px-1 space-y-2">

        {/* Name */}
      
            <div>
                <h3 className="primary-font text-[#4285F4] text-[20px] font-[500]">{data.collectionName}</h3>
                <p className="primary-font text-[#757575] text-[14px]">{data.dis}</p>
            </div>


        {/* Buttons */}
                <div className="mt-4 flex justify-start items-center gap-[10px]">
                 
                  <Link to={data.link} className="px-6 h-[42px] py-2 flex w-fit rounded-[24px] primary-font text-[16px] text-[#4285F4] border-[#4285F4] border items-center gap-2 bg-[#fff]">View Collection</Link>
                </div>

      </div>
        {/* Image */}
      <div className="w-full h-[270px] mt-4 overflow-hidden rounded-lg">
        <img
          src={data.img}
          alt={data.name}
          className="w-full h-[270px] object-cover"
        />
      </div>
    </div>
  )
}

export default Card2