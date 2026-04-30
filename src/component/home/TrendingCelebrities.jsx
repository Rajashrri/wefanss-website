import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  { id: 1, name: "Narendra Modi", img: "/celebrities/modi.jpg", category: "Politicians" },
  { id: 2, name: "Akshay Kumar", img: "/celebrities/akshay.jpg", category: "Actors" },
  { id: 3, name: "Salman Khan", img: "/celebrities/salman.jpg", category: "Actors" },
  { id: 4, name: "Amit Shah", img: "/celebrities/akshay.jpg", category: "Politicians" },
  { id: 5, name: "Kareena Kapoor", img: "/celebrities/salman.jpg", category: "Actors" },
  { id: 6, name: "Narendra Modi", img: "/celebrities/modi.jpg", category: "Politicians" },
  { id: 7, name: "Akshay Kumar", img: "/celebrities/akshay.jpg", category: "Actors" },
  { id: 8, name: "Salman Khan", img: "/celebrities/salman.jpg", category: "Actors" },
  { id: 9, name: "Amit Shah", img: "/celebrities/akshay.jpg", category: "Politicians" },
  { id: 10, name: "Kareena Kapoor", img: "/celebrities/salman.jpg", category: "Actors" },
];

export default function TrendingCelebrities() {

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredData =
    activeCategory === "All"
      ? data
      : data.filter((item) => item.category === activeCategory);

  return (
    <div className="py-16 px-6">

      {/* Top Header */}
      <div className="flex md:flex-row flex-col md:gap-0 gap-[20px] justify-between items-center mb-10">
        <h2 className="text-2xl berlin text-[40px] font-semibold text-blue-600">
          Trending Celebrities
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-1 rounded-full primary-font text-sm ${
              activeCategory === "All"
                ? "bg-blue-500 text-white"
                : "bg-[#fff] border border-[#D9D9D9] text-gray-600"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setActiveCategory("Actors")}
            className={`px-4 py-1 rounded-full primary-font text-sm ${
              activeCategory === "Actors"
                ? "bg-blue-500 text-white"
                : "bg-[#fff] border border-[#D9D9D9] text-gray-600"
            }`}
          >
            Actors
          </button>

          <button
            onClick={() => setActiveCategory("Politicians")}
            className={`px-4 py-1 rounded-full primary-font text-sm ${
              activeCategory === "Politicians"
                ? "bg-blue-500 text-white"
                : "bg-[#fff] border border-[#D9D9D9] text-gray-600"
            }`}
          >
            Politicians
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        }}
        className="celebrity-swiper"
      >
        {filteredData.map((item) => (
          <SwiperSlide key={item.id}>
            <a
              href="#!"
              className="group md:w-[194px] block relative rounded-2xl overflow-hidden transition-all duration-500"
            >

              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="h-[480px] object-cover rounded-2xl transition-all duration-500 md:group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute hedeing bottom-0 left-0 w-full">
                <h3 className="text-[#000000] bluriffect relative p-6 z-30 text-[64px] font-semibold leading-tight">
                  <span className="relative z-30">{item.name}</span>
                </h3>
              </div>

            </a>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}