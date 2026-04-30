import React from "react";

const Elections = ({ items }) => {
  return (
    <div>
      {items?.map((item) => (
        <div key={item.id} className="flex gap-3 py-3 items-center">
          <div>
            <h3 className="text-[16px] primary-font font-[500] text-[#1E1E1E]">
              {item.name}
            </h3>

            <p className="text-[12px] text-[#868484] primary-font font-[400] mt-1">

              {/* Tags */}
            {item.tag?.map((tagItem, index) => (
  <span key={index} className="inline-flex items-center">
    {tagItem}

    {/* Dot Separator Between Tags Only */}
    {index !== item.tag.length - 1 && (
      <span className="mx-2 inline-block h-[4px] w-[4px] bg-[#9b9a9b] rounded-full"></span>
    )}
  </span>
))}


              {/* Status */}
         {item.status !== undefined && (<>
         <span className="mx-2 inline-block h-[4px] w-[4px] bg-[#9b9a9b] rounded-full"></span>
                <span
                    className={`ml-2 font-[500] ${
                    item.status ? "text-[#30D158]" : "text-red-500"
                    }`}
                >
                    {item.status ? "Won" : "Lost"}
                </span>
                </>
                )}
              
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Elections;
