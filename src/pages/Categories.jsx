import React, { useEffect, useState } from "react";
import CelebritySlider from "../component/catogeries/CelebritySlider";
import FilterCatogeries from "../component/catogeries/FilterCatogeries";
import Pagination from "../component/Pagination";
import { useParams } from "react-router-dom";

const Categories = () => {
  useEffect(() => {
    document.title = "Actors | We Fanss";
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { slug } = useParams();



  return (
    <>
      <div>
        <ul className="flex gap-2 px-6 py-2 bg-[#4285F4]">
          <li className="text-white text-[12px]">Home</li>
          <li className="text-white text-[12px]">/</li>
          <li className="text-white text-[12px]">Celebrites</li>
          <li className="text-white text-[12px]">/</li>
          <li className="text-white text-[12px]"><li className="text-white text-[12px]">
  {slug === "actor" || slug === "actors"
    ? "Actor"
    : slug === "politician" || slug === "politicians"
    ? "Politician"
    : slug}
</li></li>
        </ul>
      </div>

      <CelebritySlider />

      <FilterCatogeries
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setTotalPages={setTotalPages}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Categories;