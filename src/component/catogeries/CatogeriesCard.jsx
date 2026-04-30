import React, { useState } from 'react'
import { Bookmark, Share } from "lucide-react";
import { Link } from "react-router-dom";

const CatogeriesCard = ({ data }) => {
  const [shareLink, setShareLink] = useState(false);
  const [saveCollection, setSaveCollection] = useState(false);
  const [createCollection, setCreateCollection] = useState(false);
  const [follow, setFollow] = useState(true);

  // Close all popups helper
  const closeAll = () => {
    setShareLink(false);
    setSaveCollection(false);
    setCreateCollection(false);
  };

  return (
    <div className={`relative w-full bg-[#F4FBFF] rounded-[8px] p-3 space-y-3 ${data.cardcalss}`}>

      {/* CARD CLICKABLE AREA */}
      <Link to={data.link} className="block space-y-3">

        {/* Image */}
        <div className="w-full h-[340px] overflow-hidden rounded-lg">
          <img
            src={data.img}
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
            <span>{data.totalMovies}+ Movies</span>
            <span>{data.totalAwards}+ Awards</span>
          </p>
        </div>
      </Link>

      {/* ACTION BUTTONS (OUTSIDE LINK ✅) */}
      <div className="mt-3 flex items-center gap-[10px]">

        {/* FOLLOW */}
        <button
          onClick={() => setFollow(!follow)}
          className={`px-6 w-[172px] flex justify-center primary-font py-2 rounded-[24px] flex items-center gap-2 
          ${follow ? "bg-[#4285F4] text-white" : "bg-white text-[#4285F4] border border-[#4285F4]"}`}
        >
          {follow ? "follow" : "following"}<svg className={` ${follow
                                ? "block"
                                : "hidden invisible"
                                }`
                            } width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1V15M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
        </button>

        {/* SAVE */}
        <button
          onClick={() => {
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
        ${shareLink ? "opacity-100 block translate-y-0" : "opacity-0 hidden -translate-y-3 pointer-events-none"}`}>

        <h3 className="text-center text-sm font-medium">Share to</h3>
  <ul className="mt-5 flex flex-wrap gap-[10px]">

        <li className="group">
          <Link className="flex flex-col transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center" >
            <img src="/share/Facebook.png" alt="" />
            <h3 className="flex text-[8px] mt-[6px] gap-2 primary-font font-[500] items-center">
              <span>Facebook</span></h3>
          </Link>
        </li>
        <li className="group">
          <Link className="flex flex-col transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center" >
            <img src="/share/Twitter.png" className='h-[24px] w-[24px]' alt="" />
            <h3 className="flex text-[8px] mt-[6px] gap-2 primary-font font-[500] items-center">
              <span>X</span></h3>
          </Link>
        </li>
        <li className="group">
          <Link className="flex flex-col transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center" >
            <img src="/share/Linkedin.png" alt="" />
            <h3 className="flex text-[8px] mt-[6px] gap-2 primary-font font-[500] items-center">
              <span>Linkedin</span></h3>
          </Link>
        </li>
        <li className="group">
          <Link className="flex flex-col transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center" >
            <img src="/share/Whatsapp.png" alt="" />
            <h3 className="flex text-[8px] mt-[6px] gap-2 primary-font font-[500] items-center">
              <span>Whatsapp</span></h3>
          </Link>
        </li>
        <li className="group">
          <Link className="flex flex-col transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center" >
            <img src="/share/copy.svg" alt="" />
            <h3 className="flex text-[8px] mt-[6px] gap-2 primary-font font-[500] items-center">
              <span>Copy Link</span></h3>
          </Link>
        </li>

      </ul>
    
      </div>

    
      <div className={`absolute z-[111] rounded-[16px] overflow-hidden pt-5 left-0 top-[100%] mt-2 w-[280px] bg-[#F4FBFF]  rounded-[12px] shadow transition-all duration-300
        ${saveCollection ? "opacity-100 block translate-y-0" : "opacity-0 hidden -translate-y-3 pointer-events-none"}`}>

         <div className='pt-4 py-6 px-3'>
        <h3 className="text-[#1E1E1E] primary-font text-[14px] font-[500] text-center">Save</h3>
        <div className='relative mt-[12px]'>
          <input
            type="search"
            placeholder='Search'
            //   value={search}

            className='bg-[#fff] h-[40px] w-full border border-[#D9D9D9] p-5 rounded-[24px] outline-none'
          />

          <button className=' absolute top-[0px] right-[0px] z-20 px-[30px] text-[#FFFFFF] rounded-[100px] w-fit h-[43px] flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M12.7998 12.7998L9.8998 9.8998M11.4665 6.13314C11.4665 9.07866 9.07866 11.4665 6.13314 11.4665C3.18762 11.4665 0.799805 9.07866 0.799805 6.13314C0.799805 3.18762 3.18762 0.799805 6.13314 0.799805C9.07866 0.799805 11.4665 3.18762 11.4665 6.13314Z" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <h4 className='mt-[12px] primary-font text-[#757575] text-[12px]'>All Collections</h4>
        <ul className=" mt-[8px] flex flex-col gap-[8px]">
          <li className="group">
            <Link className="flex border border-[#fff] group-hover:border-[#4285F4] rounded-[8px] transition-all duration-300 bg-[#fff] p-1 w-full justify-between items-center" >
              <h3 className="flex gap-2 primary-font text-[14px] font-[600] items-center"><img className='h-[48px] w-[48px] object-cover' src="/actor/profile.png" alt="" />
                <span>Collection1</span></h3>

            </Link>
          </li>
          <li className="group">
            <Link className="flex border border-[#fff] group-hover:border-[#4285F4] rounded-[8px] transition-all duration-300 bg-[#fff] p-1 w-full justify-between items-center" >
              <h3 className="flex gap-2 primary-font text-[14px] font-[600] items-center"><img className='h-[48px] w-[48px] object-cover' src="/actor/profile.png" alt="" />
                <span>Collection2</span></h3>

            </Link>
          </li>
          <li className="group">
            <Link className="flex border border-[#fff] group-hover:border-[#4285F4] rounded-[8px] transition-all duration-300 bg-[#fff] p-1 w-full justify-between items-center" >
              <h3 className="flex gap-2 primary-font text-[14px] font-[600] items-center"><img className='h-[48px] w-[48px] object-cover' src="/actor/profile.png" alt="" />
                <span>Collection3</span></h3>

            </Link>
          </li>

        </ul>
      </div>

      <button onClick={() => { setCreateCollection(!createCollection), setSaveCollection(!saveCollection) }} type="button" className='bg-[#4285F4] hover:cursor-pointer flex justify-center w-full p-2 items-center gap-[8px] text-[#fff] primary-font text-[16px] font-[600]' ><span className='bg-[#fff] block h-[40px] w-[40px] flex items-center justify-center rounded-[8px]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1V15M1 8H15" stroke="#4285F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg></span>Create New Collection</button>
      

      </div>

   
      <div className={`absolute z-[111] left-0 top-[100%] mt-2 w-[280px] bg-[#F4FBFF] p-4 rounded-[12px] shadow transition-all duration-300
        ${createCollection ? "opacity-100 block translate-y-0" : "opacity-0 hidden -translate-y-3 pointer-events-none"}`}>

        <h3 className="text-center text-sm font-medium">Enter Collection Name</h3>

        <input
          type="text"
          placeholder="Name"
          className="bg-[#fff] h-[40px] w-full border border-[#D9D9D9] p-5 rounded-[24px] outline-none mt-5"
        />

        <button
          onClick={() => setCreateCollection(false)}
          className="bg-[#4285F4] hover:cursor-pointer mt-[12px] rounded-[16px] flex justify-center w-full p-2 items-center gap-[8px] text-[#fff] primary-font text-[16px] font-[600]"
        >
          Create
        </button>
      </div>

    </div>
  );
};

export default CatogeriesCard;