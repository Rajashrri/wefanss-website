import React, { useState } from "react";

const ImageContent = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openPopup = (index) => {
    setActiveIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setActiveIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Grid */}
      <div className="flex flex-wrap gap-3 py-3">
        {items?.slice(0, 12).map((item, index) => (
          <div key={item.id} onClick={() => openPopup(index)}>
            <img
              src={item.image}
              alt=""
              className="w-16 h-16 object-cover rounded cursor-pointer  transition"
            />
          </div>
        ))}
      </div>

      {/* Popup */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-[#fff] rounded-[16px] p-[20px] max-w-[700px] gap-[20px] m-auto max-h-fit flex flex-col items-center justify-center z-50">
          
          {/* Close */}
         

          {/* Prev */}
         

          {/* Image */}
          <img
            src={items[activeIndex].image}
            alt=""
            className="md:w-[660px] md:h-[400px] h-[300px] w-[400px] object-cover rounded"
          />

          {/* Next */}
           <button
            onClick={closePopup}
            className="absolute -top-3 -right-3 cursor-pointer h-[50px] w-[50px] bg-[#fff] rounded-[50%] text-black text-3xl"
          >
            ✕
          </button>

        <div className="flex gap-3">
           <button
            onClick={prevSlide}
            className=" text-white text-3xl cursor-pointer  h-[92px] w-[92px] border border-1 border-[#4285F4] flex rounded-[50%] justify-center items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
            <g clip-path="url(#clip0_1579_6516)">
              <path d="M14.5034 27.4463L5.53221 16.8911C4.94619 16.1932 4.62497 15.3111 4.62501 14.3998C4.62338 13.4927 4.94501 12.6146 5.53221 11.923L14.5034 1.35345C14.822 0.944706 15.2198 0.604576 15.6732 0.353495C16.1265 0.102415 16.6259 -0.054432 17.1414 -0.107623C17.6569 -0.160813 18.1778 -0.109249 18.6728 0.0439714C19.1679 0.197192 19.6268 0.448906 20.0221 0.783991C20.4174 1.11908 20.7409 1.53061 20.9731 1.99388C21.2054 2.45714 21.3416 2.96258 21.3735 3.4798C21.4055 3.99703 21.3325 4.51538 21.1591 5.00371C20.9856 5.49203 20.7153 5.94026 20.3642 6.32145L13.4954 14.3998L20.3642 22.4782C20.7153 22.8594 20.9856 23.3077 21.1591 23.796C21.3325 24.2843 21.4055 24.8027 21.3735 25.3199C21.3416 25.8371 21.2054 26.3426 20.9731 26.8058C20.7409 27.2691 20.4174 27.6806 20.0221 28.0157C19.6268 28.3508 19.1679 28.6025 18.6728 28.7557C18.1778 28.909 17.6569 28.9605 17.1414 28.9073C16.6259 28.8541 16.1265 28.6973 15.6732 28.4462C15.2198 28.1951 14.822 27.855 14.5034 27.4463Z" fill="#4285F4"/>
            </g>
            <defs>
              <clipPath id="clip0_1579_6516">
                <rect width="28.8" height="28.8" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          </button>
          <button
            onClick={nextSlide}
            className="text-white text-3xl cursor-pointer h-[92px] w-[92px] border border-1 border-[#4285F4] flex rounded-[50%] justify-center items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <g clip-path="url(#clip0_1579_6521)">
                <path d="M14.2966 27.4463L23.2678 16.8911C23.8538 16.1932 24.175 15.3111 24.175 14.3998C24.1766 13.4927 23.855 12.6146 23.2678 11.923L14.2966 1.35345C13.978 0.944706 13.5802 0.604576 13.1268 0.353495C12.6735 0.102415 12.1741 -0.054432 11.6586 -0.107623C11.1431 -0.160813 10.6222 -0.109249 10.1272 0.0439714C9.63214 0.197192 9.17318 0.448906 8.77788 0.783991C8.38258 1.11908 8.05909 1.53061 7.82686 1.99388C7.59463 2.45714 7.45845 2.96258 7.4265 3.4798C7.39454 3.99703 7.46748 4.51538 7.64092 5.00371C7.81437 5.49203 8.08474 5.94026 8.43579 6.32145L15.3046 14.3998L8.43579 22.4782C8.08474 22.8594 7.81437 23.3077 7.64092 23.796C7.46748 24.2843 7.39454 24.8027 7.4265 25.3199C7.45845 25.8371 7.59463 26.3426 7.82686 26.8058C8.05909 27.2691 8.38258 27.6806 8.77788 28.0157C9.17318 28.3508 9.63214 28.6025 10.1272 28.7557C10.6222 28.909 11.1431 28.9605 11.6586 28.9073C12.1741 28.8541 12.6735 28.6973 13.1268 28.4462C13.5802 28.1951 13.978 27.855 14.2966 27.4463Z" fill="#4285F4"/>
              </g>
              <defs>
                <clipPath id="clip0_1579_6521">
                  <rect width="28.8" height="28.8" fill="white" transform="matrix(-1 0 0 1 28.8 0)"/>
                </clipPath>
              </defs>
            </svg>
          </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageContent;