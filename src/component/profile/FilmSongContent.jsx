import React from "react";

const FilmSongContent = ({ items }) => {
  return (
    <div>
      {items?.map((item) => (
        <a href="#!" key={item.id} className="flex gap-3 py-3 items-center">
          <img
            src={item.image}
            alt=""
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <p className="text-[16px] font-[500] text-[#1E1E1E]">
              {item.name}
            </p>
            <p className="text-[12px] primary-font text-[#1E1E1E] font-[400]">
              {item.year || item.subtitle}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default FilmSongContent;
