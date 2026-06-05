import React, { useEffect, useState } from "react";
import { Bookmark, Share, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {
  createFollow,
  checkFollowStatus,
  unfollowCelebrity
} from "../../utils/frontApi";
import {
  createCollectionApi,
  getUserCollections,
  saveToCollectionApi,
} from "../../utils/collectionApi";
const CatogeriesCard = ({ data, refreshFollowed }) => {
    const [shareLink, setShareLink] = useState(false);
  const [saveCollection, setSaveCollection] = useState(false);
  const [createCollection, setCreateCollection] = useState(false);
const [follow, setFollow] = useState(false);  // false = not following
  // true = following
const [collections, setCollections] =
  useState([]);
const [searchCollection, setSearchCollection] = useState("");
const [collectionName, setCollectionName] =
  useState("");
  const navigate = useNavigate();

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  // logged in user
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
const celebrityId = data?._id || data?.id;



//share

const celebrityUrl = `${window.location.origin}${data.link}`;

const handleShare = (platform) => {
  const encodedUrl = encodeURIComponent(celebrityUrl);
  const encodedTitle = encodeURIComponent(data.name);

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

const handleFollow = async () => {
  if (!token || !user) {
    toast.error("Please login first");
    navigate("/login");
    return;
  }

  // ================= UNFOLLOW =================
  if (follow) {
    toast.custom((t) => (
      <div className="bg-white p-4 rounded-lg shadow-lg border w-[280px]">
        <p className="text-sm font-medium">
          Are you sure you want to unfollow?
        </p>

        <div className="flex justify-end gap-2 mt-3">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            Cancel
          </button>

          <button
            onClick={async () => {
              toast.dismiss(t.id);

              try {
const res = await unfollowCelebrity(
  user?._id,
  celebrityId,
  token
);

                if (res.data.success) {
                  setFollow(false);
                  toast.success("Unfollowed Successfully");
                  refreshFollowed?.();
                }
              } catch (err) {
  console.log("FOLLOW ERROR:", err?.response?.data || err);
  toast.error(err?.response?.data?.message || "Something went wrong");
}
            }}
            className="px-3 py-1 bg-[#4285F4] text-white rounded"
          >
            Unfollow
          </button>
        </div>
      </div>
    ));

    return;
  }

  // ================= FOLLOW =================
  try {
    const response = await createFollow(
      {
        celebrityId: celebrityId, // ✅ FIXED
        userId: user?._id,
      },
      token
    );

    if (response.data.success) {
      setFollow(true);
      toast.success("Following Successfully");
                        refreshFollowed?.();

    }
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message || "Something went wrong");
  }
};


  // ================= CHECK ALREADY FOLLOWING =================

const getFollowStatus = async () => {

  if (!token || !user?._id || !celebrityId) return;

  try {

    const response = await checkFollowStatus(
      user?._id,
      celebrityId
    );


    setFollow(!!response?.data?.isFollowing);

  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  getFollowStatus();
}, [celebrityId]);

const filteredCollections = collections.filter((item) =>
  item.name
    ?.toLowerCase()
    .includes(searchCollection.toLowerCase())
);

const handleSearchCollection = () => {
  // optional API call or console
};
const handleCreateCollection =
  async () => {

    try {

      const response =
        await createCollectionApi(
          {
            userId: user._id,

            name: collectionName,

            celebrityId:
              data?._id || data?.id,
          },
          token
        );

      if (response.data.success) {

        toast.success(
          "Collection Created"
        );

        setCollectionName("");

        setCreateCollection(false);

        fetchCollections();
      }

    } catch (error) {

      toast.error(
        error?.response?.data
          ?.message ||
          "Something went wrong"
      );
    }
  };


  const handleSaveToCollection =
  async (collectionId) => {

    try {

      const response =
        await saveToCollectionApi(
          {
            collectionId,

            celebrityId:
              data?._id || data?.id,

            userId: user?._id,
          },
          token
        );

      if (response.data.success) {

        toast.success(
          "Saved to collection"
        );

        setSaveCollection(false);
      }

    } catch (error) {

      console.log(error);

      toast.error(
        error?.response?.data
          ?.message ||
          "Something went wrong"
      );
    }
  };
const fetchCollections = async () => {

  try {

    if (!user?._id) return;

    const response =
      await getUserCollections(
        user._id
      );

    if (response.data.success) {

      setCollections(
        response.data.data
      );
    }

  } catch (error) {

    console.log(error);

  }
};
  // Close all popups helper
  const closeAll = () => {
    setShareLink(false);
    setSaveCollection(false);
    setCreateCollection(false);
  };
 // ✅ Correct Vite env variable

 // ✅ FIX IMAGE URL
  const getImageUrl = (path) => {
  if (!path) return "/no-image.png";

  // remove localhost if mistakenly added
  if (path.includes("res.cloudinary.com")) {
    const cloudinaryIndex = path.indexOf("https://res.cloudinary.com");

    if (cloudinaryIndex !== -1) {
      return path.substring(cloudinaryIndex);
    }
  }

  // if already normal full url
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // local image
  return `http://localhost:8000${path.startsWith("/") ? path : "/" + path}`;
};
  return (
    <div className={`relative w-full bg-[#F4FBFF] rounded-[8px] p-3 space-y-3 ${data.cardcalss}`}>

      {/* CARD CLICKABLE AREA */}
      <Link to={data.link} className="block space-y-3">

        {/* Image */}
        <div className="w-full h-[340px] overflow-hidden rounded-lg">
          <img
             src={getImageUrl(data.img)}   // ✅ use function here
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-1 space-y-2">
          <h2 className="text-[32px] font-[700] berlin text-[#1E1E1E]">
            {data.name}
          </h2>

          <p className="text-[#757575] text-[16px] primary-font font-[500] flex justify-between">
            <span>{data.totalMovies}+ Moviesvv</span>
            <span>{data.totalAwards}+ Awards</span>
          </p>
        </div>
      </Link>

      {/* ACTION BUTTONS (OUTSIDE LINK ✅) */}
      <div className="mt-3 flex items-center gap-[10px]">

   {/* FOLLOW BUTTON */}

      <button
  onClick={handleFollow}
  className={`px-6 w-[172px] flex justify-center primary-font py-2 rounded-[24px] items-center gap-2

  ${
    follow
      ? "bg-white text-[#4285F4] border border-[#4285F4]"
      : "bg-[#4285F4] text-white"
  }`}
>
  {follow ? "Following" : "Follow"}

  {follow ? (
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
        <button
          onClick={() => {
            closeAll();
            setShareLink(!shareLink);
          }}
          className="px-4 h-[42px] rounded-[24px] bg-white border border-[#4285F4] flex items-center"
        >
          <Share color="#4285F4" />
        </button>
      </div>

   
      <div className={`absolute z-[111] left-0 top-[100%] mt-2 w-[260px] bg-white p-4 rounded-[12px] shadow transition-all duration-300
        ${shareLink ? "opacity-100 block translate-y-[-150%]" : "opacity-0 hidden -translate-y-3 pointer-events-none"}`}>

        <h3 className="text-center text-sm font-medium">Share to</h3>
  <ul className="mt-5 flex flex-wrap gap-[10px]">

        <li className="group">
         <Link
  onClick={() => handleShare("facebook")}
  className="flex flex-col transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center"
>
  <img src="/share/Facebook.png" alt="" />
  <h3 className="flex text-[8px] mt-[6px] gap-2 primary-font font-[500] items-center">
    <span>Facebook</span>
  </h3>
</Link>
        </li>
        <li className="group">
        <Link
  onClick={() => handleShare("twitter")}
  className="flex flex-col transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center"
>
  <img src="/share/Twitter.png" className="h-[24px] w-[24px]" alt="" />
  <h3 className="flex text-[8px] mt-[6px] gap-2 primary-font font-[500] items-center">
    <span>X</span>
  </h3>
</Link>
        </li>
        <li className="group">
         <Link
  onClick={() => handleShare("linkedin")}
  className="flex flex-col transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center"
>
  <img src="/share/Linkedin.png" alt="" />
  <h3 className="flex text-[8px] mt-[6px] gap-2 primary-font font-[500] items-center">
    <span>Linkedin</span>
  </h3>
</Link>
        </li>
        <li className="group">
         <Link
  onClick={() => handleShare("whatsapp")}
  className="flex flex-col transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center"
>
  <img src="/share/Whatsapp.png" alt="" />
  <h3 className="flex text-[8px] mt-[6px] gap-2 primary-font font-[500] items-center">
    <span>Whatsapp</span>
  </h3>
</Link>
        </li>
        <li className="group">
        <Link
  onClick={() => handleShare("copy")}
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

    
      <div className={`absolute z-[111] rounded-[16px] overflow-hidden pt-5 left-0 top-[100%] mt-2 w-[280px] bg-[#F4FBFF]  rounded-[12px] shadow transition-all duration-300
        ${saveCollection ? "opacity-100 block translate-y-[-150%]" : "opacity-0 hidden -translate-y-3 pointer-events-none"}`}>

         <div className='pt-4 py-6 px-3'>
        <h3 className="text-[#1E1E1E] primary-font text-[14px] font-[500] text-center">Save</h3>
        <div className='relative mt-[12px]'>
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
        <h4 className='mt-[12px] primary-font text-[#757575] text-[12px]'>All Collections</h4>
      <ul className="mt-[8px] flex flex-col gap-[8px]">

  {filteredCollections.map((item) => (

    <li
      key={item._id}
      className="group"
    >

      <button
        onClick={() =>
          handleSaveToCollection(
            item._id
          )
        }
        className="flex border border-[#fff] group-hover:border-[#4285F4] rounded-[8px] transition-all duration-300 bg-[#fff] p-1 w-full justify-between items-center"
      >

        <h3 className="flex gap-2 primary-font text-[14px] font-[600] items-center">

          <img
            className="h-[48px] w-[48px] object-cover"
            src="/actor/profile.png"
            alt=""
          />

          <span>{item.name}</span>

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

      <button onClick={() => { setCreateCollection(!createCollection), setSaveCollection(!saveCollection) }} type="button" className='bg-[#4285F4] hover:cursor-pointer flex justify-center w-full p-2 items-center gap-[8px] text-[#fff] primary-font text-[16px] font-[600]' ><span className='bg-[#fff] block h-[40px] w-[40px] flex items-center justify-center rounded-[8px]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1V15M1 8H15" stroke="#4285F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg></span>Create New Collection</button>
      

      </div>

   
      <div className={`absolute z-[111] left-0 top-[100%] mt-2 w-[280px] bg-[#F4FBFF] p-4 rounded-[12px] shadow transition-all duration-300
        ${createCollection ? "opacity-100 block translate-y-[-150%]" : "opacity-0 hidden -translate-y-3 pointer-events-none"}`}>

        <h3 className="text-center text-sm font-medium">Enter Collection Name</h3>

       <input
  type="text"
  placeholder="Name"
  value={collectionName}
  onChange={(e) =>
    setCollectionName(
      e.target.value
    )
  }
  className="bg-[#fff] h-[40px] w-full border border-[#D9D9D9] p-5 rounded-[24px] outline-none mt-5"
/>

       <button
  onClick={handleCreateCollection}
  className="bg-[#4285F4] hover:cursor-pointer mt-[12px] rounded-[16px] flex justify-center w-full p-2 items-center gap-[8px] text-[#fff] primary-font text-[16px] font-[600]"
>
  Create
</button>
      </div>

    </div>
  );
};

export default CatogeriesCard;