import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useState } from "react";

const BannerSlider = ({data}) => {
     const [selectedSeason, setSelectedSeason] = useState({});
const [selectedItem, setSelectedItem] = useState(null);
const [open, setOpen] = useState(false);

  const handleChange = (id, value) => {
    setSelectedSeason((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  return (<>
  
   <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}


                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    className="movies-swiper "
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="group min-h-[100vh] h-[100%]  flex justify-start items-end relative  overflow-hidden transition-all duration-500 " >

                                {/* Image */}
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className=" h-[100%] w-[100%] object-cover absolute  transition-all duration-500"
                                />

                                {/* Overlay */}
                                <div className=" hedeing max-w-[770px] z-20 md:mt-[300px] mt-[150px]  md:pl-[50px] md:pb-[40px] p-4 w-full ">
                                    <div className="md:p-5 md:bg-[#00000080] md:backdrop-blur-[100px] rounded-[16px]">
                                        <h2 className="berlin text-[64px] text-[#fff]">{item.name}</h2>
                                        <div className="primary-font mt-4 text-[#fff] text-[16px] flex gap-4 flex-wrap  items-center">
                                            <span>{item.year}</span>
                                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                                            </svg>

                                            {
                                                item.status && (
                                                    <>
                                                    <span>{item.status}</span>
                                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                                            </svg>

                                                    </>
                                                )
                                            }
                                            {
                                                item.platform && (
                                                    <>
                                                    <span>{item.platform}</span>
                                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                                            </svg>

                                                    </>
                                                )
                                            }

                                            <span>{item.category}</span>
                                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                                            </svg>
                                            


                                            <span>
                                                {item.language.map((lang, index) => (
                                                    <span key={index}>
                                                        {lang}
                                                        {index !== item.language.length - 1 && " / "}
                                                    </span>
                                                ))}
                                            </span>
                                        </div>
                                        <div className="flex gap-4 mt-2">
                                            {item.rating.map((items, index) => (
                                                <div className="flex gap-3 text-[#F3F3F3] items-center" key={index}> <img src={items.img} alt="" />
                                                    <span >
                                                        {items.site}
                                                    </span>
                                                    <span >{items.per}/10
                                                    </span>
                                                    {index !== item.rating.length - 1 && (<svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                                                    </svg>)}
                                                </div>
                                            ))}
                                        </div>
                                        {
                                            item?.season && (
                                                <div className="flex mt-3 gap-3 items-center">
                                                    <select
                                                        value={
                                                            selectedSeason[item.id] ||
                                                            Object.keys(item?.season || {})[0]
                                                        }
                                                        onChange={(e) => handleChange(item.id, e.target.value)}
                                                        className="bg-[#00000040] text-white text-[16px] px-3 py-2 rounded-md"
                                                        >
                                                        {Object.entries(item?.season || {}).map(([key], index) => (
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
                                                            item?.season?.[
                                                            selectedSeason[item.id] ||
                                                            Object.keys(item?.season || {})[0]
                                                            ]?.totalEp
                                                        }{" "}
                                                        Episodes
                                                        </p>
                                                    </div>
                                            )
                                        }
                                       
                                        <p className="text-[#F5F5F5] text-[16px] mt-6">{item.dis}</p>
                                        <div className="flex gap-4 mt-6 items-center">
                                            <Link   onClick={() => {
    setSelectedItem(item);
    setOpen(true);
  }} className="text-[#F3F3F3] primary-font font-[600] rounded-[4px] border flex items-center hover:curser-pointer justify-center w-fit border-[#D9D9D9] h-[48px] px-[16px]">More Details</Link>
                                            <Link className="text-[#F3F3F3] bg-[#4285F4] gap-2 primary-font font-[600] rounded-[50px] border flex items-center justify-end w-fit border-[#4285F4] p-[4px] pl-[20px]">Watch on <svg width="47" height="45" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        <p className="text-[#F5F5F5] primary-font mt-3">{item.cast}</p>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                
                {open && selectedItem && (
        <div className="fixed h-[100%] overflow-scroll inset-0 flex items-center justify-center z-50">

          {/* Overlay */}
          {/* <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          ></div> */}

          {/* Popup Content */}
          <div className="relative h-full rounded-[12px] py-5 w-[95%] max-w-[95%] h-full shadow-xl">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 z-10 text-[#fff] text-xl"
            >
              ✕
            </button>

                <div className="group md:min-h-[100vh]    flex justify-start items-end relative  md:overflow-hidden transition-all duration-500 " >

                                {/* Image */}
                                <img
                                    src={selectedItem.img}
                                    alt={selectedItem.name}
                                    className=" h-[100%] w-[100%] object-cover absolute  transition-all duration-500"
                                />

                                {/* Overlay */}
                                <div className=" hedeing max-w-[770px] z-20 md:mt-[300px] mt-[150px]  md:pl-[50px] md:pb-[40px] p-4 w-full ">
                                    <div className="md:p-5 md:bg-[#00000080] md:backdrop-blur-[100px] rounded-[16px]">
                                        <h2 className="berlin text-[64px] text-[#fff]">{selectedItem.name}</h2>
                                        <div className="primary-font mt-4 text-[#fff] text-[16px] flex gap-4 flex-wrap  items-center">
                                            <span>{selectedItem.year}</span>
                                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                                            </svg>

                                            {
                                                selectedItem.status && (
                                                    <>
                                                    <span>{selectedItem.status}</span>
                                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                                            </svg>

                                                    </>
                                                )
                                            }
                                            {
                                                selectedItem.platform && (
                                                    <>
                                                    <span>{selectedItem.platform}</span>
                                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                                            </svg>

                                                    </>
                                                )
                                            }

                                            <span>{selectedItem.category}</span>
                                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                                            </svg>
                                            


                                            <span>
                                                {selectedItem.language.map((lang, index) => (
                                                    <span key={index}>
                                                        {lang}
                                                        {index !== selectedItem.language.length - 1 && " / "}
                                                    </span>
                                                ))}
                                            </span>
                                        </div>
                                        <div className="flex gap-4 mt-2">
                                            {selectedItem.rating.map((items, index) => (
                                                <div className="flex gap-3 text-[#F3F3F3] items-center" key={index}> <img src={items.img} alt="" />
                                                    <span >
                                                        {items.site}
                                                    </span>
                                                    <span >{items.per}/10
                                                    </span>
                                                    {index !== selectedItem.rating.length - 1 && (<svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                                                    </svg>)}
                                                </div>
                                            ))}
                                        </div>
                                        {
                                            selectedItem?.season && (
                                                <div className="flex mt-3 gap-3 items-center">
                                                    <select
                                                        value={
                                                            selectedSeason[selectedItem.id] ||
                                                            Object.keys(selectedItem?.season || {})[0]
                                                        }
                                                        onChange={(e) => handleChange(selectedItem.id, e.target.value)}
                                                        className="bg-[#00000040] text-white text-[16px] px-3 py-2 rounded-md"
                                                        >
                                                        {Object.entries(selectedItem?.season || {}).map(([key], index) => (
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
                                                            selectedItem?.season?.[
                                                            selectedSeason[selectedItem.id] ||
                                                            Object.keys(selectedItem?.season || {})[0]
                                                            ]?.totalEp
                                                        }{" "}
                                                        Episodes
                                                        </p>
                                                    </div>
                                            )
                                        }
                                       
                                        <p className="text-[#F5F5F5] text-[16px] mt-6">{selectedItem.dis}</p>
                                        <div className="flex gap-4 mt-6 items-center">
                                            <button onClick={() => setOpen(true)} className="text-[#F3F3F3] primary-font font-[600] rounded-[4px] border flex items-center justify-center w-fit border-[#D9D9D9] h-[48px] px-[16px]">More Details</button>
                                            <Link className="text-[#F3F3F3] bg-[#4285F4] gap-2 primary-font font-[600] rounded-[50px] border flex items-center justify-end w-fit border-[#4285F4]  p-[4px] pl-[20px]">Watch on <svg width="47" height="45" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        <p className="text-[#F5F5F5] primary-font mt-3">{selectedItem.cast}</p>
                                    </div>
                                </div>

                            </div>

     

          </div>
        </div>
      )}</>
  )
}

export default BannerSlider