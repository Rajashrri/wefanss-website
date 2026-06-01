import React, { useState } from "react";
import FormHeading from "./FormHeading";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../utils/userloginApi";
import toast from "react-hot-toast";
const Signupform = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
 // ================= VALIDATION =================
const validateForm = () => {
  let newErrors = {};

  // NAME
  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  // EMAIL
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  }

  // PASSWORD
  if (!formData.password.trim()) {
    newErrors.password =
      "Password is required";
  } else {
    // Minimum 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (
      !passwordRegex.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must be 8+ characters and include uppercase, lowercase, number & special character";
    }
  }

  // CONFIRM PASSWORD
  if (!formData.confirmPassword.trim()) {
    newErrors.confirmPassword =
      "Confirm Password is required";
  }

  // MATCH CHECK
  if (
    formData.password &&
    formData.confirmPassword &&
    formData.password !==
      formData.confirmPassword
  ) {
    newErrors.confirmPassword =
      "Passwords do not match";
  }

  setErrors(newErrors);

  return (
    Object.keys(newErrors).length === 0
  );
};

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

     if (response.data.success) {
  toast.success(
    response.data.message ||
      "Registration successful"
  );

  setTimeout(() => {
    navigate("/otp", {
      state: {
        email: formData.email,
      },
    });
  }, 1500);
}
    } catch (error) {
      console.log(error);

   toast.error(
  error?.response?.data?.message ||
    "Registration failed"
);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:col-span-6 col-span-12 relative flex justify-center items-center rounded-[16px] md:px-[80px] px-[0px] overflow-hidden">
      <div className="bg-[#fff] p-10 rounded-[16px] text-center w-full md:my-[150px] my-[40px]">
        <FormHeading title="Register" />

        <form className="mt-6" onSubmit={handleSubmit}>
          {/* ================= NAME ================= */}
          <div className="flex flex-col text-left">
            <label className="dm-sans text-[16px] text-[#374151] font-[600] mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="border-[#D9D9D9] border bg-[#F9FAFB] rounded-[8px] p-3 focus:outline-none"
            />

            {errors.name && (
              <p className="text-red-500 text-[14px] mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* ================= EMAIL ================= */}
          <div className="flex flex-col text-left mt-6">
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

          {/* ================= PASSWORD ================= */}
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

          {/* ================= CONFIRM PASSWORD ================= */}
          <div className="flex flex-col text-left mt-6">
            <label className="dm-sans text-[16px] text-[#374151] font-[600] mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className="border-[#D9D9D9] border bg-[#F9FAFB] rounded-[8px] p-3 focus:outline-none"
            />

            {errors.confirmPassword && (
              <p className="text-red-500 text-[14px] mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* ================= API ERROR ================= */}
          {errors.api && (
            <p className="text-red-500 text-[14px] mt-4 text-left">
              {errors.api}
            </p>
          )}

          {/* ================= BUTTON ================= */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0F4F72] text-white h-[56px] rounded-[8px] mt-8"
            >
              {loading ? "Please wait..." : "Register"}
            </button>

            <div className="flex justify-center items-center gap-3 mt-8">
              <Link className="primary-font text-[#6B7280] text-[14px] font-[400] flex justify-center gap-1">
                Already have an account?
              </Link>

              <Link
                to="/login"
                className="primary-font text-[#0F4F72] text-[14px] font-[500]"
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signupform;