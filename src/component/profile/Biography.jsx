// ✅ Biography.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCelebrityBySlug } from "../../utils/frontApi";

const Biography = () => {
  const { slug } = useParams();

  const [biography, setBiography] = useState("");

  useEffect(() => {
    getBiography();
  }, [slug]);

  const getBiography = async () => {
    try {
      const res = await getCelebrityBySlug(slug);

      const item = res?.data?.data;

      setBiography(item?.identityProfile?.biography || "");
    } catch (error) {
      console.log("Biography API Error:", error);
    }
  };

  // ❌ empty ho to show mat karo
  if (!biography) return null;

  return (
    <div className="mt-4">
      <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">
        Biography
      </h3>

      <div
        className="text-[14px] font-[400] primary-font mt-3 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: biography,
        }}
      />

      <hr className="my-4 text-[#4285F429]" />
    </div>
  );
};

export default Biography;