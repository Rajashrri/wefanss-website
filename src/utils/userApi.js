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

export const forgotPasswordApi = (data) => {
  return userApi.post("/forgot-password", data);
};
// ================= VERIFY FORGOT OTP =================
export const verifyForgotOtp = (data) => {
  return userApi.post("/verify-forgot-otp", data);
};
// ================= RESEND FORGOT OTP =================
export const resendForgotOtp = (data) => {
  return userApi.post("/resend-forgot-otp", data);
};
export const resetPasswordApi = (data) => {
  return userApi.post("/reset-password", data);
};

export const changePasswordApi = (data) => {
  return userApi.post(
    "/change-password",
    data
  );
};
export default userApi;