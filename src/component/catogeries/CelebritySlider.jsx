import { Bookmark, Share, Check } from "lucide-react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  getCelebritiesBySlider,
  createFollow,
  checkFollowStatus,
  unfollowCelebrity,
} from "../../utils/frontApi";
import {
  createCollectionApi,
  getUserCollections,
  saveToCollectionApi,
} from "../../utils/collectionApi";

export default function CelebritySlider({ data, refreshFollowed }) {
  const [Quick, setQuick] = useState(false);
  const [Sharelink, setSharelink] = useState(false);
  const [Likepro, setLikepro] = useState(false);
  const [shareLink, setShareLink] = useState(false);
  const [saveCollection, setSaveCollection] = useState(false);
  const [createCollection, setCreateCollection] = useState(false);
  const [slides, setSlides] = useState([]);
  const [followStatus, setFollowStatus] = useState({});
  const { slug } = useParams();
const getProfileLink = (item) => {
  const professions =
    item?.professionalIdentity?.professions?.map((p) =>
      p?.name?.toLowerCase()
    ) || [];

  // only actor
  if (
    (professions.includes("actor") ||
      professions.includes("actors")) &&
    !(
      professions.includes("politician") ||
      professions.includes("politicians")
    )
  ) {
    return `/profile-actor/${item?.identityProfile?.slug || ""}`;
  }

  // only politician
  if (
    (professions.includes("politician") ||
      professions.includes("politicians")) &&
    !(
      professions.includes("actor") ||
      professions.includes("actors")
    )
  ) {
    return `/profile-politician/${item?.identityProfile?.slug || ""}`;
  }

  // actor + politician OR default
  return `/profiles/${item?.identityProfile?.slug || ""}`;
};
  // logged in user

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  // logged in user
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const [collections, setCollections] = useState([]);
  const [searchCollection, setSearchCollection] = useState("");
  const [collectionName, setCollectionName] = useState("");
  const navigate = useNavigate();
  //share


const handleShare = (platform, item) => {
      const profileLink = getProfileLink(item);

  const celebrityUrl =
    `${window.location.origin}${profileLink}`;
  const encodedUrl = encodeURIComponent(celebrityUrl);
  const encodedTitle = encodeURIComponent(
    item?.identityProfile?.name || ""
  );


    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;

      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;

      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;

      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
        break;

      case "copy":
        navigator.clipboard.writeText(celebrityUrl);
        toast.success("Link copied");
        return;

      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=500");
  };
  // ================= FOLLOW CLICK =================

  // ================= CHECK ALREADY FOLLOWING =================

  const getFollowStatus = async (celebrityId) => {
    if (!token || !user?._id || !celebrityId) return;

    try {
      const response = await checkFollowStatus(user?._id, celebrityId);

      setFollowStatus((prev) => ({
        ...prev,
        [celebrityId]: response.data.isFollowing,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (slides.length > 0) {
      slides.forEach((item) => {
        getFollowStatus(item._id);
      });
    }
  }, [slides]);

  const handleFollow = async (celebrityId) => {
    if (!token || !user) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    const isFollowing = followStatus[celebrityId];

    try {
      if (isFollowing) {
        // UNFOLLOW
        const res = await unfollowCelebrity(user?._id, celebrityId, token);

        if (res.data.success) {
          setFollowStatus((prev) => ({
            ...prev,
            [celebrityId]: false,
          }));

          toast.success("Unfollowed Successfully");
        }
      } else {
        // FOLLOW
        const response = await createFollow(
          {
            celebrityId,
            userId: user?._id,
          },
          token,
        );

        if (response.data.success) {
          setFollowStatus((prev) => ({
            ...prev,
            [celebrityId]: true,
          }));

          toast.success("Following Successfully");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  const handleSearchCollection = () => {
    // optional API call or console
  };
  const handleCreateCollection = async () => {
    try {
      const response = await createCollectionApi(
        {
          userId: user._id,

          name: collectionName,

          celebrityId: data?._id || data?.id,
        },
        token,
      );

      if (response.data.success) {
        toast.success("Collection Created");

        setCollectionName("");

        setCreateCollection(false);

        fetchCollections();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  const handleSaveToCollection = async (collectionId) => {
    try {
      const response = await saveToCollectionApi(
        {
          collectionId,

          celebrityId: data?._id || data?.id,

          userId: user?._id,
        },
        token,
      );

      if (response.data.success) {
        toast.success("Saved to collection");

        setSaveCollection(false);
      }
    } catch (error) {
      console.log(error);

      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };
  const fetchCollections = async () => {
    try {
      if (!user?._id) return;

      const response = await getUserCollections(user._id);

      if (response.data.success) {
        setCollections(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const filteredCollections = collections.filter((item) =>
    item.name?.toLowerCase().includes(searchCollection.toLowerCase()),
  );
  // Close all popups helper
  const closeAll = () => {
    setShareLink(false);
    setSaveCollection(false);
    setCreateCollection(false);
  };

  const fetchSlider = async () => {
    try {
      const response = await getCelebritiesBySlider(slug);

      if (response?.data?.success) {
        setSlides(response.data.data);
      }
    } catch (error) {
      console.log("SLIDER ERROR =>", error);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchSlider();
    }
  }, [slug]);

  return (
    <div className="w-full h-screen  flex items-center justify-center catcont">
      <div className="w-full h-full relative overflow-hidden ">
        <Swiper
          slidesPerView={1}
          loop={true}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1.15,
            },
          }}
          className="h-full catogeryslider"
        >
          {slides.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-full catodarey">
                {/* Background Image */}
                <img
                  src={item?.identityProfile?.featuredImage}
                  alt={item?.identityProfile?.name}
                  className="h-full w-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#00000033]"></div>

                {/* Slide Number Left */}
                <div className="absolute top-6 left-6 text-white primary-font text-[64px] font-[500]">
                  0{index + 1}
                </div>

                {/* Content */}
                <div className="absolute catslider bottom-20 left-10 text-white disl">
                  <div className="relative mb-[32px]">
                    <div className="flex justify-start items-center gap-[10px]">
                      {/* FOLLOW BUTTON */}

                      <button
                        onClick={() => handleFollow(item._id)}
                        className={`px-6 w-[172px] flex justify-center primary-font py-2 rounded-[24px] items-center gap-2
    ${
      followStatus[item._id]
        ? "bg-white text-[#4285F4] border border-[#4285F4]"
        : "bg-[#4285F4] text-white"
    }`}
                      >
                        {followStatus[item._id] ? "Following" : "Follow"}

                        {followStatus[item._id] ? (
                          <Check size={16} />
                        ) : (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M8 1V15M1 8H15"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>

                      {/* SAVE */}
                      <button
                        onClick={() => {
                          if (!token || !user?._id) {
                            toast.error("Please login first");

                            navigate("/login");

                            return;
                          }

                          fetchCollections();

                          closeAll();

                          setSaveCollection(!saveCollection);
                        }}
                        className="px-4 h-[42px] rounded-[24px] bg-white border border-[#4285F4] flex items-center"
                      >
                        <Bookmark color="#4285F4" />
                      </button>

                      {/* SHARE */}
                      {/* SHARE */}
                      <button
                        onClick={() => {
                          closeAll();
                          setShareLink(!shareLink);
                        }}
                        className="px-4 h-[42px] rounded-[24px] bg-white border border-[#4285F4] flex items-center"
                      >
                        <Share color="#4285F4" />
                      </button>

                      <div
                        className={`absolute z-[111] rounded-[16px] overflow-hidden pt-5 left-0 top-[100%] mt-2 w-[280px] bg-[#F4FBFF]  rounded-[12px] shadow transition-all duration-300
        ${saveCollection ? "opacity-100 block translate-y-0" : "opacity-0 hidden -translate-y-3 pointer-events-none"}`}
                      >
                        <div className="pt-4 py-6 px-3">
                          <h3 className="text-[#1E1E1E] primary-font text-[14px] font-[500] text-center">
                            Save
                          </h3>
                          <div className="relative mt-[12px]">
                            <input
                              type="search"
                              placeholder="Search Collection"
                              value={searchCollection}
                              onChange={(e) =>
                                setSearchCollection(e.target.value)
                              }
                              className="bg-[#fff] h-[40px] w-full border border-[#D9D9D9] p-5 rounded-[24px] outline-none"
                            />

                            <button
                              onClick={handleSearchCollection}
                              className="absolute top-0 right-0 z-20 px-[30px] w-fit h-[43px] flex items-center justify-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                              >
                                <path
                                  d="M12.7998 12.7998L9.8998 9.8998M11.4665 6.13314C11.4665 9.07866 9.07866 11.4665 6.13314 11.4665C3.18762 11.4665 0.799805 9.07866 0.799805 6.13314C0.799805 3.18762 3.18762 0.799805 6.13314 0.799805C9.07866 0.799805 11.4665 3.18762 11.4665 6.13314Z"
                                  stroke="#1E1E1E"
                                  strokeWidth="1.6"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>
                          <h4 className="mt-[12px] primary-font text-[#757575] text-[12px]">
                            All Collections
                          </h4>
                          <ul className="mt-[8px] flex flex-col gap-[8px]">
                            {filteredCollections.map((item) => (
                              <li key={item._id} className="group">
                                <button
                                  onClick={() =>
                                    handleSaveToCollection(item._id)
                                  }
                                  className="flex border border-[#fff] group-hover:border-[#4285F4] rounded-[8px] transition-all duration-300 bg-[#fff] p-1 w-full justify-between items-center"
                                >
                                  <h3 className="flex gap-2 primary-font text-[14px] font-[600] items-center">
                                    <img
                                      className="h-[48px] w-[48px] object-cover"
                                      src="/actor/profile.png"
                                      alt=""
                                    />

                                    <span class="text-[#000]">{item.name}</span>
                                  </h3>
                                </button>
                              </li>
                            ))}

                            {/* No Result */}
                            {filteredCollections.length === 0 && (
                              <li className="text-center text-gray-500 py-3">
                                No Collection Found
                              </li>
                            )}
                          </ul>
                        </div>

                        <button
                          onClick={() => {
                            (setCreateCollection(!createCollection),
                              setSaveCollection(!saveCollection));
                          }}
                          type="button"
                          className="bg-[#4285F4] hover:cursor-pointer flex justify-center w-full p-2 items-center gap-[8px] text-[#fff] primary-font text-[16px] font-[600]"
                        >
                          <span className="bg-[#fff] block h-[40px] w-[40px] flex items-center justify-center rounded-[8px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M8 1V15M1 8H15"
                                stroke="#4285F4"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                          Create New Collection
                        </button>
                      </div>

                      <div
                        className={`absolute z-[111] left-0 top-[100%] mt-2 w-[280px] bg-[#F4FBFF] p-4 rounded-[12px] shadow transition-all duration-300
        ${createCollection ? "opacity-100 block translate-y-0" : "opacity-0 hidden -translate-y-3 pointer-events-none"}`}
                      >
                        <h3 className="text-center text-sm font-medium">
                          Enter Collection Name
                        </h3>

                        <input
                          type="text"
                          placeholder="Name"
                          value={collectionName}
                          onChange={(e) => setCollectionName(e.target.value)}
                          className="bg-[#fff] h-[40px] w-full border border-[#D9D9D9] p-5 rounded-[24px] outline-none mt-5"
                        />

                        <button
                          onClick={handleCreateCollection}
                          className="bg-[#4285F4] hover:cursor-pointer mt-[12px] rounded-[16px] flex justify-center w-full p-2 items-center gap-[8px] text-[#fff] primary-font text-[16px] font-[600]"
                        >
                          Create
                        </button>
                      </div>

                      <div
                        className={`absolute z-[111] left-0 top-[100%] mt-2 w-[260px] bg-white p-4 rounded-[12px] shadow transition-all duration-300
                            ${shareLink ? "opacity-100 block translate-y-0" : "opacity-0 hidden -translate-y-3 pointer-events-none"}`}
                      >
                        <h3 className="text-center text-sm font-medium">
                          Share to
                        </h3>
                        <ul className="mt-5 flex flex-wrap gap-[10px]">
                          <li className="group">
                           <button
  type="button"
  onClick={() => handleShare("facebook", item)}
  className="flex flex-col transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center"
>
  <img src="/share/Facebook.png" alt="" />
  <h3 className="flex text-[8px] mt-[6px] gap-2 primary-font font-[500] items-center">
    <span>Facebook</span>
  </h3>
</button>
                          </li>
                          <li className="group">
                            <Link
                              onClick={() => handleShare("twitter", item)}
                              className="flex flex-col transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center"
                            >
                              <img
                                src="/share/Twitter.png"
                                className="h-[24px] w-[24px]"
                                alt=""
                              />
                              <h3 className="flex text-[8px] mt-[6px] gap-2 primary-font font-[500] items-center">
                                <span>X</span>
                              </h3>
                            </Link>
                          </li>
                          <li className="group">
                            <Link
                              onClick={() => handleShare("linkedin", item)}
                              className="flex flex-col transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center"
                            >
                              <img src="/share/Linkedin.png" alt="" />
                              <h3 className="flex text-[8px] mt-[6px] gap-2 primary-font font-[500] items-center">
                                <span>Linkedin</span>
                              </h3>
                            </Link>
                          </li>
                          <li className="group">
                         <button
  type="button"
                              onClick={() => handleShare("whatsapp", item)}
                              className="flex flex-col transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center"
                            >
                              <img src="/share/Whatsapp.png" alt="" />
                              <h3 className="flex text-[8px] mt-[6px] gap-2 primary-font font-[500] items-center">
                                <span>Whatsapp</span>
                              </h3>
                          </button>
                          </li>
                          <li className="group">
                            <Link
                              onClick={() => handleShare("copy", item)}
                              className="flex flex-col transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center"
                            >
                              <img src="/share/copy.svg" alt="" />
                              <h3 className="flex text-[8px] mt-[6px] gap-2 primary-font font-[500] items-center">
                                <span>Copy Link</span>
                              </h3>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-6xl font-bold berlin">
                    {item?.identityProfile?.name?.split(" ")[0] || ""}
                  </h1>

                  <h1 className="text-6xl font-bold berlin">
                    {item?.identityProfile?.name
                      ?.split(" ")
                      .slice(1)
                      .join(" ") || ""}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
