import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getCelebrityBySlug,
  getTimelineByCelebrity,
} from "../../utils/frontApi";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const getImageUrl = (path) => {
  if (!path) return "/no-image.png";

  // cloudinary
  if (path.includes("res.cloudinary.com")) {
    return path;
  }

  // full url
  if (
    path.startsWith("http://") ||
    path.startsWith("https://")
  ) {
    return path;
  }

  // local timeline image
  return `${API_BASE}/timeline/${path}`;
};
const Timeline = () => {
  const { slug } = useParams();

  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    getTimelineData();
  }, [slug]);

  const getTimelineData = async () => {
    try {
      // ✅ celebrity find by slug
      const celebRes = await getCelebrityBySlug(slug);

      const celebrityId = celebRes?.data?.data?._id;

      if (!celebrityId) return;

      // ✅ timeline fetch by celebrity id
      const res = await getTimelineByCelebrity(
        celebrityId
      );

      setTimelineData(res?.data?.data || []);
    } catch (error) {
      console.log("Timeline Error:", error);
    }
  };

  return (
    <div className="mt-4 md:overflow-y-auto h-screen no-scrollbar">
      {timelineData?.length > 0 ? (
        timelineData.map((item) => (
          <div key={item._id} className="mb-8">
            {/* ✅ Years */}
            <span className="text-[#868484] text-[14px] primary-font">
              {item.fromYear} - {item.toYear}
            </span>

            {/* ✅ Title */}
            <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E] mt-1">
              {item.title}
            </h3>

            {/* ✅ Timeline Image */}
            {item.media && (
              <img
                src={getImageUrl(item.media)}
                className="py-3 w-full rounded-[8px]"
                alt={item.title}
              />
            )}

            {/* ✅ Description */}
            <div
              className="text-[14px] font-[400] primary-font mt-3 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: item.description,
              }}
            />

            <hr className="my-6 text-[#4285F429]" />
          </div>
        ))
      ) : (
        <p className="text-center text-[#868484]">
          No timeline found
        </p>
      )}
    </div>
  );
};

export default Timeline;