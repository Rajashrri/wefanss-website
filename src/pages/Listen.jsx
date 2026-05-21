import MoviesDetails from "./MoviesDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  getCelebrityBySlug,
  getListenByCelebrity,
} from "../utils/frontApi";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const Listen = () => {
  const { slug } = useParams();

  const [listen, setListen] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchListenData();
  }, [slug]);

  const fetchListenData = async () => {
    try {
      setLoading(true);

      // ✅ Get Celebrity By Slug
      const celebrityRes = await getCelebrityBySlug(slug);

      const celebrity = celebrityRes?.data?.data;

      if (!celebrity?._id) {
        setListen([]);
        setLoading(false);
        return;
      }

      // ✅ Get Listen Data
      const listenRes = await getListenByCelebrity(
        celebrity._id
      );

      setListen(listenRes?.data?.data || []);
    } catch (error) {
      console.log("Listen Fetch Error:", error);

      setListen([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Context
  const MoviesContext = {
    Contenttype: "Listen",

    slug: slug,

    Adventure: {
      title: "Listen",
      mainclass: "bg-[#fff]",
      type: "suggestion",

      Listen: listen.map((item) => ({
        id: item._id,

        title: item.title,

        img: item.thumbnail
          ? `${API_BASE}/listen/${item.thumbnail}`
          : "/audio.png",

        time: `${item.noOfHours || 0} Hours`,

        disk: item.videoLink || "",

        desc: item.videoLink || "",

        link: item.link || "#",

        platform: item.videoLink || "",

        // ✅ IMPORTANT FOR DESIGN
        cardclass: "md:max-w-[300px]",
      })),
    },
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        Loading...
      </div>
    );
  }

  return (
    <MoviesDetails context={MoviesContext} />
  );
};

export default Listen;