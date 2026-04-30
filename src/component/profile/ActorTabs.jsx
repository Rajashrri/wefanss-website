import React, { useState } from "react";
import Biography from "./Biography";
import Timeline from "./Timeline";
import Trivia from "./Trivia";

const ActorTabs = () => {
  const [activeTab, setActiveTab] = useState("Biography");

  const tabs = ["Biography", "Timeline", "Trivia"];

  return (
    <div className="bg-white rounded-[8px] md:p-6 p-3 shadow-xl">
      
      {/* Tabs */}
      <div className="flex md:flex-nowrap flex-wrap gap-4 mb-6 md:bg-[#F0F0F0] rounded-[100px] p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 md:w-[33%] primary-font py-2 hover:cursor-pointer rounded-[100px] text-[16px] font-[500] transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-[#4285F4] text-white"
                  : "md:bg-transparent bg-[#F0F0F0] text-black"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "Biography" && <Biography />}
      {activeTab === "Timeline" && <Timeline />}
      {activeTab === "Trivia" && <Trivia />}
    </div>
  );
};

export default ActorTabs;
