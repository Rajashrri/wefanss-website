import axios from "axios";

const userloginApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/userlogin`,
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ================= REGISTER =================
export const registerUser = (data) => {
  return userloginApi.post("/register", data);
};

// ================= VERIFY OTP =================
export const verifyRegisterOtp = (data) => {
  return userloginApi.post("/verify-register-otp", data);
};
export const resendRegisterOtp = (data) => {
  return userloginApi.post(
    "/resend-register-otp",
    data
  );
};

// ================= LOGIN =================
export const loginUser = (data) => {
  return userloginApi.post("/login", data);
};


// Google Login API
export const googleLoginUser = (data) => {
  return userloginApi.post("/google-login", data);
};

export const forgotPasswordApi = (data) => {
  return userloginApi.post("/forgot-password", data);
};
// ================= VERIFY FORGOT OTP =================
export const verifyForgotOtp = (data) => {
  return userloginApi.post("/verify-forgot-otp", data);
};
// ================= RESEND FORGOT OTP =================
export const resendForgotOtp = (data) => {
  return userloginApi.post("/resend-forgot-otp", data);
};
export const resetPasswordApi = (data) => {
  return userloginApi.post("/reset-password", data);
};

export const changePasswordApi = (data) => {
  return userloginApi.post(
    "/change-password",
    data
  );
};


// -------------------------------------- login flow complete --------------------


// -------------------------------------- user dashboard -------------------------------------------------------------------------------


export const getSavedCountApi = (userId) => {
  return userloginApi.get(
    `/saved-count/${userId}`
  );
};
  

export const getFollowedCountApi = (userId) => {
  return userloginApi.get(
    `followed-count/${userId}`
  );
};
export default userloginApi;