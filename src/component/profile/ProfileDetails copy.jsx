import { Bookmark, Share } from "lucide-react";
import { useState,useEffect } from "react";
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
import axios from "axios";

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
export default function AkshayProfile() {

  // ✅ Actor Data state (same structure)
  const [ActorData, setActorData] = useState({
    id: "",
    title: "Personal Details",
    type: "personalDetails",
    Name: "",
    Roles: [],
    Rank: "",
    Languages: [],
    BirthDate: "",
    BirthPlace: "",
    profileimg: "",
    discription: ""
  });

  // ✅ API call only once
  useEffect(() => {
    getActorData();
  }, []);

  const getActorData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/front/celebrity/akshay-kumar"
      );

      const item = res.data.data;

      setActorData({
        id: item?._id || "",
        title: "Personal Details",
        type: "personalDetails",

        Name: item?.identityProfile?.name || "",
        Roles: item?.professionalIdentity?.roles || [],
        Rank: item?.publicAttributes?.rank || "",
        Languages: item?.personalDetails?.languages || [],
        BirthDate: item?.personalDetails?.birthDate || "",
        BirthPlace: item?.personalDetails?.birthPlace || "",
        profileimg: item?.identityProfile?.image || "",
        discription: item?.identityProfile?.biography || ""
      });

    } catch (error) {
      console.log("Actor API Error:", error);
    }
  };

  return (
    <div>
      {/* 👇 yaha tumhara pura existing UI SAME rahega */}
      <Profilecard ActorData={ActorData} />
    </div>
  );
}
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




