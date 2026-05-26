import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesDetails from "./MoviesDetails";

import {
  getCelebrityBySlug,
  getSeriesByCelebrityGenre,
  getFeaturedSeriesByCelebrity2,
} from "../utils/frontApi";

const Webseries = () => {
  const { slug } = useParams();
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const [context, setContext] = useState(null);

  useEffect(() => {
    if (slug) {
      fetchData();
    }
  }, [slug]);

  const fetchData = async () => {
    try {
      // celebrity
      const celebrityRes = await getCelebrityBySlug(slug);

      const celebrity = celebrityRes?.data?.data;

      if (!celebrity?._id) return;

      // featured series
      const featuredRes = await getFeaturedSeriesByCelebrity2(
        celebrity._id
      );

      const featuredData = featuredRes?.data?.data || [];

      // genre series
      const seriesRes = await getSeriesByCelebrityGenre(slug);

      const genresData = seriesRes?.data?.data || [];

      // dynamic banner
    const bannerSlider = featuredData.map((item) => ({
  id: item._id,
  _id: item._id,

  name: item.title,
  title: item.title,

  img: item.image
    ? `${API_BASE}/series/${item.image}`
    : "/md.png",

 imagebg: item.imagebg
    ? `${API_BASE}/series/${item.imagebg}`
    : "/md.png",



  year: item.start_year,

  category:
    item.genre?.map((g) => g.name).join(", ") || "",

  language:
    item.languages?.map((l) => l.name) || [],

  statusseries: item.statusseries,

  platform: item.platform,

  desc: item.notes,

  // ✅ IMPORTANT
  seasons: item.seasons || [],

  rating: [
    {
      img: "/rating/1.png",
      per: 7.2,
      site: "IMDb",
    },
  ],

  cast: "",
}));

      // dynamic genres
      const genresArray = genresData.filter(
        (g) => g.type === "suggestion"
      );

      setContext({
        Contenttype: "Webseries",

        slug: slug,

        MoviesSliderdata: {
          type: "banner",
          bannerSlider,
        },

        genres: genresArray,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!context) return null;

  return <MoviesDetails context={context} />;
};

export default Webseries;