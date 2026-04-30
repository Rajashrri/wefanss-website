import { ArrowUpDown, Search, SlidersHorizontal } from 'lucide-react'
import React, { useState } from "react";
import CatogeriesCard from '../component/catogeries/CatogeriesCard';
import NoSearcfound from '../component/NoSearcfound';


const SearchResult = () => {

    const [search, setSearch] = useState("");
    const allLanguages = ["Hindi", "English", "Marathi"];
    const [showFilters, setShowFilters] = useState(false);
    const [sortOrder, setSortOrder] = useState(null);




    const actorsData = [
        {
            id: 1,
            name: "Chris Evans",
            gender: "Politician",
            language: ["English"],
            age: 42,
            totalMovies: 38,
            cardcalss: "lg:col-span-1 md:col-span-2 col-span-4  ",
            totalAwards: 15,
            img: "/catogary/cat1.jpg",
        },
        {
            id: 2,
            name: "Florence Pugh",
            gender: "Actor",
            cardcalss: "lg:col-span-1 md:col-span-2 col-span-4  ",
            language: ["Hindi", "English"],
            age: 38,
            totalMovies: 30,
            totalAwards: 25,
            img: "/catogary/cat2.jpg",
        },
        {
            id: 3,
            name: "Tom Hiddleston",
            gender: "Politician",
            cardcalss: "lg:col-span-1 md:col-span-2 col-span-4  ",
            language: ["Hindi"],
            age: 58,
            totalMovies: 45,
            totalAwards: 40,
            img: "/catogary/cat5.png",
        },
        {
            id: 4,
            name: "Priyanka Chopra",
            gender: "Actor",
            cardcalss: "lg:col-span-1 md:col-span-2 col-span-4  ",
            language: ["Hindi", "English"],
            age: 41,
            totalMovies: 35,
            totalAwards: 28,
            img: "/catogary/cat4.jpg",
        },
        {
            id: 5,
            name: "Scarlett Johansson",
            gender: "Actor",
            language: ["Hindi", "English"],
            age: 41,
            totalMovies: 35,
            cardcalss: "lg:col-span-1 md:col-span-2 col-span-4  ",
            totalAwards: 28,
            img: "/catogary/cat3.jpg",
        },
        {
            id: 6,
            name: "Chris Hemsworth",
            gender: "Politician",
            cardcalss: "lg:col-span-1 md:col-span-2 col-span-4  ",
            language: ["Hindi", "English"],
            age: 41,
            totalMovies: 35,
            totalAwards: 28,
            img: "/catogary/cat6.jpg",
        },

    ];
    const [gender, setGender] = useState("All");
    const [languages, setLanguages] = useState([]);
    const [searchLang, setSearchLang] = useState("");

    const [selectedAge, setSelectedAge] = useState([]);

   
    const addLanguage = (lang) => {
        if (!languages.includes(lang)) {
            setLanguages([...languages, lang]);
        }
    };

    const filteredLanguageOptions = allLanguages.filter(
        (lang) =>
            lang.toLowerCase().includes(searchLang.toLowerCase()) &&
            !languages.includes(lang)
    );


    const toggleAge = (age) => {
        if (selectedAge.includes(age)) {
            setSelectedAge(selectedAge.filter((a) => a !== age));
        } else {
            setSelectedAge([...selectedAge, age]);
        }
    };

    const removeLanguage = (lang) => {
        setLanguages(languages.filter((l) => l !== lang));
    };

    // Convert age range string to number range
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
            // Gender filter
            const genderMatch =
                gender === "All" || actor.gender === gender;

            // Language filter
            const languageMatch =
                languages.length === 0 ||
                actor.language.some((lang) => languages.includes(lang));

            // Age filter
            const ageMatch = checkAgeRange(actor.age);

            const searchMatch =
                actor.name.toLowerCase().includes(search.toLowerCase());

            return genderMatch && languageMatch && ageMatch && searchMatch;
        }).sort((a, b) => {
            if (!sortOrder) return 0;

            if (sortOrder === "asc") {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });

    return (
        <>
            <div className="px-6 py-5 bg-[#fff] ">
                <div className={`flex max-w-[500px] m-auto md:justify-start flex-col justify-between gap-3`}>

                    <div className="search group border text-[#4285F4] border-[#4285F4] rounded-[36px] relative">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-[500px] outline-none transition-all rounded-[36px] duration-500 placeholder-[#4285F4] h-[46px] placeholder:text-[16px] primary-font p-4 text-[#000000]"
                            placeholder="Search"
                        />
                        <span className='absolute  right-1  bg-[#4285F4] w-[70px] flex justify-center items-center rounded-[36px] h-[40px] top-1'>
                            <Search color='#fff' />

                        </span>
                    </div>

                    <div className={`flex md:flex-row  flex-col justify-center items-center gap-4 py-4 transition-all duration-500 " 
                    }`}>
                        {/* Gender */}
                      
                            <div className="flex  gap-3 border border-[#D9D9D9] rounded-full p-1">
                                {["All", "Actor", "Politician"].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => setGender(item)}
                                        className={`px-4 py-2 rounded-full  transition primary-font text-[16px]
                                        ${gender === item
                                                ? "bg-blue-500 text-white border border-blue-500"
                                                : " text-[#1E1E1E] bg-white"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                            <div className='flex justify-center gap-4'>
                        
                        <button className='h-[45px] relative px-[20px] gap-3 rounded-[8px] primary-font text-[16px] flex justify-center border-[#D9D9D9] border items-center'>
                            Filter

                              <svg className='  ' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L13 1" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                        </button>
                        <button onClick={() =>
                            setSortOrder((prev) =>
                                prev === "asc" ? "desc" : prev === "desc" ? null : "asc"
                            )
                        } className='h-[45px] relative px-[20px] gap-3 rounded-[8px] primary-font text-[16px] flex justify-center border-[#D9D9D9] border items-center'>
                            Sort

                              <svg className='  ' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L13 1" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                        </button>
                        </div>



                    </div>
                </div>
                <div>

                    <div className={`grid grid-cols-4 gap-3 flex-wrap justify-center
                    }`}>
                        {filteredActors.length > 0 ? (
                            filteredActors.map((item) => (
                                <CatogeriesCard key={item.id} data={item} />
                            ))
                        ) : (
                          <NoSearcfound/>
                        )}
                    </div>

                </div>
            </div>

        </>
    )
}

export default SearchResult