import React, { useState, useEffect } from "react";
import FormHeading from "./FormHeading";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { resetPasswordApi } from "../../utils/userApi";

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  // ================= CHECK EMAIL =================
  useEffect(() => {
    if (!email) {
      toast.error("Email missing");
      navigate("/forget-password");
    }
  }, [email, navigate]);

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await resetPasswordApi({
        email,
        password,
        confirmPassword,
      });

      if (res.data.success) {
        toast.success(
          res.data.message || "Password reset successful"
        );

        navigate("/login");
      }

    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          "Failed to reset password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-span-12 md:col-span-6 flex items-center justify-center px-4 z-10">

      <div className="bg-white w-full max-w-[500px] p-10 rounded-[16px] shadow-lg">

        <FormHeading title="Reset Password" />

        <p className="text-gray-500 text-sm mt-2 text-center">
          Create your new password
        </p>

        {email && (
          <p className="text-[#0F4F72] font-medium text-center mt-1">
            {email}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8"
        >

          {/* NEW PASSWORD */}
          <div className="flex flex-col text-left">
            <label className="text-[15px] font-[500] mb-2">
              New Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter new password"
              className="border border-[#D9D9D9] bg-[#F9FAFB] rounded-[8px] p-3 focus:outline-none focus:ring-2 focus:ring-[#0F4F72]"
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="flex flex-col text-left mt-5">
            <label className="text-[15px] font-[500] mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              placeholder="Confirm password"
              className="border border-[#D9D9D9] bg-[#F9FAFB] rounded-[8px] p-3 focus:outline-none focus:ring-2 focus:ring-[#0F4F72]"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0F4F72] text-white py-3 rounded-[8px] mt-8 hover:bg-[#0c3f5b] transition-all duration-300"
          >
            {loading ? "Updating..." : "Reset Password"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;