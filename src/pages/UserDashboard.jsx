import React, { useEffect, useState } from "react";
import UserProfile from '../component/dashboardComp/UserProfile'
import ViewedCelebritiesSlider from '../component/dashboardComp/ViewedCelebritiesSlider'
import Collection from '../component/dashboardComp/Collection'
import Card3 from '../component/card/Card3'
import Button from '../component/Button'
import { getFollowedCelebrities,getRecentViews,getHomeCollections } from "../utils/frontApi";

const UserDashboard = () => {

const [followedCelebrities, setFollowedCelebrities] = useState([]);
const [recentViews, setRecentViews] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

const [collectionData, setCollectionData] =
  useState([]);


  // ================= FETCH FOLLOWED =================
  const fetchFollowedCelebrities = async () => {
    try {
      if (!user?._id) return;

      const response = await getFollowedCelebrities(user._id);

      if (response.data.success) {
        setFollowedCelebrities(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFollowedCelebrities();
      fetchRecentViews();
      fetchCollections();

  }, []);


const fetchRecentViews = async () => {

  try {

    if (!user?._id) return;

    const response = await getRecentViews(user._id);

    if (response?.data?.success) {

      const formatted = response.data.data.map((item) => ({
        id: item?._id,
        name: item?.identityProfile?.name,
        img: item?.identityProfile?.image,
        gender: item?.personalDetails?.gender || "N/A",
        language:
          item?.professionalIdentity?.languages || [],
        age:
          item?.personalDetails?.age || "",
        totalMovies:
          item?.analyticsEngagement?.totalMovies || 0,
        totalAwards:
          item?.analyticsEngagement?.totalAwards || 0,
      }));

      setRecentViews(formatted);
    }

  } catch (error) {

    console.log(error);

  }
};


  // ================= VIEWED DATA =================
const ViewedCelebrities = {
  title: "Recently Viewed Celebrities",
  slider: recentViews,
};

  // ================= FOLLOWED DATA (REAL API) =================
  const FollowedCelebrities = {
    title: "Followed Celebrities",
    btnlink: "/followed-celebrities",
    btnclass:
      "h-fit text-[20px] primary-font !font-[500] !px-[24px] !py-[10px]",
    cardClass: "py-[70px]",

    slider: followedCelebrities.map((item) => ({
_id: item?._id,
      name: item?.identityProfile?.name,
      img: item?.identityProfile?.image,
      gender: item?.personalDetails?.gender || "N/A",
      language: item?.professionalIdentity?.languages || [],
      age: item?.personalDetails?.age || "",
      totalMovies: item?.analyticsEngagement?.totalMovies || 0,
      totalAwards: item?.analyticsEngagement?.totalAwards || 0,
link: (() => {

 const professions = (
  item?.professionalIdentity?.professions || []
).map((p) => p?.name?.toLowerCase());

console.log("PROFESSIONS =>", professions);

  let profileLink = `/profiles/${
    item?.identityProfile?.slug || ""
  }`;

  // only actor
  if (
    (professions.includes("actor") ||
      professions.includes("actors")) &&
    !(
      professions.includes("politician") ||
      professions.includes("politicians")
    )
  ) {
    profileLink = `/profile-actor/${
      item?.identityProfile?.slug || ""
    }`;
  }

  // only politician
  else if (
    (professions.includes("politician") ||
      professions.includes("politicians")) &&
    !(
      professions.includes("actor") ||
      professions.includes("actors")
    )
  ) {
    profileLink = `/profile-politician/${
      item?.identityProfile?.slug || ""
    }`;
  }

  // both
  else if (
    (professions.includes("actor") ||
      professions.includes("actors")) &&
    (professions.includes("politician") ||
      professions.includes("politicians"))
  ) {
    profileLink = `/profiles/${
      item?.identityProfile?.slug || ""
    }`;
  }

  return profileLink;

})(),
    })),
  };


const fetchCollections =
  async () => {

    try {

      const response =
        await getHomeCollections(
          user?._id
        );

      if (
        response.data.success
      ) {

        const formatted =
          response.data.data.map(
            (item) => ({
              id: item._id,

              collectionName:
                item.name,

              dis: `${
                item
                  ?.celebrities
                  ?.length || 0
              } Celebrities`,

              cardcalss:
                "md:w-[24%]",

              img: "/all.png",
            })
          );

        setCollectionData(
          formatted
        );
      }

    } catch (error) {

      console.log(error);
    }
  };

const Collectionbox = {
  title: "My Collections",

  btnlink: "/my-collections",

  btnclass:
    "h-fit text-[20px] primary-font !font-[500] !px-[24px] !py-[10px]",

  cardClass:
    "py-[70px] pt-[20px]",

  slider: collectionData,
};
 const items= [
    {
      id: 1,
      image: "/read2.png",
      source: "Source • 02-01-2026",
      title:
        "Akshay Kumar Says Success Changed His Career Track: 'Now I Can Choose Quality'",
      isVideo: true,
      cardclass:"md:w-[23%] w-[100%]"
    },
    {
      id: 2,
      image: "/read2.png",
      source: "Source • 02-01-2026",
      title:
        "Akshay Kumar Says Success Changed His Career Track: 'Now I Can Choose Quality'",
      isVideo: true,
       cardclass:"md:w-[23%] w-[100%]"
    },
     {
      id: 4,
      image: "/watch1.png",
      source: "Source • 02-01-2026",
      title:
        "Akshay Kumar Says Success Changed His Career Track: 'Now I Can Choose Quality'",
      isVideo: true,
      cardclass:"md:w-[23%] w-[100%]"
    },
    {
      id: 3,
    image: "/read2.png",
      source: "Source • 02-01-2026",
      title:
        "Akshay Kumar Says Success Changed His Career Track: 'Now I Can Choose Quality'",
      isVideo: true,
       cardclass:"md:w-[23%] w-[100%]"
    },
  ]
   const items2= [
    {
      id: 1,
 image: "/watch1.png",
      subtitle: "Releasing 02-02-2026",
      title:
        "Akshay Kumar Says Success Changed His Career Track: 'Now I Can Choose Quality'",
      isVideo: false,
      cardclass:"md:w-[23%] w-[100%]"
    },
    {
      id: 2,
  image: "/watch1.png",
      subtitle: "Releasing 02-02-2026",
      title:
        "Akshay Kumar Says Success Changed His Career Track: 'Now I Can Choose Quality'",
      isVideo: false,
       cardclass:"md:w-[23%] w-[100%]"
    },
     {
      id: 4,
      image: "/watch1.png",
      subtitle: "Releasing 02-02-2026",
      title:
        "Akshay Kumar Says Success Changed His Career Track: 'Now I Can Choose Quality'",
      isVideo: false,
      cardclass:"md:w-[23%] w-[100%]"
      
    },
    {
      id: 3,
    image: "/watch1.png",
      subtitle: "Releasing 02-02-2026",
      title:
        "Akshay Kumar Says Success Changed His Career Track: 'Now I Can Choose Quality'",
      isVideo: false,
       cardclass:"md:w-[23%] w-[100%]"
    },
  ]
  const Trivia= [
    {
      id: 1,
      title:
        "Akshay Kumar once cooked up a storm as a chef in a bustling restaurant in Bangkok.",
      isVideo: false,
      titlefont:"!text-[20px]",
      cardclass:"md:w-[32%] w-[100%]"
    },
    {
      id: 2,
      title:
        "Akshay Kumar once cooked up a storm as a chef in a bustling restaurant in Bangkok.",
      isVideo: false,
       titlefont:"!text-[20px]",
       cardclass:"md:w-[32%] w-[100%]"
    },
     {
      id: 4,
      title:
        "Akshay Kumar once cooked up a storm as a chef in a bustling restaurant in Bangkok.",
      isVideo: false,
       titlefont:"!text-[20px]",
      cardclass:"md:w-[32%] w-[100%]"
    },
   
  ]
  return (
    <div className='bg-[#fff]'>
    <UserProfile/>
    <ViewedCelebritiesSlider data={ViewedCelebrities}/>
    <ViewedCelebritiesSlider
  data={FollowedCelebrities}
  refreshFollowed={fetchFollowedCelebrities}
/>
    <Collection data={Collectionbox}/>
    <div className='max-w-[1352px] m-auto px-[20px] py-[30px] pt-0'>
          <div className="flex justify-between">
         <h3 className="flex gap-2 items-center berlin mb-8 text-[#1E1E1E] md:text-[36px] text-[24px] text-[400]">Latest Feed</h3>
       
              <Button btntext="Explore Feed"   btnclass="h-fit text-[20px] primary-font !font-[500] !px-[24px] !py-[10px]"/>
              </div>
         
        <div className='flex flex-wrap justify-between gap-4'>
           {
        items.map((mediaItem) => (
              <Card3 key={mediaItem.id}  mediaItem={mediaItem}/>
          ))
      }
        </div>
         
        <div className='flex flex-wrap justify-between gap-4 mt-6'>
           {
        items2.map((mediaItem) => (
              <Card3 key={mediaItem.id}  mediaItem={mediaItem}/>
          ))
      }
        </div>
    </div>
 

    </div>
  )
}

export default UserDashboard