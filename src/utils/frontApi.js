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
  },
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
export const getLatestWatchByCelebrity = async (id) => {
  return frontApi.get(`/latest-watch/${id}`);
};
export const getLatestReadByCelebrity = async (id) => {
  return frontApi.get(`/latest-read/${id}`);
};

export const getLatestListenByCelebrity = async (id) => {
  return frontApi.get(`/latest-listen/${id}`);
};


export const getProfession = async () => {
  return await frontApi.get(`/profession`);
};
//watch all

export const getWatchByCelebrity = (id) => {
  return frontApi.get(`/watch/${id}`);
};

export const getReadByCelebrity = (id) => {
  return frontApi.get(`/read/${id}`);
};
export const getListenByCelebrity = (id) => {
  return frontApi.get(`/listen/${id}`);
};

export const getLatestElectionByCelebrity = (id) => {
  return frontApi.get(`/latest-election/${id}`);
};
// utils/frontApi.js

export const getLatestPositionByCelebrity = (id) => {
  return frontApi.get(`/latest-position/${id}`);
};

//elections page

export const getElectionByCelebrity = (celebrityId) => {
  return frontApi.get(`/election/${celebrityId}`);
};
//possion
export const getPossitionByCelebrity = (celebrityId) => {
  return frontApi.get(`/possition/${celebrityId}`);
};
export const getMoviesByCelebrityGenre = (slug) => {
  return frontApi.get(`/movies-by-genre/${slug}`);
};

export const getSeriesByCelebrityGenre = async (slug) => {

  return frontApi.get(`/series-by-celebrity-genre/${slug}`);
};
export const getFeaturedSeriesByCelebrity2 = (celebrityId) => {
  return frontApi.get(`/featured-series2/${celebrityId}`);
};


// ✅ create follow
export const createFollow = (data, token) => {
  return frontApi.post("/follow/create", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// ✅ check follow status
export const checkFollowStatus = (userId, celebrityId) => {
  return frontApi.get(`/follow/check/${userId}/${celebrityId}`);
};

export const unfollowCelebrity = (userId, celebrityId, token) => {
  return frontApi.delete(
    `/follow/unfollow/${userId}/${celebrityId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};



export default frontApi;
