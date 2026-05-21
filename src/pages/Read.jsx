import MoviesDetails from "./MoviesDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCelebrityBySlug, getReadByCelebrity } from "../utils/frontApi";
const API_BASE = import.meta.env.VITE_API_BASE_URL;

const Read = () => {
  const { slug } = useParams();

  const [read, setRead] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReadData();
  }, [slug]);

  const fetchReadData = async () => {
    try {
      setLoading(true);

      // 1. get celebrity
      const celebrityRes = await getCelebrityBySlug(slug);
      const celebrity = celebrityRes?.data?.data;

      if (!celebrity?._id) {
        setRead([]);
        setLoading(false);
        return;
      }

      // 2. get read data
      const readRes = await getReadByCelebrity(celebrity._id);

      setRead(readRes?.data?.data || []);
    } catch (error) {
      console.log("Read Fetch Error:", error);
      setRead([]);
    } finally {
      setLoading(false);
    }
  };

  const MoviesContext = {
    Contenttype: "Read",
    slug: slug,

    Adventure: {
      title: "Read",
      mainclass: "bg-[#fff]",
      type: "suggestion",

      // 🔥 USE API DATA HERE
      news: read.map((item) => ({
        id: item._id,
        title: item.title,

        img: item.thumbnail
          ? `${API_BASE}/read/${item.thumbnail}`
          : "/no-image.png",
        //  time: item.createdAt,
        disk: item.shortIntro || "", // ✅ FIX HERE

        desc: item.shortIntro || "",
        link: item.link, // ✅ ADD THIS (IMPORTANT)
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
};

  return <MoviesDetails context={MoviesContext} />;
};

export default Read;
