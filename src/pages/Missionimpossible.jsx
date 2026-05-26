import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesDetails from "./MoviesDetails";

import {
  getCelebrityBySlug,
  getMoviesByCelebrityGenre,
} from "../utils/frontApi";

const Missionimpossible = () => {
  const { slug } = useParams();

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const [context, setContext] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) fetchData();
  }, [slug]);

  const fetchData = async () => {
    try {
      setLoading(true);

      // celebrity
      const celebrityRes = await getCelebrityBySlug(slug);

      const celebrity = celebrityRes?.data?.data;

      if (!celebrity?._id) {
        setContext(null);
        return;
      }

      // movies
      const moviesRes = await getMoviesByCelebrityGenre(slug);

      const genresData = moviesRes?.data?.data || [];

      // featured movie latest 1
      let featuredMovie = null;

      genresData.forEach((genre) => {
        genre.movies?.forEach((movie) => {
          if (
            movie.featured === 1 &&
            movie.status === "1" &&
            !featuredMovie
          ) {
            featuredMovie = movie;
          }
        });
      });

      // dynamic banner
      const bannerSlider = featuredMovie
        ? [
            {
              id: featuredMovie._id,
              _id: featuredMovie._id,

              title: featuredMovie.title,
              name: featuredMovie.title,

              img: featuredMovie.image
                ? `${API_BASE}/movies/${featuredMovie.image}`
                : "/md.png",

              imagebg: featuredMovie.imagebg
                ? `${API_BASE}/moviesbg/${featuredMovie.imagebg}`
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

              platform: featuredMovie.platform || "",

              desc: featuredMovie.notes || "",

              cast: featuredMovie.cast || "",

              rating: [
                {
                  img: "/rating/1.png",
                  per: featuredMovie.rating || 7.2,
                  site: "IMDb",
                },
              ],
            },
          ]
        : [];

      // genres
      const genresArray = genresData.filter(
        (g) => g.type === "suggestion"
      );

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
    } finally {
      setLoading(false);
    }
  };

  // loader
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-[22px]">
        Loading...
      </div>
    );
  }

  // no data
  if (
    !context ||
    (!context?.MoviesSliderdata?.bannerSlider?.length &&
      !context?.genres?.length)
  ) {
    return (
      <div className="h-screen flex items-center justify-center text-[22px]">
        Movies Not Found
      </div>
    );
  }

  return <MoviesDetails context={context} />;
};

export default Missionimpossible;