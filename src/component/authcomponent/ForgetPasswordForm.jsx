import React, { useState } from "react";
import FormHeading from "./FormHeading";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { forgotPasswordApi } from "../../utils/userloginApi";

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    try {
      setLoading(true);

      const res = await forgotPasswordApi({ email });

      if (res.data.success) {
        toast.success(res.data.message);

        navigate("/forgototp", {
          state: { email },
        });
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:col-span-6 col-span-12 flex items-center justify-center relative z-10">

      <div className="bg-white p-10 rounded-[16px] w-full max-w-[450px] text-center shadow-lg">

        <FormHeading title="Forgot Password" />

        <form className="mt-6" onSubmit={handleSubmit}>

          {/* EMAIL */}
          <div className="flex flex-col text-left">
            <label className="text-[16px] font-[600] mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              className="border border-[#D9D9D9] bg-[#F9FAFB] rounded-[8px] p-3 focus:outline-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full bg-[#0F4F72] text-white p-3 rounded-[8px]"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;