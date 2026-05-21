import { ArrowUpDown, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CatogeriesCard from "./CatogeriesCard";
import frontApi from "../../utils/frontApi";

const FilterCatogeries = ({
  currentPage,
  setCurrentPage,
  setTotalPages,
}) => {
  const { slug } = useParams();

  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);
  // ✅ LOADER STATE
  const [loading, setLoading] = useState(true);
  const [actorsData, setActorsData] = useState([]);

  const [gender, setGender] = useState("All");
  const [languages, setLanguages] = useState([]);
  const [searchLang, setSearchLang] = useState("");
  const [selectedAge, setSelectedAge] = useState([]);

  const allLanguages = ["Hindi", "English", "Marathi"];
const API_BASE = import.meta.env.VITE_API_BASE_URL;
  const ageOptions = [
    "60 & Above",
    "50 to 60 years",
    "40 to 50 years",
    "30 to 40 years",
    "20 to 30 years",
    "20 & below",
  ];

  const itemsPerPage = 8;

  useEffect(() => {
    getCelebrities();
  }, [slug]);

  const getCelebrities = async () => {
    try {
      const res = await frontApi.get(`/frontcategory/${slug}`);

      if (res.data.success) {
        const finalData = res.data.data.map((item, index) => ({
  id: item._id || index,
  name: item?.identityProfile?.name || "No Name",

  gender: item?.personalDetails?.gender || "Male",

  // 🔥 IMPORTANT
  language:
    item?.professionalIdentity?.languages?.map((l) => l.name) || [],

  age: item?.personalDetails?.dob
    ? new Date().getFullYear() -
      new Date(item.personalDetails.dob).getFullYear()
    : 25,
  img: item?.identityProfile?.categoryImage
          ? `${API_BASE}${item.identityProfile.categoryImage}`
          : "/catogary/cat1.jpg",
  link: `/profiles/${item?.identityProfile?.slug || ""}`,
}));

        setActorsData(finalData);
      }
    } catch (error) {
      console.log(error);
     } finally {
      // ✅ STOP LOADER
      setLoading(false);
    }
  };

  const addLanguage = (lang) => {
    if (!languages.includes(lang)) {
      setLanguages([...languages, lang]);
    }
  };

  const removeLanguage = (lang) => {
    setLanguages(languages.filter((l) => l !== lang));
  };

  const toggleAge = (age) => {
    if (selectedAge.includes(age)) {
      setSelectedAge(selectedAge.filter((a) => a !== age));
    } else {
      setSelectedAge([...selectedAge, age]);
    }
  };

  const checkAgeRange = (actorAge) => {
    if (selectedAge.length === 0) return true;

    return selectedAge.some((range) => {
      if (range === "60 & Above") return actorAge >= 60;
      if (range === "50 to 60 years") return actorAge >= 50 && actorAge <= 60;
      if (range === "40 to 50 years") return actorAge >= 40 && actorAge <= 50;
      if (range === "30 to 40 years") return actorAge >= 30 && actorAge <= 40;
      if (range === "20 to 30 years") return actorAge >= 20 && actorAge <= 30;
      if (range === "20 & below") return actorAge <= 20;
      return false;
    });
  };

  const filteredActors = actorsData
    .filter((actor) => {
      const genderMatch = gender === "All" || actor.gender === gender;

      const languageMatch =
        languages.length === 0 ||
        actor.language.some((lang) => languages.includes(lang));

      const ageMatch = checkAgeRange(actor.age);

      const searchMatch = actor.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return genderMatch && languageMatch && ageMatch && searchMatch;
    })
    .sort((a, b) => {
      if (!sortOrder) return 0;

      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  useEffect(() => {
    const total = Math.ceil(filteredActors.length / itemsPerPage);
    setTotalPages(total || 1);

    if (currentPage > total) {
      setCurrentPage(1);
    }
  }, [filteredActors]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedActors = filteredActors.slice(startIndex, endIndex);

  const filteredLanguageOptions = allLanguages.filter(
    (lang) =>
      lang.toLowerCase().includes(searchLang.toLowerCase()) &&
      !languages.includes(lang)
  );

  return (
    <>
     {/* ✅ PAGE LOADER */}
      {loading ? (
        <div className="w-full h-[80vh] flex items-center justify-center">
          <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
      <div className="px-6 py-5 bg-[#fff]">
        {/* TOP */}
        <div className="flex md:justify-start justify-between gap-3">
          <div
            className={`flex gap-3 transition-all duration-500 ${
              showFilters ? "md:min-w-[250px] md:w-[250px]" : ""
            }`}
          >
            {/* FILTER BTN */}
            <button
              className="h-[56px] w-[56px] rounded-[8px] flex justify-center border-[#B2B2B2] border items-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              ☰
            </button>

            {/* SORT BTN */}
            <button
              onClick={() =>
                setSortOrder((prev) =>
                  prev === "asc" ? "desc" : prev === "desc" ? null : "asc"
                )
              }
              className="h-[56px] w-[56px] rounded-[8px] flex justify-center border-[#B2B2B2] border items-center"
            >
              <ArrowUpDown />
            </button>
          </div>

          {/* SEARCH */}
          <div className="search group bg-[#4285F4] rounded-[100px] relative">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-[154px] hover:w-[250px] outline-none transition-all duration-500 placeholder-white h-[56px] placeholder:text-[20px] primary-font p-4 px-[24px] font-[400] text-[#fff]"
              placeholder="Search"
            />
            <span className="absolute top-0 right-0 -translate-x-5 translate-y-4">
              <Search color="#fff" />
            </span>
          </div>
        </div>

        {/* BODY */}
        <div className="flex md:gap-3 mt-5">
          {/* FILTER BOX */}
          <div
            className={`flex flex-col bg-[#fff] gap-4 py-4 transition-all duration-500 overflow-hidden ${
              showFilters
                ? "md:min-w-[250px] min-w-full md:w-[250px] w-full md:relative fixed top-0 left-0 z-40 md:p-0 p-3 opacity-100"
                : "min-w-0 w-0 opacity-0"
            }`}
          >
            <button
              className="absolute md:hidden top-3 right-3"
              onClick={() => setShowFilters(false)}
            >
              X
            </button>

            {/* Gender */}
            <div>
              <h3 className="mb-3">Gender</h3>

              <div className="flex gap-3">
                {["All", "Male", "Female"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setGender(item);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-full border ${
                      gender === item
                        ? "bg-blue-500 text-white"
                        : "border-blue-500 text-blue-500"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="mb-3">Languages</h3>

              <input
                type="text"
                placeholder="Select"
                value={searchLang}
                onChange={(e) => setSearchLang(e.target.value)}
                className="w-full border px-4 py-2 rounded-lg"
              />

              {searchLang && (
                <div className="border rounded-lg mt-2 bg-white">
                  {filteredLanguageOptions.map((lang) => (
                    <div
                      key={lang}
                      onClick={() => {
                        addLanguage(lang);
                        setSearchLang("");
                        setCurrentPage(1);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-3">
                {languages.map((lang) => (
                  <div
                    key={lang}
                    className="px-4 py-2 rounded-full bg-gray-100 text-sm"
                  >
                    {lang}
                    <button
                      className="ml-2"
                      onClick={() => removeLanguage(lang)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Age */}
            <div>
              <h3 className="mb-3">Age</h3>

              {ageOptions.map((age) => (
                <label key={age} className="flex gap-2 mb-2">
                  <input
                    type="checkbox"
                    checked={selectedAge.includes(age)}
                    onChange={() => {
                      toggleAge(age);
                      setCurrentPage(1);
                    }}
                  />
                  {age}
                </label>
              ))}
            </div>
          </div>

          {/* CARD GRID */}
          <div
            className={`grid grid-cols-4 gap-3 flex-wrap ${
              showFilters ? "" : "justify-center"
            }`}
          >
            {paginatedActors.length > 0 ? (
              paginatedActors.map((item) => (
                <CatogeriesCard key={item.id} data={item} />
              ))
            ) : (
              <h3 className="text-gray-500 text-lg font-medium">
                No Result Found
              </h3>
            )}
          </div>
        </div>
      </div>
         )}
        </>
  );
};


export default FilterCatogeries;