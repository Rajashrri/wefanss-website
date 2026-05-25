import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesDetails from "./MoviesDetails";

import {
  getCelebrityBySlug,
  getMoviesByCelebrityGenre,
} from "../utils/frontApi";

const Missionimpossible = () => {
  const { slug } = useParams();
  const [context, setContext] = useState(null);

  useEffect(() => {
    if (slug) fetchData();
  }, [slug]);

  const fetchData = async () => {
    try {
      // 1️⃣ Celebrity fetch
      const celebrityRes = await getCelebrityBySlug(slug);
      const celebrity = celebrityRes?.data?.data;

      if (!celebrity?._id) return;

      // 2️⃣ Movies fetch (IMPORTANT: SLUG PASS)
      const moviesRes = await getMoviesByCelebrityGenre(slug);
      const genresData = moviesRes?.data?.data || [];

      // 3️⃣ STATIC BANNER (as you want)
      const bannerSlider = [
        {
          id: 1,
          name: "Mission Impossible",
          img: "/md.png",
          year: "2019",
          category: "Thriller",
          language: ["Marathi", "Hindi", "English", "More"],
          rating: [
            {
              img: "/rating/1.png",
              per: 7.2,
              site: "IMDb",
            },
            {
              img: "/rating/2.png",
              per: 7,
              site: "Wefanss",
            },
          ],
          dis: '"Mission Impossible" follows Ethan Hunt...',
          cast: "Alex Carter, Mia Chen, Jordan Lee",
        },
      ];

      // 4️⃣ convert array safely
      const genresArray = (genresData || []).filter(
        (g) => g.type === "suggestion"
      );

      // 5️⃣ FINAL CONTEXT
      setContext({
        Contenttype: "Movies",

        MoviesSliderdata: {
          type: "banner",
          bannerSlider, // STATIC ONLY
        },

        genres: genresArray, // IMPORTANT FIX
      });
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  if (!context) return null;

  return <MoviesDetails context={context} />;
};

export default Missionimpossible;