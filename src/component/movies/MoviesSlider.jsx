import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";

const MoviesSlider = ({ data }) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [open1, setOpen1] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState({});

  const handleChange = (id, season) => {
    setSelectedSeason((prev) => ({
      ...prev,
      [id]: season,
    }));
  };

  return (
    <>
      <div className={`py-[40px] md:px-[30px] px-5 ${data?.mainclass}`}>
        <h3 className="berlin text-[36px] text-[#1E1E1E]">{data?.title}</h3>

        <div className="w-full mt-[30px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={16}
            loop={true}
            centeredSlides={false}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >

            {data?.movies?.map((movie, index) => {

              const isActive = index === activeIndex;

              return (
                <SwiperSlide key={movie.id}>
                  <div className="transition-all duration-500">

                    {/* Image */}
                    <div className="relative sldieimh rounded-xl overflow-hidden">

                      <img
                        src={movie.img}
                        alt={movie.title}
                        className="w-full h-full object-cover rounded-xl"
                      />

                      {/* Play Button */}
                      <button className="absolute inset-0 flex items-center justify-center">

                        <svg width="47" height="45" viewBox="0 0 47 45" fill="none">
                          <rect width="46.4" height="44.8" rx="22.4" fill="white" fillOpacity="0.8"/>
                          <path d="M18.7682 14.7521C17.3282 13.9281 16.1602 14.6001 16.1602 16.2641V28.5361C16.1602 30.2001 17.3282 30.8721 18.7682 30.0481L29.4962 23.8961C30.9362 23.0961 30.9362 21.7281 29.4962 20.9041L18.7682 14.7521Z" fill="#4285F4"/>
                        </svg>

                      </button>
                    </div>

                    {/* Title */}
                    <div className="flex items-center justify-between mt-3">

                      <h3 className="text-[20px] text-[#1E1E1E] font-[400] berlin">
                        {movie.title}
                      </h3>

                      {/* Info Button */}
                      <button
                        onClick={() => {
                          setSelectedItem1(movie);
                          setOpen1(true);
                        }}
                        className="text-gray-500 hover:cursor-pointer"
                      >

                        <svg width="24" height="24" fill="none">
                          <path
                            d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            stroke="#303030"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                      </button>

                    </div>

                    {/* Description */}
                    {isActive && (
                      <p className="text-[#757575] text-[16px] primary-font mt-2">
                        {movie.desc}
                      </p>
                    )}

                  </div>
                </SwiperSlide>
              );
            })}

          </Swiper>
        </div>
      </div>


      {/* Popup */}
        {open1 && selectedItem1 && (
            <div className="fixed h-[100%] overflow-scroll inset-0 flex items-center justify-center z-50">
    
              {/* Overlay */}
              {/* <div
                className="absolute inset-0 h-[100%] bg-black/50"
                onClick={() => setOpen1(false)}
              ></div> */}
    
              {/* Popup Content */}
              <div className="relative h-full rounded-[12px] py-5 w-[95%] max-w-[95%] h-full shadow-xl">
    
                {/* Close Button */}
                <button
                  onClick={() => setOpen1(false)}
                  className="absolute top-6 right-6 z-10 text-[#fff] text-xl"
                >
                  ✕
                </button>
    
                    <div className="group md:min-h-[100vh]    flex justify-start items-end relative  md:overflow-hidden transition-all duration-500 " >
    
                                    {/* Image */}
                                    <img
                                        src={selectedItem1.img}
                                        alt={selectedItem1.name}
                                        className=" h-[100%] w-[100%] object-cover absolute  transition-all duration-500"
                                    />
    
                                    {/* Overlay */}
                                    <div className=" hedeing max-w-[770px] z-20 md:mt-[300px] mt-[150px]  md:pl-[50px] md:pb-[40px] p-4 w-full ">
                                        <div className="md:p-5 md:bg-[#00000080] md:backdrop-blur-[100px] rounded-[16px]">
                                            <h2 className="berlin text-[64px] text-[#fff]">{selectedItem1.title}</h2>
                                            <div className="primary-font mt-4 text-[#fff] text-[16px] flex gap-4 flex-wrap  items-center">
                                                <span>{selectedItem1.year}</span>
                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                                                </svg>
    
                                                {
                                                    selectedItem1.status && (
                                                        <>
                                                        <span>{selectedItem1.status}</span>
                                                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                                                </svg>
    
                                                        </>
                                                    )
                                                }
                                                {
                                                    selectedItem1.platform && (
                                                        <>
                                                        <span>{selectedItem1.platform}</span>
                                                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                                                </svg>
    
                                                        </>
                                                    )
                                                }
    
                                                <span>{selectedItem1.category}</span>
                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                                                </svg>
                                                
    
    
                                                <span>
                                                    {selectedItem1.language.map((lang, index) => (
                                                        <span key={index}>
                                                            {lang}
                                                            {index !== selectedItem1.language.length - 1 && " / "}
                                                        </span>
                                                    ))}
                                                </span>
                                            </div>
                                            <div className="flex gap-4 mt-2">
                                                {selectedItem1.rating.map((items, index) => (
                                                    <div className="flex gap-3 text-[#F3F3F3] items-center" key={index}> <img src={items.img} alt="" />
                                                        <span >
                                                            {items.site}
                                                        </span>
                                                        <span >{items.per}/10
                                                        </span>
                                                        {index !== selectedItem1.rating.length - 1 && (<svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                                                        </svg>)}
                                                    </div>
                                                ))}
                                            </div>
                                            {
                                                selectedItem1?.season && (
                                                    <div className="flex mt-3 gap-3 items-center">
                                                        <select
                                                            value={
                                                                selectedSeason[selectedItem1.id] ||
                                                                Object.keys(selectedItem1?.season || {})[0]
                                                            }
                                                            onChange={(e) => handleChange(selectedItem1.id, e.target.value)}
                                                            className="bg-[#00000040] text-white text-[16px] px-3 py-2 rounded-md"
                                                            >
                                                            {Object.entries(selectedItem1?.season || {}).map(([key], index) => (
                                                                <option key={index} value={key}>
                                                                {key.replace("season", "Season ")}
                                                                </option>
                                                            ))}
                                                            </select>
                                                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                                                                    </svg>
    
                                                            <p className="text-white">
                                                            {
                                                                selectedItem1?.season?.[
                                                                selectedSeason[selectedItem1.id] ||
                                                                Object.keys(selectedItem1?.season || {})[0]
                                                                ]?.totalEp
                                                            }{" "}
                                                            Episodes
                                                            </p>
                                                        </div>
                                                )
                                            }
                                           
                                            <p className="text-[#F5F5F5] text-[16px] mt-6">{selectedItem1.desc}</p>
                                            <div className="flex gap-4 mt-6">
                                                <button onClick={() => setOpen1(true)} className="text-[#F3F3F3] primary-font font-[600] rounded-[4px] border flex items-center justify-center w-fit border-[#D9D9D9] h-[48px] px-[16px]">More Details</button>
                                                <Link className="text-[#F3F3F3] bg-[#4285F4] gap-2 primary-font font-[600] rounded-[50px] border flex items-center justify-end w-fit border-[#4285F4] h-[48px] px-[2px] pl-[20px]">Watch on <svg width="47" height="45" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="46.4" height="44.8" rx="22.4" fill="white" fill-opacity="0.8" />
                                                    <g clip-path="url(#clip0_1130_1498)">
                                                        <path d="M18.7682 14.7521C17.3282 13.9281 16.1602 14.6001 16.1602 16.2641V28.5361C16.1602 30.2001 17.3282 30.8721 18.7682 30.0481L29.4962 23.8961C30.9362 23.0961 30.9362 21.7281 29.4962 20.9041L18.7682 14.7521Z" fill="#4285F4" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1130_1498">
                                                            <rect width="16" height="16" fill="white" transform="translate(15.1992 14.3999)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                </Link>
                                            </div>
    
                                        </div>
                                        <div className="p-5 md:bg-[#00000080] md:backdrop-blur-[100px] rounded-[16px] mt-5">
                                            <h3 className="berlin text-[#F5F5F5] text-[24px]">Cast</h3>
                                            <p className="text-[#F5F5F5] primary-font mt-3">{selectedItem1.cast}</p>
                                        </div>
                                    </div>
    
                                </div>
    
         
    
              </div>
            </div>
          )}
    </>
  );
};

export default MoviesSlider;