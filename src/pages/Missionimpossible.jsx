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

    // 2️⃣ Movies fetch
    const moviesRes = await getMoviesByCelebrityGenre(slug);
    const genresData = moviesRes?.data?.data || [];

    // 3️⃣ Find ONLY ONE Featured Movie
    let featuredMovie = null;

    genresData.forEach((genre) => {
      genre.movies?.forEach((movie) => {
        if (
          movie.featured === 1 &&
          movie.status === 1 &&
          !featuredMovie
        ) {
          featuredMovie = movie;
        }
      });
    });

    // 4️⃣ Dynamic Banner Slider
    const bannerSlider = featuredMovie
      ? [
          {
            id: featuredMovie._id,

            title: featuredMovie.title,

            img: featuredMovie.imagebg
              ? `${import.meta.env.VITE_API_BASE_URL}/moviesbg/${featuredMovie.imagebg}`
              : "/md.png",

            year: featuredMovie.releaseYear || "",

            category:
              featuredMovie.genre
                ?.map((g) => g.name)
                .join(", ") || "",

            language:
              featuredMovie.languages
                ?.map((l) => l.name)
                .filter(Boolean) || [],

            rating: featuredMovie.rating || "",

            platformRating:
              featuredMovie.platformRating || "",

notes: featuredMovie.notes || "",
            cast: featuredMovie.cast || "",

            slug: featuredMovie.slug,
          },
        ]
      : [];

    // 5️⃣ Genre Array
    const genresArray = (genresData || []).filter(
      (g) => g.type === "suggestion"
    );

    // 6️⃣ Final Context
    setContext({
      Contenttype: "Movies",

      slug: slug,

      MoviesSliderdata: {
        type: "banner",
        bannerSlider,
      },

      genres: genresArray,
    });
  } catch (err) {
    console.log("ERROR:", err);
  }
};
  if (!context) return null;

  return <MoviesDetails context={context} />;
};

export default Missionimpossible;