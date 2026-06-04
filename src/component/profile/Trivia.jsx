import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getCelebrityBySlug, getTriviaByCelebrity } from "../../utils/frontApi";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const getImageUrl = (path) => {
  if (!path) return "/no-image.png";

  // cloudinary
  if (path.includes("res.cloudinary.com")) {
    return path;
  }

  // full url
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // local trivia image
  return `${API_BASE}/triviaentries/${path}`;
};

const Trivia = () => {
  const { slug } = useParams();

  const [open, setOpen] = useState(false);

  // ✅ selected category
  const [selected, setSelected] = useState("All");

  const [triviaData, setTriviaData] = useState([]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    getTriviaData();
  }, [slug]);

  // close outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const getTriviaData = async () => {
    try {
      // celebrity by slug
      const celebRes = await getCelebrityBySlug(slug);

      const celebrityId = celebRes?.data?.data?._id;

      if (!celebrityId) return;

      // trivia fetch
      const res = await getTriviaByCelebrity(celebrityId);

      setTriviaData(res?.data?.data || []);
    } catch (error) {
      console.log("Trivia Error:", error);
    }
  };

  // ✅ unique categories for filter
  const categoryOptions = [
    "All",
    ...new Set(triviaData.map((item) => item.categoryName)),
  ];

  // ✅ filter data
  const filteredTrivia =
    selected === "All"
      ? triviaData
      : triviaData.filter((item) => item.categoryName === selected);

  return (
    <div className="mt-4 md:overflow-y-auto h-screen no-scrollbar">
      {/* FILTER */}
      <div className="filter relative w-fit mb-[24px]" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#4285F4] px-[24px] py-[12px] primary-font font-semibold text-white rounded-[8px] flex items-center"
        >
          {selected}

          <svg
            className={`ms-[8px] transition-transform ${
              open ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M4.79883 12L9.59883 7.2L14.3988 12"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* DROPDOWN */}
        {open && (
          <ul className="absolute left-0 mt-2 p-1 w-full bg-white rounded-[8px] shadow-lg overflow-hidden z-50">
            {categoryOptions.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelected(item);
                  setOpen(false);
                }}
                className="bg-[#fff] px-[24px] py-[12px] berlin text-[16px] font-[300] hover:bg-[#F4FBFF] text-center cursor-pointer rounded-[8px]"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* TRIVIA LIST */}
      {filteredTrivia?.length > 0 ? (
        filteredTrivia.map((item) => (
          <div key={item._id}>
               {/* ✅ CATEGORY NAME */}
            <h4 className="primary-font text-[16px] font-[500] text-[#1E1E1E] my-2">
              {item.categoryName}
            </h4>
            {/* TITLE */}
            <h3 className="berlin text-[20px] font-[400] text-[#1E1E1E]">
              {item.title}
            </h3>

         

            {/* IMAGE */}
            {item.media && (
              <img
                src={getImageUrl(item.media)}
                alt={item.title}
                className="w-full rounded-[8px] my-3"
              />
            )}

            {/* DESCRIPTION */}
            <div
              className="text-[14px] font-[400] primary-font mt-3 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: item.description,
              }}
            />

            <hr className="my-4 text-[#4285F429]" />
          </div>
        ))
      ) : (
        <p className="text-center text-[#868484]">No trivia found</p>
      )}
    </div>
  );
};

export default Trivia;
