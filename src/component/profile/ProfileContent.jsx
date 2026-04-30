import React from "react";

const ProfileContent = ({ sections }) => {
  return (
    <div className="flex flex-wrap text-[16px] font-[500] text-gray-700 leading-7">
      {sections.map((item, i) => (
        <a href=""
          key={i}
          className="flex items-center primary-font font-[400] text-[14px] text-[#1E1E1E]"
        >
          {item}
          {i !== sections.length - 1 && (
            <span className="mx-1 text-[#D9D9D9]">|</span>
          )}
        </a>
      ))}
    </div>
  );
};

export default ProfileContent;
