import React, { useState } from "react";
import FormHeading from "./FormHeading";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { loginUser,googleLoginUser  } from "../../utils/userApi";
import { GoogleLogin } from "@react-oauth/google";

const Loginform = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //google login

 const handleSuccess = async (credentialResponse) => {
  try {
    const res = await googleLoginUser({
      credential: credentialResponse.credential,
    });

    toast.success(res.data.message);

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    window.location.href = "/profile";

  } catch (error) {

    const data = error?.response?.data;

    if (data?.needRegister) {
      toast.error("Please register first");
      setTimeout(() => {
        navigate("/register");
      }, 1500);
      return;
    }

    toast.error(
      data?.message || "Google login failed"
    );
  }
};

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // ================= VALIDATION =================
  const validateForm = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password =
        "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });

     if (response.data.success) {
  localStorage.setItem(
    "token",
    response.data.token
  );

  localStorage.setItem(
    "user",
    JSON.stringify(response.data.user)
  );

  toast.success(
    response.data.message
  );

  setTimeout(() => {
    window.location.href =
      "/user-dashboard";
  }, 1500);
}
    } catch (error) {
      console.log(error);

      // ================= VERIFY REQUIRED =================
      if (
        error?.response?.data
          ?.verifyRequired
      ) {
        toast.error(
          "Please complete registration and OTP verification"
        );

        setTimeout(() => {
          navigate("/register", {
            state: {
              email: formData.email,
            },
          });
        }, 1500);

        return;
      }

      toast.error(
        error?.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:col-span-6 col-span-12 relative flex justify-center items-center rounded-[16px] md:px-[80px] px-[0px] overflow-hidden">
      <div className="bg-[#fff] p-10 rounded-[16px] text-center w-full md:my-[150px] my-[40px]">
        <FormHeading title="Login" />

        <form
          className="mt-6"
          onSubmit={handleSubmit}
        >
          {/* EMAIL */}
          <div className="flex flex-col text-left">
            <label className="dm-sans text-[16px] text-[#374151] font-[600] mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="abc@gmail.com"
              className="border-[#D9D9D9] border bg-[#F9FAFB] rounded-[8px] p-3 focus:outline-none"
            />

            {errors.email && (
              <p className="text-red-500 text-[14px] mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="flex flex-col text-left mt-6">
            <label className="dm-sans text-[16px] text-[#374151] font-[600] mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="border-[#D9D9D9] border bg-[#F9FAFB] rounded-[8px] p-3 focus:outline-none"
            />

            {errors.password && (
              <p className="text-red-500 text-[14px] mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* REMEMBER */}
          <div className="flex justify-between items-center mt-3">
            <span className="poppins text-[14px] font-[400] flex justify-center gap-1">
              <input type="checkbox" />
              Remember me
            </span>

            <Link
              to="/forget-password"
              className="primary-font text-[#0F4F72] text-[14px] font-[500]"
            >
              Forgot password?
            </Link>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0F4F72] text-white h-[56px] rounded-[8px] mt-8"
          >
            {loading
              ? "Please wait..."
              : "Log In"}
          </button>

          <div className="flex justify-center items-center gap-3 mt-8">
            <span className="primary-font text-[#6B7280] text-[14px] font-[400] flex justify-center gap-1">
              Don't have an account?
            </span>

            <Link
              to="/register"
              className="primary-font text-[#0F4F72] text-[14px] font-[500]"
            >
              Register
            </Link>
          </div>

         <div className="mt-8 flex justify-center">
  <GoogleLogin
    onSuccess={handleSuccess}
    onError={() => toast.error("Google Login Failed")}
  />
</div>
        </form>
      </div>
    </div>
  );
};

export default Loginform;