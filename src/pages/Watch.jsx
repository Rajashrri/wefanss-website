import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MoviesDetails from "./MoviesDetails";

import {
  getCelebrityBySlug,
  getWatchByCelebrity,
} from "../utils/frontApi";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const Watch = () => {
  const { slug } = useParams();

  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWatchData();
  }, [slug]);

  const fetchWatchData = async () => {
    try {
      setLoading(true);

      // 1. celebrity by slug
      const celebrityRes = await getCelebrityBySlug(slug);

      const celebrity = celebrityRes?.data?.data;

      if (!celebrity?._id) {
        setWatches([]);
        return;
      }

      // 2. fetch watches using celebrity id
      const watchRes = await getWatchByCelebrity(
        celebrity._id
      );

      setWatches(watchRes?.data?.data || []);
    } catch (error) {
      console.log("Watch Fetch Error:", error);
      setWatches([]);
    } finally {
      setLoading(false);
    }
  };

  const MoviesCotext = {
    Contenttype: "Watch",
 slug: slug,   // 👈 ADD THIS (IMPORTANT)

    Adventure: {
      title: "Watch",
      mainclass: "bg-[#fff]",
      type: "suggestion",

      movies: watches.map((item) => ({
        id: item._id,
        title: item.title,

        img: item.thumbnail
          ? `${API_BASE}/watch/${item.thumbnail}`
          : "/no-image.png",

        desc: item.videoType || "",

        slug: item.slug,
        link: item.link,
      })),
    },
  };

// ✅ LOADER
if (loading) {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
// ✅ NO DATA FOUND
if (!loading && watches.length === 0) {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <h2 className="text-2xl font-semibold text-gray-500">
        Data Not Found
      </h2>
    </div>
  );
}

  return <MoviesDetails context={MoviesCotext} />;
};

export default Watch;