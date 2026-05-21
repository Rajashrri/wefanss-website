import React from "react";

const ListenCard = ({ listen }) => {

  // ✅ Platform Icon
  const getPlatformIcon = (platform) => {
    if (!platform) return "/rm.png";

    const name = platform.toLowerCase();

    if (name.includes("youtube")) {
      return "/yt.png";
    }

    if (name.includes("spotify")) {
      return "/sf.png";
    }

    if (
      name.includes("itunes") ||
      name.includes("apple")
    ) {
      return "/apple.png";
    }

    if (name.includes("gaana")) {
      return "/gaana.png";
    }

    if (name.includes("jiosaavn")) {
      return "/jio.png";
    }

    return "/rm.png";
  };

  return (
    <a
      href={listen.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-all duration-500 w-[100%] block ${listen.cardclass}`}
    >
      <div className="relative sldieimh rounded-[8px] overflow-hidden">
        <img
          src={listen.img}
          alt={listen.title}
          className="h-full w-full object-cover rounded-[8px]"
        />
      </div>

      <div className="flex gap-y-9 flex-col items-left justify-between mt-3">

        <div>
          <h4 className="text-[#B3B3B3] text-[12px]">
            {listen.time}
          </h4>

          <h3 className="text-[16px] mt-3 text-[#1E1E1E] font-[400] berlin">
            {listen.title}
          </h3>
        </div>

        {/* ✅ Dynamic Platform Icon */}
        <div className="flex gap-3 items-center">

          <img
            src={getPlatformIcon(listen.platform)}
            alt={listen.platform}
            className="w-[30px] h-[30px] object-contain"
          />

          <span className="text-[14px] text-[#757575]">
            {listen.platform}
          </span>

        </div>

      </div>
    </a>
  );
};

export default ListenCard;