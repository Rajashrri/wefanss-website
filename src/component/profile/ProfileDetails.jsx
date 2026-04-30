import { Bookmark, Share } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ImageContent from "./ImageContent";
import FilmSongContent from "./FilmSongContent";
import ProfileContent from "./ProfileContent";
import Subheading from "../Subheading";
import MediaContent from "./MediaContent";
import NewsContent from "./NewsContent";
import Podcast from "./Podcast";
import ActorTabs from "./ActorTabs";
import Profilecard from "../card/Profilecard";
import MobileProfileCard from "../card/MobileProfileCard";
// import { ChevronDown } from "lucide-react";
import { MyContext } from "../hooks/MyContext ";

export const sidebarData = [
  {
    id: 1,
    type: "profile",
    title: "Akshay Kumar",
    sections: [
      "Biography",
      "Timeline",
      "Films",
      "Career Entry",
      "Family",
      "Career Entry",
      "FilmFare Awards",
      "Trivia",
      "Songs",
      "Wife",
      "Brands",
      "Early Life",
      "Education",
      "Movies",
      "Podcasts",
      "Books",
      "Related Personalities",
      "Brands",
    ]
  },

  {
    id: 2,
    type: "topFilms",
    title: "Featured Movies",
    link:"/movies",
    items: [
      {
        id: 1,
        name: "Sooryavanshi",
        subtitle: "2021",
        image: "/movies/Sooryavanshi.png"
      },
      {
        id: 2,
        name: "Rowdy Rathore",
        subtitle: "2012",
        image: "/movies/Rowdy Rathore.png"
      },
      {
        id: 3,
        name: "Singh is King",
        subtitle: "2008",
        image: "/movies/Singh is Kinng.png"
      }
    ]
  },

  {
    id: 3,
    type: "hitSongs",
    title: "Featured Web Series",
      link:"/webseries",
    items: [
      {
        id: 1,
        name: "Tip Tip Barsa Paani",
        subtitle: "Mohra",
        image: "/song/Tip Tip Barsa Paani.png"
      },
      {
        id: 2,
        name: "Chura Ke Dil Mera",
        subtitle: "Main Khiladi Tu Anari",
        image: "/song/Chura Ke Dil Mera.png"
      },
      {
        id: 3,
        name: "Main Khiladi Tu Anari",
        subtitle: "Main Khiladi Tu Anari",
        image: "/song/Main Khiladi Tu Anari.png"
      }
    ]
  },
  {
    id: 4,
    type: "images",
    title: "Gallery",
    link:"/gallery",
    items: [
      {
        id: 1,

        image: "/actor/1.png"
      },
      {
        id: 2,

        image: "/actor/2.png"
      },
      {
        id: 3,

        image: "/actor/3.png"
      },
      {
        id: 4,

        image: "/actor/4.png"
      },
      {
        id: 5,

        image: "/actor/1.png"
      },
      {
        id: 1,

        image: "/actor/1.png"
      },
      {
        id: 2,

        image: "/actor/2.png"
      },
      {
        id: 3,

        image: "/actor/3.png"
      },
      {
        id: 4,

        image: "/actor/4.png"
      },
      {
        id: 5,

        image: "/actor/1.png"
      },
        {
        id: 3,

        image: "/actor/3.png"
      },
      {
        id: 4,

        image: "/actor/4.png"
      },
      {
        id: 5,

        image: "/actor/1.png"
      }
    ]
  },
    {
    id: 5,
    type: "hitSongs",
    title: "Related Personalities",
    items: [
      {
        id: 1,
        name: "Twinkle Khanna",
        subtitle: "Actress",
        image: "/celebrities/tk.png"
      },
      {
        id: 2,
        name: "Jhon Abraham",
        subtitle: "Actor",
        image: "/celebrities/ji.png"
      },
      {
        id: 3,
        name: "Katrina Kaif",
        subtitle: "Actress",
        image: "/celebrities/kk.png"
      }
    ]
  },

];

const profileData = [
  {
    id: 1,
    title: "Basic Info",
    type: "basicInfo",
    items: [
      { label: "Born", value: "9 September 1967 (age 58), Delhi, India" },
      { label: "Died", value: "9 September 1967 (age 58), Delhi, India" },
      { label: "Occupations", value: "Actor, Producer" },
      { label: "Citizenship", value: "Indian (until 2011), Canadian (2011–2023)" },
      { label: "subtitles Active", value: "1991 – Present" },
      { label: "Spouse", value: "Twinkle Khanna (m. 2001)" },
      { label: "Children", value: "Shweta Bachchan Nanda, Abhishek Bachchan" }
    ]
  },


];

const ActorData = {



  id: 1,
  title: "Personal Details",
  type: "personalDetails",
  Name: "Akshay Kumar",
  Roles: ["Producer", " Writer", " Actor"],
  Rank: "22",
  Languages: ["English", "Marathi"],
  BirthDate: "9 September 1967",
  BirthPlace: "Amritsar, Punjab, India",
  profileimg:"/actor/profile.png",
  discription:"Akshay Kumar (born September 9, 1967, Amritsar, Punjab, India) is an Indian actor and producer, chiefly known for his work in Bollywood comedies and action films. Kumar, whose career spans more than three decades, has starred in more"


};

const watchData = {
  id: 1,
  title: "Watch",
  type: "watch",
  link:"/watch",
  items: [
    {
      id: 1,
      image: "/watch1.png",
      title:
        "Akshay Kumar Says Success Changed His Career Track: 'Now I Can Choose Quality'",
      isVideo: true,
    },
    {
      id: 2,
      image: "/watch2.png",
      title:
        "Akshay Kumar Says Success Changed His Career Track: 'Now I Can Choose Quality'",
      isVideo: true,
    },
  ],
  seeMore: true,
};
const readData = {
  id: 3,
  title: "Read",
  type: "read",
  link:"/read",
  items: [
    {
      id: 1,
      image: "/read1.png",
      source: "Source • 02-01-2026",
      title:
        "Akshay Kumar Says Success Changed His Career Track: 'Now I Can Choose Quality'",
    },
    {
      id: 2,
      image: "/read2.png",
      source: "Source • 02-01-2026",
      title:
        "Akshay Kumar Says Success Changed His Career Track: 'Now I Can Choose Quality'",
    },
  ],
};

const PublicCampaignsData = {
  id: 3,
  title: "Read",
  type: "read",
  items: [
    {
      id: 1,
      source: "2026",
      title:
        "Eknath Shinde Faces Criticism Over Land Allocation Policies",
      // dis: "Shinde's Land Policy Sparks Debate: Transparency and Fairness Questioned"
    },
    {
      id: 2,
      source: "2026",
      title:
        "Eknath Shinde Faces Criticism Over Land Allocation Policies",
      // dis: "Shinde's Land Policy Sparks Debate: Transparency and Fairness Questioned"
    },
  ],
};
const ListenData = {
  id: 3,
  title: "Listen",
  type: "read",
  link:"/listen",
  items: [
    {
      id: 1,
      source: "Podcast • 2026",
      title:
        "Eknath Shinde Faces Criticism Over Land Allocation Policies",
      dis: "Shinde's Land Policy Sparks Debate: Transparency and Fairness Questioned"
    },
    {
      id: 2,
      source: "Podcast • 2026",
      title:
        "Eknath Shinde Faces Criticism Over Land Allocation Policies",
      dis: "Shinde's Land Policy Sparks Debate: Transparency and Fairness Questioned"
    },
  ],
};

const grid = [
  {
    id: 1,
    img: "/actor/ak1.png",
    disk: "Description",
    name: "Akshay Kumar"
  },
  {
    id: 2,
    img: "/actor/ak2.png",
    disk: "Description",
    name: "Akshay Kumar"
  },
  {
    id: 3,
    img: "/actor/ak3.png",
    disk: "Description",
    name: "Akshay Kumar"
  },
  {
    id: 4,
    img: "/actor/ak4.png",
    disk: "Description",
    name: "Akshay Kumar"
  },
  {
    id: 5,
    img: "/actor/ak5.png",
    disk: "Description",
    name: "Akshay Kumar"
  },
  {
    id: 6,
    img: "/actor/ak6.png",
    disk: "Description",
    name: "Akshay Kumar"
  },
  {
    id: 7,
    img: "/actor/ak7.png",
    disk: "Description",
    name: "Akshay Kumar"
  },
  {
    id: 8,
    img: "/actor/ak8.png",
    disk: "Description",
    name: "Akshay Kumar"
  },
]
const media = [
  {
    id: 1,
    img: "/actor/ak1.png",
    disk: "Description",
    name: "Akshay Kumar",
    type: "img"
  },
  {
    id: 2,
    img: "/actor/ak2.png",
    disk: "Description",
    name: "Akshay Kumar",
    type: "img"
  },
  {
    id: 3,
    img: "/actor/ak3.png",
    disk: "Description",
    name: "Akshay Kumar",
    type: "video"
  },
  {
    id: 4,
    img: "/actor/ak4.png",
    disk: "Description",
    name: "Akshay Kumar",
    type: "img"
  },
  {
    id: 5,
    img: "/actor/ak5.png",
    disk: "Description",
    name: "Akshay Kumar",
    type: "img"
  },
  {
    id: 6,
    img: "/actor/ak6.png",
    disk: "Description",
    name: "Akshay Kumar",
    type: "video"
  },
  {
    id: 7,
    img: "/actor/ak7.png",
    disk: "Description",
    name: "Akshay Kumar",
    type: "img"
  },
  {
    id: 8,
    img: "/actor/ak8.png",
    disk: "Description",
    name: "Akshay Kumar",
    type: "img"
  },
];



export default function AkshayProfile() {
  const [active, setActive] = useState(false)
  const [openIndexes, setOpenIndexes] = useState(
    sidebarData.map((_, index) => index) // all open by default
  );
  const [openRight, setOpenRight] = useState(0);
  const [openShare, setOpenShare] = useState(false);
  const [follow, setfollow] = useState(false);
  


  const toggleRight = (id) => {
    setOpenRight(openRight === id ? null : id);
  };

  const toggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };




  return (
    <MyContext.Provider value={{ active, setActive }}>
    <div
      className="py-[20px] px-[0px] bg-cover bg-center"
      style={{ backgroundImage: 'url("/profilebg.png")' }}
    >

      <div className={` gap-4 px-2 ${active ? "boxvtive":"smallxod grid grid-cols-12"}`}  >
         <MobileProfileCard ActorData={ActorData}/>
        <div className="col-span-12  md:hidden block">
           {profileData.map((section, index) => {
            const isOpen = openRight === index;

            return (
              <div
                key={section.id}
                className="bg-[#F4FBFF] rounded-[8px] p-4 transition-all duration-300"
              >
                {/* Header */}
                <div
                  onClick={() => toggleRight(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="primary-font text-[16px] font-[600]">
                    {section.title}
                  </h3>

                  <span
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  >
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3441 3.25901L8.20109 7.56344C7.86421 7.84533 7.43731 8 6.99615 8C6.55499 8 6.12809 7.84533 5.79121 7.56344L0.64818 3.25901C0.461965 3.09956 0.309309 2.90536 0.19893 2.68752C0.0885513 2.46968 0.02261 2.23245 0.00487154 1.98939C-0.012867 1.74633 0.0179447 1.50219 0.0955473 1.27091C0.17315 1.03963 0.296024 0.825742 0.457153 0.641458C0.618282 0.457174 0.814512 0.306102 1.03464 0.196867C1.25476 0.087633 1.49447 0.0223755 1.74008 0.00482099C1.98569 -0.0127335 2.23239 0.0177588 2.46609 0.0945566C2.6998 0.171354 2.91593 0.292953 3.10214 0.452412L7.01819 3.74617L10.9342 0.452412C11.3103 0.136156 11.7979 -0.0192984 12.2898 0.0202453C12.7817 0.059789 13.2376 0.291092 13.5572 0.66327C13.8768 1.03545 14.0338 1.51802 13.9939 2.00481C13.9539 2.49161 13.7202 2.94276 13.3441 3.25901Z" fill="#4285F4" />
                    </svg>
                  </span>
                </div>

                {/* Dropdown Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden space-y-3">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex justify-left text-[14px]">
                        <span className="font-[600] w-[40%] text-[14px] font-primary text-[#1E1E1E]">
                          {item.label}
                        </span>
                        <span className="text-[#6B6B6B] text-[14px] text-left max-w-[60%]">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* LEFT SIDEBAR */}
        <div className="md:col-span-3 leftbox  col-span-12 md:px-[16px] px-[10px] py-[20px] h-fit  rounded-[8px] space-y-4 bg-[#fff]">

          {sidebarData.map((section, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <div
                key={section.id}
                className="bg-[#F4FBFF] rounded-[8px] p-4 transition-all duration-300"
              >
                {/* Header */}
                <div
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="primary-font text-[16px] font-[600]">
                    {section.title}
                  </h3>

                  <span
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  >
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3441 3.25901L8.20109 7.56344C7.86421 7.84533 7.43731 8 6.99615 8C6.55499 8 6.12809 7.84533 5.79121 7.56344L0.64818 3.25901C0.461965 3.09956 0.309309 2.90536 0.19893 2.68752C0.0885513 2.46968 0.02261 2.23245 0.00487154 1.98939C-0.012867 1.74633 0.0179447 1.50219 0.0955473 1.27091C0.17315 1.03963 0.296024 0.825742 0.457153 0.641458C0.618282 0.457174 0.814512 0.306102 1.03464 0.196867C1.25476 0.087633 1.49447 0.0223755 1.74008 0.00482099C1.98569 -0.0127335 2.23239 0.0177588 2.46609 0.0945566C2.6998 0.171354 2.91593 0.292953 3.10214 0.452412L7.01819 3.74617L10.9342 0.452412C11.3103 0.136156 11.7979 -0.0192984 12.2898 0.0202453C12.7817 0.059789 13.2376 0.291092 13.5572 0.66327C13.8768 1.03545 14.0338 1.51802 13.9939 2.00481C13.9539 2.49161 13.7202 2.94276 13.3441 3.25901Z" fill="#4285F4" />
                    </svg>
                  </span>
                </div>

                {/* Dropdown Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">

                    {/* Profile Links */}
                     {section.type === "profile" && (
                      <ProfileContent sections={section.sections} />
                    )}

                    {(section.type === "topFilms" ||
                      section.type === "hitSongs") && (
                      <FilmSongContent items={section.items} />
                    )}

                    {section.type === "images" && (
                      <ImageContent items={section.items} />
                    )}






                    {section.type !== "profile" && (
                      <Link to={section.link} className="text-[#4285F4] w-full block text-[14px] text-center font-primary font-[700] mt-2 cursor-pointer hover:underline">
                        see more
                      </Link>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
          <div className="bg-[#F4FBFF] rounded-[8px] p-4 transition-all duration-300 flex">
            <p className="text-[16px] primary-font font-[500] pr-1">Lorem ipsum dolor sit amet consectetur. lectus integer mattis id</p>
            <div className="bg-[#4285F4] gap-1 rounded-[4px] w-[180px] flex justify-center items-center flex-col "><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9146 9.10144L12.3574 16.4434L1.30443 12.7964C0.925866 12.6761 0.595416 12.4384 0.360908 12.1177C0.1264 11.7971 0 11.4102 0 11.0129C0 10.6157 0.1264 10.2287 0.360908 9.9081C0.595416 9.58747 0.925866 9.34977 1.30443 9.2294L29.5528 0.0958877C29.8829 -0.0135637 30.2369 -0.0296604 30.5756 0.0493745C30.9143 0.128409 31.2246 0.299502 31.4722 0.543766C31.7165 0.791382 31.8876 1.10168 31.9666 1.4404C32.0457 1.77912 32.0296 2.13309 31.9201 2.46324L22.8346 30.6956C22.7142 31.0741 22.4765 31.4046 22.1559 31.6391C21.8352 31.8736 21.4483 32 21.0511 32C20.6538 32 20.2669 31.8736 19.9462 31.6391C19.6256 31.4046 19.3879 31.0741 19.2675 30.6956L15.5566 19.6106L22.9146 9.10144Z" fill="#E5E7EB" />
            </svg>
              <p className="text-[14px] text-white">Claim Now</p>
            </div>
          </div>


        </div>


        {/* CENTER CONTENT */}
        <div className={`${active ? "max-w-[70%] m-auto":"md:col-span-6 col-span-12"} md:px-2 px-0 space-y-6`}>
          

          <Profilecard ActorData={ActorData}/>

          <ActorTabs/>
          <div className="md:px-[16px] px-[10px] py-[20px] rounded-[8px] space-y-4 bg-[#fff]">
            <div>
              <h3 className="flex gap-2 items-center berlin text-[#1E1E1E] md:text-[24px] text-[20px] text-[400]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 6.06226L0 12.1244V7.82013e-05L10.5 6.06226Z" fill="#4285F4" />
              </svg>Relationships and family</h3>
              <img src="/fam.png" alt="" className="py-4" />
              <p className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400]">During late 90s, Kumar was in a relationship with actress Raveena Tandon. Although they were engaged, they later parted ways.[301][302] Later from 1997 to 2000, Kumar was in a relationship with actress Shilpa Shetty.[303]</p>
              <p className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400]">
                Kumar met actress Twinkle Khanna, the daughter of actors Rajesh Khanna and Dimple Kapadia, during a photo session for Filmfare magazine.[304] Kumar married Khanna on 17 January 2001. Together have a son (Aarav, born 2002) and a daughter (Nitara, born 2012).[305][306] He is known as a protective father and keeps his children away from the media. He stated that he wants to "give them a normal childhood."[307] Kumar often credits Khanna for his success.[308][309]</p>
              <p className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400]">
                In 2009, while performing at a show for Levis at Lakme Fashion Week, Kumar asked Twinkle to unbutton his jeans. This incident sparked a controversy which led to a police case being filed against them.[310]</p>
              <hr className="my-4 text-[#4285F429]" />

            </div>
            <div>


              <h3 className="flex gap-2 mb-3 items-center berlin text-[#1E1E1E] md:text-[24px] text-[20px] text-[400]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 6.06226L0 12.1244V7.82013e-05L10.5 6.06226Z" fill="#4285F4" />
              </svg>Religion</h3>
              <p className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400]">Kumar was initially religious, till 2017 being a practising Shaiva Hindu who regularly visited shrines and temples across the country, including the famed Vaishno Devi Mandir,[311][312][313][294] while in 2018 he said "there is only one God" and was against bringing religion into politics,[314] but in March 2020 he stated, "I don't believe in any religion. I only believe in being Indian".[315]</p>
              <hr className="my-4 text-[#4285F429]" />
            </div>
            <div>


              <h3 className="flex gap-2 mb-3 items-center berlin text-[#1E1E1E] md:text-[24px] text-[20px] text-[400]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 6.06226L0 12.1244V7.82013e-05L10.5 6.06226Z" fill="#4285F4" />
              </svg>Statistics</h3>
              <div className="w-full overflow-x-auto">
              <table className="max-w-[900px] w-[100%] border border-[#1E1E1E] rounded-[8px] border-collapse">
                <thead className="bg-[#F4FBFF] text-left">
                  <tr>
                    <th className="p-3 px-8">Team</th>
                    <th className="p-3 px-8">From</th>
                    <th className="p-3 px-8">To</th>
                    <th className="p-3 px-8">Record</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="">
                    <td className="p-3 px-8">Mumbai Indians</td>
                    <td className="p-3 px-8">2010</td>
                    <td className="p-3 px-8">2026</td>
                    <td className="p-3 px-8">Lorem</td>
                  </tr>
                  <tr className="">
                    <td className="p-3 px-8">Deccan Chargers</td>
                    <td className="p-3 px-8">2010</td>
                    <td className="p-3 px-8">2026</td>
                    <td className="p-3 px-8">Lorem</td>
                  </tr>
                  <tr className="">
                    <td className="p-3 px-8">Mumbai Indians</td>
                    <td className="p-3 px-8">2010</td>
                    <td className="p-3 px-8">2026</td>
                    <td className="p-3 px-8">Lorem</td>
                  </tr>
                  <tr className="">
                    <td className="p-3 px-8">Mumbai Indians</td>
                    <td className="p-3 px-8">2010</td>
                    <td className="p-3 px-8">2026</td>
                    <td className="p-3 px-8">Lorem</td>
                  </tr>
                  <tr className="">
                    <td className="p-3 px-8">Mumbai Indians</td>
                    <td className="p-3 px-8">2010</td>
                    <td className="p-3 px-8">2026</td>
                    <td className="p-3 px-8">Lorem</td>
                  </tr>
                  <tr className="">
                    <td className="p-3 px-8">Mumbai Indians</td>
                    <td className="p-3 px-8">2010</td>
                    <td className="p-3 px-8">2026</td>
                    <td className="p-3 px-8">Lorem</td>
                  </tr>
                </tbody>
              </table>
              </div>
              <hr className="my-4 text-[#4285F429]" />


            </div>
            <div>


              <h3 className="flex gap-2 mb-3 items-center berlin text-[#1E1E1E] md:text-[24px] text-[20px] text-[400]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 6.06226L0 12.1244V7.82013e-05L10.5 6.06226Z" fill="#4285F4" />
              </svg>Other work</h3>
              <h4 className="primary-font text-[18px] text-[#1E1E1E] font-[500] pb-2">Television</h4>
              <ul className="pl-5">
                <li className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400] list-disc">In 2004, Kumar presented seven-part miniseries Seven Deadly Arts with Akshay Kumar for free,[276] played master and learner as he introduces viewers to each of the seven part of martial arts-kalaripayattu, Shaolin Kung Fu, karate, taekwondo, aikido, Muay Thai, capoeira,[277] the show aired on every following Sunday.[278] The following subtitle Kumar was awarded the highest Japanese honour of "Katana" and a sixth degree black belt in Kuyukai Gōjū-ryū karate.</li>
                <li className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400] list-disc">Since 2008, Kumar started India's stunt/action reality game show – "Fear Factor: Khatron Ke Khiladi". He hosted Season 1, Season 2 and Season 4.[279] The show was widely accepted and appreciated, became hugely successful in popular culture.[280] It is still being run by Rohit Shetty.</li>
              </ul>

              <hr className="my-4 text-[#4285F429]" />
            </div>
            <div>


              <h3 className="flex gap-2 mb-3 items-center berlin text-[#1E1E1E] md:text-[24px] text-[20px] text-[400]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 6.06226L0 12.1244V7.82013e-05L10.5 6.06226Z" fill="#4285F4" />
              </svg>Fitness work and stage performances</h3>
              <ul className="pl-5">
                <li className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400] list-disc">Kumar promotes health fitness and exercising, stays in shape with a combination of kickboxing, basketball, swimming and Parkour as well as working out. While in standard eighth he had started practising Karate. He intended to open a martial arts school and the state government of Maharashtra allotted land for the school in Bhayandar.[291]</li>
                <li className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400] list-disc">He helped Khanna with editing the drafts of her debut book Mrs Funnybones.[292] He is a teetotaller[293] but has endorsed for a liquor brand in the past. Half of the sum was given for daan (charity work), of which he has been doing more of in recent times.</li>
                <li className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400] list-disc">On 9 August 2014, Kumar performed at his 500th live show. The show was held in O2 Arena in London as part of the inaugural function of the World Kabaddi League. His first live show was held in 1991 in Delhi. Kumar owns Bengal Warriors a team in the Indian Kabbadi League.[291][299] Akshay Kumar sets himself on fire at his upcoming The End series launch with Prime Video, says he's a stuntman first and actor later.[300]</li>
              </ul>

              <hr className="my-4 text-[#4285F429]" />
            </div>
            <div>


              <h3 className="flex gap-2 mb-3 items-center berlin text-[#1E1E1E] md:text-[24px] text-[20px] text-[400]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 6.06226L0 12.1244V7.82013e-05L10.5 6.06226Z" fill="#4285F4" />
              </svg>Grid</h3>
              <div className="grid gap-[20px] grid-cols-4">
                {
                  grid.map((item) => (
                    <div id={item.id} className="col-span-1">
                      <figure>
                        <img src={item.img} alt="" className="w-full h-full" />
                      </figure>
                      <h3 className="mt-1">{item.disk}</h3>
                    </div>
                  ))
                }
              </div>
              <p className="text-[#4285F4] text-[14px] text-center font-primary font-[700] mt-8 cursor-pointer hover:underline">
                view more
              </p>


              <hr className="my-4 text-[#4285F429]" />
            </div>
            <div>


              <h3 className="flex gap-2 mb-3 items-center berlin text-[#1E1E1E] md:text-[24px] text-[20px] text-[400]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 6.06226L0 12.1244V7.82013e-05L10.5 6.06226Z" fill="#4285F4" />
              </svg>Listing</h3>
              <div className="grid gap-[20px] grid-cols-4 mt-4">
                {
                  grid.map((item) => (
                    <div id={item.id} className="col-span-4 flex gap-3">
                      <figure>
                        <img src={item.img} alt="" className="w-[100px] h-[100px] border border-1 border-[#00000040] rounded-[4px]" />
                      </figure>
                      <div>

                        <h3 className="mt-1 primary-font text-[#1E1E1E] font-[500]">{item.name}</h3>
                         <p className="mt-1 text-[14px] primary-font text-[#757575]">{item.disk}</p>

                      </div>
                    </div>
                  ))
                }
              </div>
              <p className="text-[#4285F4] text-[14px] text-center font-primary font-[700] mt-8 cursor-pointer hover:underline">
                view more
              </p>

              <hr className="my-4 text-[#4285F429]" />
            </div>

            <div>


              <h3 className="flex gap-2 mb-3 items-center berlin text-[#1E1E1E] md:text-[24px] text-[20px] text-[400]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 6.06226L0 12.1244V7.82013e-05L10.5 6.06226Z" fill="#4285F4" />
              </svg>Media</h3>
              <div className=" mt-4">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={20}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  modules={[Autoplay, Pagination]}
                  className="overflow-hidden"
                >
                  {media.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="w-full h-[288px] flex items-center justify-center">

                        {item.type === "img" ? (
                          <div>
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            /> <h3 className="mt-1 primary-font text-[#1E1E1E] font-[500]">{item.name}</h3></div>

                        ) : (
                          <div className="relative">
                            {/* <video
                      src={item.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    /> */}
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                            <h3 className="mt-1 primary-font text-[#1E1E1E] font-[500]">{item.name}</h3>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white/80 rounded-full flex justify-center items-center">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect width="50" height="50" rx="25" fill="white" fill-opacity="0.8" />
                                  <path d="M21.4602 15.4402C19.6602 14.4102 18.2002 15.2502 18.2002 17.3302V32.6702C18.2002 34.7502 19.6602 35.5902 21.4602 34.5602L34.8702 26.8702C36.6702 25.8702 36.6702 24.1602 34.8702 23.1302L21.4602 15.4402Z" fill="#4285F4" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        )}

                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <p className="text-[#4285F4] text-[14px] text-center font-primary font-[700] mt-8 cursor-pointer hover:underline">
                view more
              </p>


              <hr className="my-4 text-[#4285F429]" />
            </div>
          </div>
           <div className="md:px-[20px] px-[10px] py-[20px] mt-4 rounded-[8px] space-y-4 bg-[#fff]">
            <div>
              <h3 className="flex gap-2 items-center berlin text-[#1E1E1E] md:text-[24px] text-[20px] text-[400]">References</h3>
                  <ol className="detaillist">
                    <li className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400]">Kala, Anusha (9 September 2022). " <a href="">Decoding Akshay Kumar: We break down the evolution of Khiladi Kumar on his birthday | Filmfare.com</a> ". Filmfare. Archived from the original on 9 September 2022. Retrieved 19 July 2024.</li>
                    <li className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400]">Akshay Kumar, a prominent figure in Bollywood, has captivated audiences with his versatile roles and charismatic screen presence. Known as ' <a href="">Khiladi Kumar</a> ', he has evolved from action hero to a celebrated actor in various genres, showcasing his talent on his birthday each year.</li>
                    <li className="mt-1 primary-font text-[16px] text-[#1E1E1E] font-[400]">Celebrated as one of India's most bankable stars, <a href="#!">Akshay Kumar's journey in cinema</a> is marked by his dedication and diverse filmography. Each year, fans honor his contributions to the film industry, reflecting on his growth from a martial arts expert to a beloved actor.</li>
                  </ol>
                  <Link to="#!" className="text-[#4285F4] w-full block text-[14px] text-center font-primary font-[700] mt-2 cursor-pointer hover:underline">
                              see more
                            </Link>
             
              <hr className="my-4 text-[#4285F429]" />

            </div>
            <div>


            </div>
          </div>


        </div>

        {/* RIGHT SIDEBAR */}
        <div className="md:col-span-3 h-fit rightbox col-span-12 md:px-[0px] pt-[10px] rounded-[8px] space-y-4 bg-[#fff]">
          {profileData.map((section, index) => {
            const isOpen = openRight === index;

            return (
              <div
                key={section.id}
                className="bg-[#fff] rounded-[8px] md:block hidden p-4 transition-all duration-300"
              >
                {/* Header */}
                <div
                  onClick={() => toggleRight(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="primary-font text-[16px] font-[600]">
                    {section.title}
                  </h3>

                  <span
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  >
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3441 3.25901L8.20109 7.56344C7.86421 7.84533 7.43731 8 6.99615 8C6.55499 8 6.12809 7.84533 5.79121 7.56344L0.64818 3.25901C0.461965 3.09956 0.309309 2.90536 0.19893 2.68752C0.0885513 2.46968 0.02261 2.23245 0.00487154 1.98939C-0.012867 1.74633 0.0179447 1.50219 0.0955473 1.27091C0.17315 1.03963 0.296024 0.825742 0.457153 0.641458C0.618282 0.457174 0.814512 0.306102 1.03464 0.196867C1.25476 0.087633 1.49447 0.0223755 1.74008 0.00482099C1.98569 -0.0127335 2.23239 0.0177588 2.46609 0.0945566C2.6998 0.171354 2.91593 0.292953 3.10214 0.452412L7.01819 3.74617L10.9342 0.452412C11.3103 0.136156 11.7979 -0.0192984 12.2898 0.0202453C12.7817 0.059789 13.2376 0.291092 13.5572 0.66327C13.8768 1.03545 14.0338 1.51802 13.9939 2.00481C13.9539 2.49161 13.7202 2.94276 13.3441 3.25901Z" fill="#4285F4" />
                    </svg>
                  </span>
                </div>

                {/* Dropdown Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden space-y-3">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex justify-left text-[14px]">
                        <span className="font-[600] w-[40%] text-[14px] primary-font text-[#1E1E1E]">
                          {item.label}
                        </span>
                        <span className="text-[#1E1E1E] font-[400] primary-font text-[14px] text-left max-w-[60%]">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

      

          
              
              
              <MediaContent item={watchData}/>
        

       
      

               <MediaContent item={readData}/>
        

      
         
          {/* <div className="bg-white rounded-xl p-4 space-y-4 border-[#4285F429] border-b "> */}
          
             {/* <Subheading data="Listen"/> */}

            
              <Podcast item={ListenData}/>
            
            {/* <div className="text-center">
              <button className="text-blue-500 text-[14px] font-medium">
                see more
              </button>
            </div> */}

          {/* </div> */}


        </div>





      </div>
    </div>
    </MyContext.Provider>
  );
}
