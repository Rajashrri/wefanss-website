import axios from "axios";

const userApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/user`,
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
  },
});


// -------------------------------------- user dashboard -------------------------------------------------------------------------------


export const getSavedCountApi = (userId) => {
  return userApi.get(
    `/saved-count/${userId}`
  );
};
  

export const getFollowedCountApi = (userId) => {
  return userApi.get(
    `followed-count/${userId}`
  );
};


// ================= FOLLOWED CELEBRITIES =================

export const getFollowedCelebrities = (userId) => {
  return userApi.get(`/follow/followed/${userId}`);
};

export const getFollowedCelebritiesall = (userId) => {
  return userApi.get(`/allfollowed/${userId}`);
};

// ================= RECENT VIEW =================

export const addRecentView = (data, token) => {
  return userApi.post(
    "/recent-view/add",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getRecentViews = (userId) => {
  return userApi.get(`/recent-view/${userId}`);
};

export const getHomeCollections =
  (userId) => {
    return userApi.get(
      `/collectionhome/${userId}`
    );
  };

  export const getUserCollections = (
  userId
) => {
  return userApi.get(
    `allcollection/${userId}`
  );
};
export const getCollectionDetails =
  (slug) => {
    return userApi.get(
      `/collection-details/${slug}`
    );
  };


  // ================= PROFILE =================

export const getProfile = (userId) => {
  return userApi.get(`/profile/${userId}`);
};
export const updateProfile = (userId, data) => {
  return userApi.patch(
    `/profile/update/${userId}`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export default userApi;