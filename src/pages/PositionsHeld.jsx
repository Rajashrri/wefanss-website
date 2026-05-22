import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import MoviesDetails from "./MoviesDetails";

import { getCelebrityBySlug } from "../utils/frontApi";

const PositionsHeld = () => {
  const { slug } = useParams();

  console.log("URL SLUG =>", slug);

  const [celebrityData, setCelebrityData] = useState(null);

  useEffect(() => {
    if (slug) {
      fetchCelebrity();
    }
  }, [slug]);

  const fetchCelebrity = async () => {
    try {
      const response = await getCelebrityBySlug(slug);

      console.log("FULL API RESPONSE =>", response);

      console.log("API DATA =>", response?.data);

      console.log(
        "PROFESSION NAMES =>",
        response?.data?.data?.professionalIdentity?.professionNames,
      );

      if (response?.data?.success) {
        setCelebrityData(response.data.data);
      }
    } catch (error) {
      console.log("API ERROR =>", error);
    }
  };

  const MoviesCotext = {
    Contenttype: "PositionsHeld",

    // IMPORTANT
    slug: slug,

    // FULL DATA
    ...celebrityData,
  };

  console.log("FINAL CONTEXT =>", MoviesCotext);

  return <MoviesDetails context={MoviesCotext} />;
};

export default PositionsHeld;
