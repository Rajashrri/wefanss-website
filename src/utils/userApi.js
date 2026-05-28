import axios from "axios";

const userApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/user`,
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ================= REGISTER =================
export const registerUser = (data) => {
  return userApi.post("/register", data);
};

// ================= VERIFY OTP =================
export const verifyRegisterOtp = (data) => {
  return userApi.post("/verify-register-otp", data);
};
export const resendRegisterOtp = (data) => {
  return userApi.post(
    "/resend-register-otp",
    data
  );
};

// ================= LOGIN =================
export const loginUser = (data) => {
  return userApi.post("/login", data);
};


// Google Login API
export const googleLoginUser = (data) => {
  return userApi.post("/google-login", data);
};
export default userApi;