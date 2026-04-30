import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  { id: 1, name: "Narendra Modi", img: "/celebrities/karina.jpg", category: "Politicians" },
  { id: 2, name: "Akshay Kumar", img: "/celebrities/akshay.jpg", category: "Actors" },
  { id: 3, name: "Salman Khan", img: "/celebrities/nitin.jpg", category: "Actors" },
  { id: 4, name: "Amit Shah", img: "/celebrities/roshan.jpg", category: "Politicians" },
  { id: 5, name: "Kareena Kapoor", img: "/celebrities/salman.jpg", category: "Actors" },
  { id: 6, name: "Narendra Modi", img: "/celebrities/roshan.jpg", category: "Politicians" },
  { id: 7, name: "Akshay Kumar", img: "/celebrities/akshay.jpg", category: "Actors" },
  { id: 8, name: "Salman Khan", img: "/celebrities/karina.jpg", category: "Actors" },
  { id: 9, name: "Amit Shah", img: "/celebrities/akshay.jpg", category: "Politicians" },
  { id: 10, name: "Kareena Kapoor", img: "/celebrities/nitin.jpg", category: "Actors" },
];

const RecentlyAddedProfiles = () => {
  return (
    <>
         <div className=" py-16 px-6">

      {/* Top Header */}
      <div className="flex justify-center items-center mb-10">
        <h2 className="text-2xl flex flex-wrap justify-center gap-4 berlin text-[40px] font-semibold text-blue-600">
       Recently Added     <img src="/profile.png" alt="" />      Profiles
        </h2>

      
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1.5}
  centeredSlides={true}
  spaceBetween={30}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
    breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30
    },
  }}
  pagination={{ clickable: true }}
  modules={[Pagination, Autoplay]}
  className="profile-swiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <a href="#!" className="group block catogaryhover relative rounded-2xl overflow-hidden transition-all duration-500">

              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className=" h-[338px] w-[100%] object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute hedeing  bottom-0 left-0 w-full ">
                <h3 className="text-[#fff]  relative p-6 z-30 text-[24px] font-semibold leading-tight">
                 <span className="relative z-30"> {item.name}</span>
                </h3>
              </div>

            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Blur Side Slides Effect */}


    </div>
    </>
  )
}

export default RecentlyAddedProfiles