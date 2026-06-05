import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCelebrityBySlug } from "../utils/frontApi";

const Gallery = () => {
  const { slug } = useParams();

  const [gallery, setGallery] = useState([]);
  const [celebrity, setCelebrity] = useState(null);

  useEffect(() => {
    fetchGallery();
  }, [slug]);

const fetchGallery = async () => {
  try {
    const res = await getCelebrityBySlug(slug);

    console.log("API FULL =>", res);

    const data = res?.data?.data;   // ✅ IMPORTANT FIX

    if (data) {
      setCelebrity(data);
      setGallery(data?.identityProfile?.gallery || []);
    }
  } catch (err) {
    console.log(err);
  }
};const fetchGallery = async () => {
  try {
    const res = await getCelebrityBySlug(slug);

    console.log("API FULL =>", res);

    const data = res?.data?.data;   // ✅ IMPORTANT FIX

    if (data) {
      setCelebrity(data);
      setGallery(data?.identityProfile?.gallery || []);
    }
  } catch (err) {
    console.log(err);
  }
};

  return (
    <>
      <div className="py-[60px]">
        <h1 className="md:text-[64px] text-[40px] berlin text-[#1E1E1E] text-center">
          {celebrity?.identityProfile?.name} Gallery
        </h1>

        <div className="grid max-w-[1000px] grid-cols-12 gap-3 mt-12 m-auto px-6">
          {gallery?.map((img, index) => (
            <figure
              key={index}
              className="md:col-span-4 col-span-12 h-[250px]"
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </figure>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;