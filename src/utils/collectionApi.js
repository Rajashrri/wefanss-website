import axios from "axios";

const collectionApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/collection`,
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
  },
});

// CREATE COLLECTION
export const createCollectionApi = (
  data,
  token
) => {
  return collectionApi.post(
    "/create",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// GET COLLECTIONS
export const getUserCollections = (
  userId
) => {
  return collectionApi.get(
    `/${userId}`
  );
};

// SAVE CELEBRITY
export const saveToCollectionApi = (
  data,
  token
) => {
  return collectionApi.post(
    "/save",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export default collectionApi;