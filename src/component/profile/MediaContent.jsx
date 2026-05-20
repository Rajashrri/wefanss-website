import React, { useState } from "react";
import Subheading from "../Subheading";
import { Link } from "react-router-dom";

const MediaContent = ({ item }) => {
  const [popupData1, setPopupData1] = useState(null);

  // ✅ OPEN POPUP
  const openPopup1 = (movie) => {
    setPopupData1(movie);
    document.body.style.overflow = "hidden";
  };

  // ✅ CLOSE POPUP
  const closePopup1 = () => {
    setPopupData1(null);
    document.body.style.overflow = "auto";
  };

  // ✅ YOUTUBE EMBED URL
  const getYoutubeEmbedUrl = (url) => {
    if (!url) return "";

    // youtube.com/watch?v=
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // youtu.be/
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // already embed
    if (url.includes("youtube.com/embed")) {
      return url;
    }

    return url;
  };

  return (
    <>
      <div className="bg-white rounded-xl rounded-b-none border-[#4285F429] p-4 space-y-4 border-b">
        {/* SECTION TITLE */}
        <Subheading data={item?.title} />

        {/* MEDIA ITEMS */}
        {item?.items?.map((mediaItem) => (
          <a
            href={mediaItem?.link || "#!"}
            key={mediaItem.id}
            className="space-y-2 block"
            onClick={(e) => {
              if (mediaItem.isVideo) {
                e.preventDefault();
                openPopup1(mediaItem);
              }
            }}
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={mediaItem.image}
                alt={mediaItem.title}
                className="w-full h-40 object-cover rounded-lg"
              />

              {/* PLAY BUTTON */}
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

            {/* SOURCE */}
            {mediaItem.source && (
              <p className="text-[12px] font-[500] text-[#868484]">
                {mediaItem.source}
              </p>
            )}

            {/* TITLE */}
            <p className="text-[14px] text-[#1E1E1E] leading-snug font-medium">
              {mediaItem.title}
            </p>
          </a>
        ))}

        {/* SEE MORE */}
        {item?.type !== "profile" && (
          <Link
            to={item?.link}
            className="text-[#4285F4] w-full block text-[14px] text-center font-primary font-[700] mt-2 cursor-pointer hover:underline"
          >
            see more
          </Link>
        )}
      </div>

      {/* VIDEO POPUP */}
      {popupData1 && (
        <div className="fixed inset-0 z-[9999] bg-[#00000080] flex justify-center items-center p-4">
          <div className="bg-white rounded-[12px] max-w-[1000px] w-full p-[20px] relative animate-popup">
            {/* CLOSE BUTTON */}
            <button
              onClick={closePopup1}
              className="absolute top-2 right-4 text-[32px] leading-none text-black"
            >
              ×
            </button>

            {/* VIDEO */}
            <div className="w-full">
              <iframe
                className="w-full md:h-[80vh] h-[250px] rounded-[10px]"
                src={getYoutubeEmbedUrl(popupData1?.link)}
                title={popupData1?.title || "video"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* VIDEO TITLE */}
            <h3 className="mt-4 text-[18px] font-[600] text-[#1E1E1E]">
              {popupData1?.title}
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaContent;