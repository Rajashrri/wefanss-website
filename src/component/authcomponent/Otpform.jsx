import React, { useRef } from "react";
import FormHeading from "./FormHeading";
import Authbtn from "./Authbtn";
import { Link } from "react-router-dom";

const Otpform = () => {

  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (value.length === 1 && index < 5) {
      inputs.current[index + 1].focus();
    }

    if (value.length === 0 && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div className="md:col-span-6 col-span-12 relative flex justify-center items-center rounded-[16px] md:px-[80px] px-[0px] overflow-hidden">
      <div className="bg-[#fff] p-10 rounded-[16px] text-center w-full md:my-[150px] my-[40px] shadow-lg">
        
        <FormHeading title="Enter verification code" />

        <p className="text-[#6B7280] text-[14px] mt-2">
          We sent a 6-digit code to your email
        </p>

        <form className="mt-8">

          {/* OTP Boxes */}
          <div className="flex justify-center gap-3 mb-8">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                ref={(el) => (inputs.current[index] = el)}
                onChange={(e) => handleChange(e, index)}
                className="w-[50px] h-[50px] text-center text-[18px] font-[600] 
                           bg-[#F3F4F6] rounded-[8px] 
                           focus:outline-none focus:ring-2 focus:ring-[#3B82F6] 
                           transition-all duration-200"
              />
            ))}
          </div>

          {/* Button */}
          <Authbtn href="/" btntext="Verify" className="w-full" />

          {/* Resend Section */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <span className="text-[#6B7280] text-[14px]">
              Didn’t receive the code?
            </span>
            <Link className="text-[#3B82F6] text-[14px] font-[500]">
              Resend
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Otpform;