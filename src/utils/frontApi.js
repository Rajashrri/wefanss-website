import axios from "axios";

// =====================================
// FRONTEND PUBLIC API CLIENT
// File: src/utils/frontApi.js
// =====================================

const frontApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/front`,

  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

export const getCelebrityBySlug = (slug) => {
  return frontApi.get(`/celebrity/${slug}`);
};

// =====================================
// RESPONSE INTERCEPTOR
// =====================================

frontApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error("❌ Network Error:", error.message);
      error.message = "Network error. Please check internet connection.";
    }

    if (error.response?.status === 404) {
      console.error("❌ API Not Found");
    }

    if (error.response?.status === 500) {
      console.error("❌ Server Error");
    }

    return Promise.reject(error);
  }
);

// ✅ get timeline by celebrity id
export const getTimelineByCelebrity = (celebrityId) => {
  return frontApi.get(`/timeline/${celebrityId}`);
};
// ✅ get trivia by celebrity
export const getTriviaByCelebrity = (celebrityId) => {
  return frontApi.get(`/trivia/${celebrityId}`);
};

export const getReferencesByCelebrity = (id) => {
  return frontApi.get(`/references/${id}`);
};

export const getRelatedPersonalitiesByCelebrity = (id) => {
  return frontApi.get(`/related-personalities/${id}`);
};

export const getFeaturedMoviesByCelebrity = (celebrityId) => {
  return frontApi.get(`/featured-movies/${celebrityId}`);
};
export const getFeaturedSeriesByCelebrity = (celebrityId) => {
  return frontApi.get(`/featured-series/${celebrityId}`);
};
export default frontApi;