import React, { useRef, useState, useEffect } from "react";
import FormHeading from "./FormHeading";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  verifyForgotOtp,
  resendForgotOtp,
} from "../../utils/userApi";

const ForgotOtpForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const inputs = useRef([]);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  // ================= EMAIL CHECK =================
  useEffect(() => {
    if (!email) {
      toast.error("Email missing");
      navigate("/forget-password");
    }
  }, [email, navigate]);

  // ================= OTP CHANGE =================
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  // ================= VERIFY OTP =================
  const handleVerify = async (e) => {
    e.preventDefault();

    const finalOtp = otp.join("");

    if (finalOtp.length !== 6) {
      toast.error("Enter 6 digit OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await verifyForgotOtp({
        email,
        otp: finalOtp,
      });

      if (res.data.success) {
        toast.success(res.data.message || "OTP Verified");

        navigate("/reset-password", {
          state: { email },
        });
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // ================= RESEND OTP =================
  const handleResend = async () => {
    try {
      setResendLoading(true);

      const res = await resendForgotOtp({ email });

      if (res.data.success) {
        toast.success(res.data.message || "OTP Sent Again");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed resend");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="col-span-12 md:col-span-6 flex items-center justify-center z-10">

      <div className="bg-white w-full max-w-[500px] p-10 rounded-[16px] shadow-lg text-center">

        <FormHeading title="Forgot Password OTP" />

        <p className="text-gray-500 text-sm mt-2">
          Enter the 6-digit OTP sent to your email
        </p>

        {email && (
          <p className="text-[#0F4F72] font-medium mt-1">
            {email}
          </p>
        )}

        <form onSubmit={handleVerify} className="mt-8">

          {/* OTP INPUTS */}
          <div className="flex justify-center gap-3 mb-8">
            {otp.map((val, index) => (
              <input
                key={index}
                ref={(el) => (inputs.current[index] = el)}
                type="text"
                maxLength="1"
                value={val}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-[50px] h-[50px] text-center text-lg font-semibold bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F4F72]"
              />
            ))}
          </div>

          {/* VERIFY BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0F4F72] text-white py-3 rounded-[8px]"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          {/* RESEND */}
          <div className="mt-5 flex justify-center gap-2">
            <span className="text-sm text-gray-500">
              Didn’t receive code?
            </span>

            <button
              type="button"
              onClick={handleResend}
              disabled={resendLoading}
              className="text-[#0F4F72] font-medium text-sm"
            >
              {resendLoading ? "Sending..." : "Resend"}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default ForgotOtpForm;