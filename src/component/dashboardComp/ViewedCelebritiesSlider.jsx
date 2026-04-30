import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CatogeriesCard from "../catogeries/CatogeriesCard";
import Button from "../Button";

const ViewedCelebritiesSlider = ({data}) => {
  return (
    <div className={` max-w-[1352px] m-auto md:px-[40px] px-5 ${data.cardClass} `}>
      <div className="flex justify-between">
         <h3 className="flex gap-2 items-center berlin mb-[24px] text-[#1E1E1E] md:text-[36px] text-[24px] text-[400]">{data.title}</h3>
          {
            data.btnlink && (
              <Button btntext="View All" btnlink={data.btnlink} btnclass={data.btnclass}/>
            )
          }
      </div>
             <Swiper
          slidesPerView={1.1}
          loop={true}
          spaceBetween={10}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={window.innerWidth > 1024}   // 👈 Add this
          modules={[Autoplay, Navigation]}   // 👈 Add Navigation here
           breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween:0,
      
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    },
  }}
          className="h-full viewedcelebritiesslider"
        >
           {data?.slider?.map((item) => (
          <SwiperSlide key={item.id}>
            <CatogeriesCard data={item} />
          </SwiperSlide>
        ))}
        </Swiper> 

    </div>
  )
}

export default ViewedCelebritiesSlider