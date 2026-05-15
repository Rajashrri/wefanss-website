import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Trivia = () => {


  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Filter");

  const dropdownRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const options = [
    "Filter",
    "Filter",
    "Filter",
    "Filter"
  ];
  return (
    <div className="mt-4 md:overflow-y-auto h-screen  no-scrollbar">
       {/* ✅ CUSTOM SELECT */}
      <div className="filter relative w-fit mb-[24px]" ref={dropdownRef}>
        
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#4285F4] px-[24px] hover:cursor-pointer py-[12px]  primary-font font-semibold text-white rounded-[8px] flex items-center"
        >
          {selected}
          <svg
            className={`ms-[8px] transition-transform ${open ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M4.79883 12L9.59883 7.2L14.3988 12" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dropdown */}
        {open && (
          <ul className="absolute left-0 mt-2 p-1 w-full bg-white rounded-[8px] shadow-lg overflow-hidden z-50">
            {options.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelected(item);
                  setOpen(false);
                }}
                className="bg-[#fff] px-[24px] py-[12px] berlin text-[16px] font-[300] hover:bg-[#F4FBFF] text-center hover:cursor-pointer flex justify-center text-[#000] rounded-[8px] flex items-center"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
       

      <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">
        Personal Life
      </h3>
      <h4 className="primary-font text-[16px] font-[500] text-[#1E1E1E] my-2">Worked as a chef in resturant in Bankok</h4>
      <p className="text-[14px] font-[400] primary-font mt-3 leading-relaxed">Kumar made his first appearance as the lead actor  <br /> opposite Raakhee and Shantipriya in Saugandh (1991). In the same year, he acted in Kishore Vyas-directed Dancer, which received poor reviews.[36] The following year he starred in Abbas Mustan-directed suspense thriller, Khiladi, widely considered his breakthrough role.[37][38] A review in The Indian Express called the film "an engrossing thriller" and described in the lead part, noting his physical appearance, strong screen presence, and commending him for being "perfectly at ease".[39] His next release was the Raj Sippy-directed detective film Mr. Bond, based on James Bond.[40] His last release of 1992 was Deedar. It failed to perform well at the box office.</p>
       <hr className="my-4 text-[#4285F429]" />
           <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">
        Movies
      </h3>
      <h4 className="primary-font text-[16px] font-[500] text-[#1E1E1E] my-2">Worked as a chef in resturant in Bankok</h4>
       <p className="text-[14px] font-[400] primary-font mt-3 leading-relaxed">Kumar made his first appearance as the lead actor opposite Raakhee and Shantipriya in Saugandh (1991). In the same year, he acted in Kishore Vyas-directed Dancer, which received poor reviews.[36] The following year he starred in Abbas Mustan-directed suspense thriller, Khiladi, widely considered his breakthrough role.[37][38] A review in The Indian Express called the film "an engrossing thriller" and described  in the lead part, noting his physical appearance, strong screen presence, and commending him for being "perfectly at ease".[39] His next release was the Raj Sippy-directed detective film Mr. Bond, based on James Bond.[40] His last release of 1992 was Deedar. It failed to perform well at the box office.</p>
          <hr className="my-4 text-[#4285F429]" />
       <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">
        Personal Life
      </h3>
      <h4 className="primary-font text-[16px] font-[500] text-[#1E1E1E] my-2">Worked as a chef in resturant in Bankok</h4>
      <p className="text-[14px] font-[400] primary-font mt-3 leading-relaxed">Kumar made his first appearance as the lead actor  <br /> opposite Raakhee and Shantipriya in Saugandh (1991). In the same year, he acted in Kishore Vyas-directed Dancer, which received poor reviews.[36] The following year he starred in Abbas Mustan-directed suspense thriller, Khiladi, widely considered his breakthrough role.[37][38] A review in The Indian Express called the film "an engrossing thriller" and described in the lead part, noting his physical appearance, strong screen presence, and commending him for being "perfectly at ease".[39] His next release was the Raj Sippy-directed detective film Mr. Bond, based on James Bond.[40] His last release of 1992 was Deedar. It failed to perform well at the box office.</p>
       <hr className="my-4 text-[#4285F429]" />
           <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">
        Movies
      </h3>
      <h4 className="primary-font text-[16px] font-[500] text-[#1E1E1E] my-2">Worked as a chef in resturant in Bankok</h4>
       <p className="text-[14px] font-[400] primary-font mt-3 leading-relaxed">Kumar made his first appearance as the lead actor opposite Raakhee and Shantipriya in Saugandh (1991). In the same year, he acted in Kishore Vyas-directed Dancer, which received poor reviews.[36] The following year he starred in Abbas Mustan-directed suspense thriller, Khiladi, widely considered his breakthrough role.[37][38] A review in The Indian Express called the film "an engrossing thriller" and described  in the lead part, noting his physical appearance, strong screen presence, and commending him for being "perfectly at ease".[39] His next release was the Raj Sippy-directed detective film Mr. Bond, based on James Bond.[40] His last release of 1992 was Deedar. It failed to perform well at the box office.</p>
          <hr className="my-4 text-[#4285F429]" />
       <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">
        Personal Life
      </h3>
      <h4 className="primary-font text-[16px] font-[500] text-[#1E1E1E] my-2">Worked as a chef in resturant in Bankok</h4>
      <p className="text-[14px] font-[400] primary-font mt-3 leading-relaxed">Kumar made his first appearance as the lead actor  <br /> opposite Raakhee and Shantipriya in Saugandh (1991). In the same year, he acted in Kishore Vyas-directed Dancer, which received poor reviews.[36] The following year he starred in Abbas Mustan-directed suspense thriller, Khiladi, widely considered his breakthrough role.[37][38] A review in The Indian Express called the film "an engrossing thriller" and described in the lead part, noting his physical appearance, strong screen presence, and commending him for being "perfectly at ease".[39] His next release was the Raj Sippy-directed detective film Mr. Bond, based on James Bond.[40] His last release of 1992 was Deedar. It failed to perform well at the box office.</p>
       <hr className="my-4 text-[#4285F429]" />
           <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">
        Movies
      </h3>
      <h4 className="primary-font text-[16px] font-[500] text-[#1E1E1E] my-2">Worked as a chef in resturant in Bankok</h4>
       <p className="text-[14px] font-[400] primary-font mt-3 leading-relaxed">Kumar made his first appearance as the lead actor opposite Raakhee and Shantipriya in Saugandh (1991). In the same year, he acted in Kishore Vyas-directed Dancer, which received poor reviews.[36] The following year he starred in Abbas Mustan-directed suspense thriller, Khiladi, widely considered his breakthrough role.[37][38] A review in The Indian Express called the film "an engrossing thriller" and described  in the lead part, noting his physical appearance, strong screen presence, and commending him for being "perfectly at ease".[39] His next release was the Raj Sippy-directed detective film Mr. Bond, based on James Bond.[40] His last release of 1992 was Deedar. It failed to perform well at the box office.</p>
    </div>
  );
};

export default Trivia;
