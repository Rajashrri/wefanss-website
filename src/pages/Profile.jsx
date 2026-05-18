import React, { useEffect, useState } from "react";
import AkshayProfile from "../component/profile/ProfileDetails";
import { useParams } from "react-router-dom";
import { getCelebrityBySlug } from "../utils/frontApi";

const Profile = () => {
  const { slug } = useParams();

  const [actorName, setActorName] = useState("");

  useEffect(() => {
    getActorName();
  }, [slug]);

  const getActorName = async () => {
    try {
      const res = await getCelebrityBySlug(slug);

      const item = res?.data?.data;

      setActorName(item?.identityProfile?.name || "");
    } catch (error) {
      console.log("Actor Name Error:", error);
    }
  };

  return (
    <>
      <div className="">
        <ul className="flex gap-2 px-6 py-2 bg-[#4285F4]">
          <li className="text-[#fff] ptimary-font text-[12px]">
            <a href="#!">Home</a>
          </li>

          <li className="text-[#fff] ptimary-font text-[12px]">/</li>

          <li className="text-[#fff] ptimary-font text-[12px]">
            Celebrites
          </li>

          <li className="text-[#fff] ptimary-font text-[12px]">/</li>

          <li className="text-[#fff] ptimary-font text-[12px]">
            Actors
          </li>

          <li className="text-[#fff] ptimary-font text-[12px]">/</li>

          {/* ✅ Dynamic Actor Name */}
          <li className="text-[#fff] ptimary-font text-[12px]">
            {actorName || "Loading..."}
          </li>
        </ul>
      </div>

      <AkshayProfile />
    </>
  );
};

export default Profile;