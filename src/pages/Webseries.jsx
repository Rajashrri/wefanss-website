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
  // ✅ loading state
  const [loading, setLoading] = useState(true);

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

  if (!celebrity?._id) {
        setLoading(false);
        return;
      }

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
    } finally {
      setLoading(false);
    }
  };

  // ✅ Loader
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[24px]">
        Loading...
      </div>
    );
  }

  // ✅ No Series Found
  if (
    !context ||
    !context?.genres ||
    context.genres.length === 0
  ) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[28px] berlin">
        No Web Series Found
      </div>
    );
  }
  return <MoviesDetails context={context} />;
};

export default Webseries;