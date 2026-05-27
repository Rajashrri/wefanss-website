import React, { useRef, useState,useEffect } from "react";
import FormHeading from "./FormHeading";
import Authbtn from "./Authbtn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  verifyRegisterOtp,
  resendRegisterOtp,
} from "../../utils/userApi";
const Otpform = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  // ================= REDIRECT IF NO EMAIL =================
  useEffect(() => {

    if (!email) {

      toast.error(
        "Please register first"
      );

      navigate("/register");

    }

  }, [email, navigate]);

  const inputs = useRef([]);

  const [loading, setLoading] = useState(false);

const [resendLoading, setResendLoading] =
  useState(false);

  const [otp, setOtp] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  // ================= HANDLE CHANGE =================
  const handleChange = (e, index) => {
    const value = e.target.value;

    // only numbers
    if (!/^\d*$/.test(value)) return;

    const updatedOtp = [...otp];

    updatedOtp[index] = value;

    setOtp(updatedOtp);

    // next focus
    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  // ================= HANDLE BACKSPACE =================
  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputs.current[index - 1].focus();
    }
  };



  const handleResendOtp = async () => {
  try {
    setResendLoading(true);

    const response =
      await resendRegisterOtp({
        email,
      });

    if (response.data.success) {
      toast.success(response.data.message);
    }
  } catch (error) {
    toast.error(
      error?.response?.data?.message ||
        "Failed to resend OTP"
    );
  } finally {
    setResendLoading(false);
  }
};
  // ================= VERIFY OTP =================
  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    const finalOtp = otp.join("");

    if (finalOtp.length !== 6) {
      toast.error("Please enter complete OTP");
      return;
    }

    try {
      setLoading(true);

      const response = await verifyRegisterOtp({
        email,
        otp: finalOtp,
      });

      if (response.data.success) {
        toast.success(
          response.data.message ||
            "OTP verified successfully"
        );

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.message ||
          "OTP verification failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:col-span-6 col-span-12 relative flex justify-center items-center rounded-[16px] md:px-[80px] px-[0px] overflow-hidden">
      <div className="bg-[#fff] p-10 rounded-[16px] text-center w-full md:my-[150px] my-[40px] shadow-lg">
        <FormHeading title="Enter verification code" />

        <p className="text-[#6B7280] text-[14px] mt-2">
          We sent a 6-digit code to your email
        </p>

        {email && (
          <p className="text-[#0F4F72] text-[14px] mt-1 font-[500]">
            {email}
          </p>
        )}

        <form
          className="mt-8"
          onSubmit={handleVerifyOtp}
        >
          {/* OTP BOXES */}
          <div className="flex justify-center gap-3 mb-8">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={otp[index]}
                ref={(el) =>
                  (inputs.current[index] = el)
                }
                onChange={(e) =>
                  handleChange(e, index)
                }
                onKeyDown={(e) =>
                  handleKeyDown(e, index)
                }
                className="w-[50px] h-[50px] text-center text-[18px] font-[600] 
                           bg-[#F3F4F6] rounded-[8px] 
                           focus:outline-none focus:ring-2 focus:ring-[#3B82F6] 
                           transition-all duration-200"
              />
            ))}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0F4F72] text-white h-[56px] rounded-[8px]"
          >
            {loading ? "Please wait..." : "Verify"}
          </button>

          {/* RESEND */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <span className="text-[#6B7280] text-[14px]">
              Didn’t receive the code?
            </span>
<button
  type="button"
  onClick={handleResendOtp}
  disabled={resendLoading}
  className="text-[#3B82F6] text-[14px] font-[500]"
>
  {resendLoading
    ? "Sending..."
    : "Resend"}
</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Otpform;