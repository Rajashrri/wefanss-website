import { Bookmark, Share } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    name: "Chris Evanhghghgs",
    image:
      "/celebrities/1.png",
  },
  {
    id: 2,
    name: "Robert Downey",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Leonardo DiCaprio",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function CelebritySlider() {
      const [Quick, setQuick] = useState(false);
    const [Sharelink, setSharelink] = useState(false);
    const [savecollection, setsavecollection] = useState(false);
    const [createcollecton, setcreatecollecton] = useState(false);
    const [Likepro, setLikepro] = useState(false);
    const [follow, setfollow] = useState(false);
  return (
    <div className="w-full h-screen  flex items-center justify-center catcont">
      <div className="w-full h-full relative overflow-hidden ">

        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1.15,
            },
          }}
          className="h-full catogeryslider"
        >
          {slides.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-full catodarey">

                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#00000033]"></div>

                {/* Slide Number Left */}
                <div className="absolute top-6 left-6 text-white primary-font text-[64px] font-[500]">
                  0{index + 1}
                </div>



                {/* Content */}
                <div className="absolute catslider bottom-20 left-10 text-white disl">
                  <div className="relative mb-[32px]">
                    <div className="flex justify-start items-center gap-[10px]">
                      <Link onClick={() => setfollow(!follow)} className={`px-[38px] py-2  transition-all duration-300 ease-in-out flex w-fit rounded-[24px] primary-font text-[16px] font-[500] items-center gap-2  
                        ${follow
                          ? "bg-[#4285F4] text-[#fff]"
                          : "bg-[#fff] text-[#4285F4]"
                        }`
                      }>{follow
                        ? "follow"
                        : "following"
                        } <svg className={` ${follow
                          ? "block"
                          : "hidden invisible"
                          }`
                        } width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 1V15M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></Link>
                      <div className='relative'>
                        <Link onClick={() => setLikepro(!Likepro)} className={`px-4 h-[42px] py-2 flex w-fit rounded-[24px] primary-font text-[16px] text-[#fff] items-center gap-2  
                        ${Likepro
                          ? "bg-[#fff]"
                          : "bg-[#4285F4]"
                          }`}> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                              <path d="M9.45004 15.61C9.36309 15.6104 9.27732 15.5898 9.20004 15.55C7.76743 14.6882 6.40936 13.7081 5.14004 12.62C4.07818 11.742 3.13077 10.7341 2.32004 9.62C1.51064 8.57432 1.04904 7.30142 1.00004 5.98C0.995179 4.68716 1.47303 3.43904 2.34004 2.48C2.74701 2.01838 3.24689 1.64791 3.80696 1.39287C4.36702 1.13782 4.97464 1.00394 5.59004 1C6.37693 1.01352 7.14672 1.23181 7.82357 1.63336C8.50043 2.03491 9.06099 2.60588 9.45004 3.29C9.83908 2.60588 10.3996 2.03491 11.0765 1.63336C11.7534 1.23181 12.5231 1.01352 13.31 1C13.8952 1.00436 14.4737 1.12407 15.0125 1.35229C15.5513 1.58051 16.0398 1.91275 16.45 2.33C17.3935 3.31416 17.917 4.62671 17.91 5.99C17.8361 7.30534 17.3654 8.56744 16.56 9.61C15.7482 10.72 14.8046 11.7273 13.75 12.61C12.4983 13.6935 11.1606 14.6734 9.75004 15.54C9.67275 15.5798 9.58699 15.6004 9.50004 15.6L9.45004 15.61Z" stroke={` ${Likepro? "#4285F4": "#fff"}`} stroke-width="2" stroke-miterlimit="10"/>
                            </svg>
                            </Link>
                  

                      </div>
                      <div className="relative">
                        <Link onClick={() => setSharelink(!Sharelink)} className="px-4 h-[42px] py-2 flex w-fit rounded-[24px] primary-font text-[16px] text-[#fff] items-center gap-2 bg-[#fff]"> <Share color="#4285F4" /></Link>
                   
                      </div>
                    </div>

                  </div>

                  <h1 className="text-6xl   font-bold berlin ">
                    {item.name.split(" ")[0]}
                  </h1>
                  <h1 className="text-6xl  font-bold berlin ">
                    {item.name.split(" ")[1]}
                  </h1>
                </div>



              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
