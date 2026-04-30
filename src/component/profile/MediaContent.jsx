import React from "react";
import Subheading from "../Subheading";
import { Link } from "react-router-dom";

const MediaContent = ({ item }) => {
  return (
    <div className="bg-white rounded-xl rounded-b-none border-[#4285F429] p-4 space-y-4 border-b">

      {/* Section Title */}
      <Subheading data={item?.title} />

      {/* Media Items */}
      {item?.items?.map((mediaItem) => (
        <a href="#!" key={mediaItem.id} className="space-y-2 block">

          <div className="relative">
            <img
              src={mediaItem.image}
              alt={mediaItem.title}
              className="w-full h-40 object-cover rounded-lg"
            />

            {mediaItem.isVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 rounded-full flex justify-center items-center">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <rect
                      width="50"
                      height="50"
                      rx="25"
                      fill="white"
                      fillOpacity="0.8"
                    />
                    <path
                      d="M21.4602 15.4402C19.6602 14.4102 18.2002 15.2502 18.2002 17.3302V32.6702C18.2002 34.7502 19.6602 35.5902 21.4602 34.5602L34.8702 26.8702C36.6702 25.8702 36.6702 24.1602 34.8702 23.1302L21.4602 15.4402Z"
                      fill="#4285F4"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>

          {mediaItem.source && (
            <p className="text-[12px] font-[500] text-[#868484]">
              {mediaItem.source}
            </p>
          )}

          <p className="text-[14px] text-[#1E1E1E] leading-snug font-medium">
            {mediaItem.title}
          </p>

        </a>
      ))}

      {item?.type !== "profile" && (
          <Link to={item?.link} className="text-[#4285F4] w-full block text-[14px] text-center font-primary font-[700] mt-2 cursor-pointer hover:underline">
            see more
          </Link>
        )}
    </div>
  );
};

export default MediaContent;
