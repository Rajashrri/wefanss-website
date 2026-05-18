import frontApi from "../utils/frontApi";

export const getCelebrityBySlug = (slug) => {
  return frontApi.get(`/celebrity/${slug}`);
};


