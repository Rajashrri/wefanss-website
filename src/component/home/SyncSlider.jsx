import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Link } from "react-router-dom";

export default function SyncSlider() {
const swiperRef = useRef(null)  
  const thumbRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
    {
      id: 1,
      img: "/celebrities/modi.jpg",
      title: "Modi ji",
      dis: "Modi Lopez's iconic green Versace dress from the 2000 Grammy Awards was so popular that it led to the creation of Google Images because people couldn't find photos of it online",
      link: "",
    },
    {
      id: 2,
      img: "/celebrities/akshay.jpg",
      title: "Akshay",
      dis: "Akshay Lopez's iconic green Versace dress from the 2000 Grammy Awards was so popular that it led to the creation of Google Images because people couldn't find photos of it online",
      link: "",
    },
    {
      id: 3,
      img: "/celebrities/salman.jpg",
      title: "Salman",
      dis: "Salman Lopez's iconic green Versace dress from the 2000 Grammy Awards was so popular that it led to the creation of Google Images because people couldn't find photos of it online",
      link: "",
    },
    {
      id: 4,
      img: "/celebrities/1.png",
      title: "Crids",
      dis: "Crids Lopez's iconic green Versace dress from the 2000 Grammy Awards was so popular that it led to the creation of Google Images because people couldn't find photos of it online",
      link: "",
    },
  ];

  return (
    <div className="w-full px-5 flex  items-center justify-center bg-blue-500 py-16">
      <div className="grid grid-cols-12  gap-8 max-w-[1200px] m-auto">

     
        <div className="col-span-12 md:hidden block">
            <h2 className="text-[48px] text-center berlin text-white mb-[20px]">
            {/* {slides[activeIndex].title} */}
            Trivia
          </h2>
        </div>
        {/* TEXT */}
       
        <div className="col-span-12 md:col-span-5 md:order-1 order-2">

          <h2 className="text-[48px] md:block hidden berlin text-white mb-[40px]">
            {/* {slides[activeIndex].title} */}
            Trivia
          </h2>

          <p className="text-[24px] primary-font text-white">
            {slides[activeIndex].dis}
          </p>

          <Link
            to="#"
            className="md:mt-[70px] mt-[30px] block py-[10px] rounded-[100px] bg-[#FFFFFF33] text-[16px] text-white border border-white w-fit px-[20px]"
          >
            Know More
          </Link>

          <div className="flex gap-4 mt-10">

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-[60px] h-[60px] border hover:cursor-pointer border-white rounded-full text-white"
        >
          <img src="/prev.svg" alt="" />

        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-[60px] h-[60px] hover:cursor-pointer border border-white rounded-full text-white"
        >
                <img src="/next.svg" alt="" />
        </button>

      </div>


        </div>
           {/* IMAGE SLIDER */}
        <div className="col-span-12 md:col-span-7 md:order-2 order-1">

          <Swiper
              modules={[Autoplay, Navigation]}
            // onSwiper={(swiper) => (thumbRef.current = swiper)}
            slidesPerView={1.2}
            spaceBetween={8}
                centeredSlides={true}
            loop
            speed={800}
            onSwiper={(swiper)=>{
                swiperRef.current = swiper
              }}


            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}

            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides:true
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                    centeredSlides:false
              }
            }}

            onSlideChange={(swiper) => {
              const real = swiper.realIndex
              setActiveIndex(real)
            }}

            // navigation={true}
            className="syncslider"
          >

            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="rounded-xl  overflow-hidden">
                  <img
                    src={slide.img}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>
    </div>
  );
}