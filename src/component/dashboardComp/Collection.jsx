import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CatogeriesCard from "../catogeries/CatogeriesCard";
import Button from "../Button";
import Card2 from "../card/Card2";

const Collection = ({data}) => {
  return (
     <div className={`max-w-[1352px] m-auto px-[20px] ${data.cardClass} `}>
      <div className="flex justify-between">
         <h3 className="flex gap-2 items-center berlin mb-8 text-[#1E1E1E] md:text-[36px] text-[24px] text-[400]">{data.title}</h3>
          {
            data.btnlink && (
              <Button btntext="View All" btnclass={data.btnclass} btnlink={data.btnlink}/>
            )
          }
      </div>
           <div className="flex flex-wrap gap-3">
           {data?.slider?.map((item) => (

            <Card2 data={item} />
          
        ))}
        </div>


    </div>
  )
}

export default Collection