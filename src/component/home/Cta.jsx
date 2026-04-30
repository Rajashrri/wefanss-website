import React from "react";
// import mic from ""; // replace with your microphone image path

export default function CtaSection() {
  return (
   
      <div className="max-w-[1337px] px-5 m-auto w-full flex items-center gap-0">

        {/* LEFT TEXT */}
        <div className="md:w-[40%] w-[60%]">
          <h1 className="berlin text-[#4285F4] md:text-[48px] text-[24px] font-[400]">
            Lorem ipsum dolor sit phasellus id molestie ultrices at.
            Molestie at
          </h1>
          <h1 className="berlin md:hidden block text-[#4285F4] md:text-[48px] text-[24px] font-[400] mb-10">
            amet consectetur. Morbi ultrices at. Molestie at Molestie at
          </h1>

          <button className="border md:hidden block border-[1px] border-[#4285F4] text-[#4285F4] text-[16px] font-[600] px-6 py-2 rounded primary-font hover:bg-[#4285F4] hover:text-white transition">
            Know More
          </button>
        </div>

        {/* CENTER IMAGE */}
        <div className="md:w-[20%] w-[40%]">
          <img
            src="/mic.png"
            alt="Microphone"
            className=" object-contain h-[400px]"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="md:w-[40%] md:block hidden">
          <h1 className="berlin text-[#4285F4] md:text-[48px] text-[24px] font-[400] mb-18">
            amet consectetur. Morbi ultrices at. Molestie at Molestie at
          </h1>

          <button className="border border-[1px] border-[#4285F4] text-[#4285F4] text-[16px] font-[600] px-6 py-2 rounded primary-font hover:bg-[#4285F4] hover:text-white transition">
            Know More
          </button>
        </div>

      </div>
  
  );
}
