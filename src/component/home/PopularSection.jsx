import React from "react";

export default function PopularPeople() {
  const actors = [
    "Shah Rukh Khan",
    "Aamir Khan",
    "Deepika Padukone",
    "Alia Bhatt",
    "Ranveer Singh",
    "Priyanka Chopra Jonas",
    "Salman Khan",
    "Hrithik Roshan",
    "Kareena Kapoor Khan",
    "Akshay Kumar",
        "Shah Rukh Khan",
    "Aamir Khan",
    "Deepika Padukone",
    "Alia Bhatt",
    "Ranveer Singh",
    "Priyanka Chopra Jonas",
    "Salman Khan",
    "Hrithik Roshan",
    "Kareena Kapoor Khan",
    "Akshay Kumar",
        "Shah Rukh Khan",
    "Aamir Khan",
    "Deepika Padukone",
    "Alia Bhatt",
    "Ranveer Singh",
    "Priyanka Chopra Jonas",
    "Salman Khan",
    "Hrithik Roshan",
    "Kareena Kapoor Khan",
    "Akshay Kumar",
       "Narendra Modi",
    "Rahul Gandhi",
    "Amit Shah",
    "Arvind Kejriwal",
    "Yogi Adityanath",
    "Mamata Banerjee",
    "Nirmala Sitharaman",
    "S. Jaishankar",
    "Akhilesh Yadav",
    "Uddhav Thackeray",
  ];

  const politicians = [
    "Narendra Modi",
    "Rahul Gandhi",
    "Amit Shah",
    "Arvind Kejriwal",
    "Yogi Adityanath",
    "Mamata Banerjee",
    "Nirmala Sitharaman",
    "S. Jaishankar",
    "Akhilesh Yadav",
    "Uddhav Thackeray",
       "Narendra Modi",
    "Rahul Gandhi",
    "Amit Shah",
    "Arvind Kejriwal",
    "Yogi Adityanath",
    "Mamata Banerjee",
    "Nirmala Sitharaman",
    "S. Jaishankar",
    "Akhilesh Yadav",
    "Uddhav Thackeray",
       "Narendra Modi",
    "Rahul Gandhi",
    "Amit Shah",
    "Arvind Kejriwal",
    "Yogi Adityanath",
    "Mamata Banerjee",
    "Nirmala Sitharaman",
    "S. Jaishankar",
    "Akhilesh Yadav",
    "Uddhav Thackeray",
       "Narendra Modi",
    "Rahul Gandhi",
    "Amit Shah",
    "Arvind Kejriwal",
    "Yogi Adityanath",
    "Mamata Banerjee",
    "Nirmala Sitharaman",
    "S. Jaishankar",
    "Akhilesh Yadav",
    "Uddhav Thackeray",
  ];

  const NameList = ({ title, items }) => {
    return (
      <div className="mb-12">
        {/* Section Title */}
        <h2 className="text-[40px] font-[700] berlin  text-[#4285F4] mb-3">
          {title}
        </h2>

        {/* Names List */}
        <div className="flex flex-wrap gap-1 text-[#6E6E6E] md:text-[20px] text-[18px]">
          {items.map((name, index) => (
            <span key={index} className="mr-5 group cursor-pointer">
              <span className="group-hover:text-blue-600 primary-font  transition">
                {name}
              </span>

              {/* Pipe Separator */}
              {index !== items.length - 1 && (
                <span className="ml-5 text-gray-400">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className=" min-h-screen py-12 px-5">
      <div className="max-w-[1360px] mx-auto">
        <NameList title="Popular Actors" items={actors} />
        <NameList title="Popular Politicians" items={politicians} />
      </div>
    </div>
  );
}
