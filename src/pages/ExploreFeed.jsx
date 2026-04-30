import React,{ useState, useRef, useEffect } from "react";
import UserProfile from "../component/dashboardComp/UserProfile";
import Button from "../component/Button";
import CatogeriesCard from "../component/catogeries/CatogeriesCard";
import Card2 from "../component/card/Card2";
import { NavLink } from "react-router-dom";
import img12 from "../../public/feed/1.png"


const Sidebar = () => {
  const [active, setActive] = React.useState("Home");



  return (
    <div className="pb-[50px] slidebarboyfull sticky top-0 md:w-84 bg-white shadow p-[20px] rounded-[16px] flex flex-col">
      <div className="flex flex-col items-center">
        <div className='relative' >
            <img src="/dash-pro.png" className='rounded-full w-full h-[108px] overflow-hidden border border-[#34C759] border-[4px] p-1' alt="" />
            <h3 className='p-[10px] text-[#34C759] primary-font text-[14px] font-[500] px-3 m-auto absolute bottom-[-15px] left-[28%] bg-[#F3FFF6] w-fit rounded-[8px]'>80%</h3>
        </div>
        <div className='mt-6  md:flex hidden justify-center'>

            <h3 className='berlin text-[20px]'>Jhone Doe</h3>
        </div>
      </div>

      <div className="mt-6 flex sidemulink md:flex-col space-y-2 flex-1 overflow-auto">
      
          <NavLink to="/explorer-feed"
           
            className={({ isActive }) =>
              `w-full flex p-[16px] rounded-lg text-left primary-font text-[16px] transition-all
              ${isActive 
                ? "bg-[#4285F4] text-[#E3E3E3]" 
                : "text-[#1E1E1E] hover:bg-[#4285F4] hover:text-white"
              }`
            }
          >
            <svg className="me-[10px] group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <g clip-path="url(#clip0_1508_8711)">
                <path className=" group-hover:fill-white" d="M19.5016 8.7L11.3016 0.5C11.0016 0.2 10.5016 0 10.0016 0C9.50156 0 9.00156 0.2 8.70156 0.5L0.501562 8.7C-0.198438 9.4 -0.198438 10.6 0.501562 11.3C0.801562 11.6 1.30156 11.8 1.70156 11.8C1.70156 11.8 1.70156 11.8 1.80156 11.8H2.10156V17.8C2.10156 19 3.10156 20 4.30156 20H7.50156C7.80156 20 8.10156 19.7 8.10156 19.4V14.7C8.10156 14.2 8.50156 13.7 9.10156 13.7H11.0016C11.5016 13.7 12.0016 14.1 12.0016 14.7V19.4C12.0016 19.7 12.3016 20 12.6016 20H15.8016C17.0016 20 18.0016 19 18.0016 17.8V11.8H18.3016C18.8016 11.8 19.3016 11.6 19.6016 11.3C20.2016 10.6 20.2016 9.4 19.5016 8.7Z" />
            </g>
            <defs>
                <clipPath id="clip0_1508_8711">
                <rect width="20" height="20" />
                </clipPath>
            </defs>
            </svg>Home
          </NavLink>
          <NavLink to="/profile"
            // onClick={() => setActive(item)}
            className={({ isActive }) =>
                `w-full flex p-[16px] rounded-lg text-left primary-font text-[16px] transition-all
                ${isActive 
                  ? "bg-[#4285F4] text-[#E3E3E3]" 
                  : "text-[#1E1E1E] hover:bg-[#4285F4] hover:text-white"
                }`
              }
          >
           <svg className="me-[10px] group-hover:fill-white"  fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" >
                <g clip-path="url(#clip0_1627_5236)">
                  <path className=" group-hover:fill-white"  d="M9.99859 10.3902C11.0275 10.3922 12.0338 10.0889 12.8903 9.51873C13.7467 8.94855 14.4148 8.13712 14.8099 7.18712C15.205 6.23712 15.3094 5.19126 15.1099 4.1819C14.9104 3.17254 14.4159 2.24506 13.6891 1.51682C12.9623 0.788588 12.0357 0.292342 11.0267 0.0908873C10.0178 -0.110568 8.97171 -0.00817591 8.02096 0.385104C7.0702 0.778384 6.25748 1.44487 5.68565 2.30023C5.11382 3.15558 4.8086 4.16134 4.80859 5.19023C4.81123 6.56681 5.35856 7.88641 6.33101 8.86074C7.30347 9.83508 8.62201 10.3849 9.99859 10.3902Z" />
                  <path className=" group-hover:fill-white" d="M18.9094 14.5403C18.7791 14.1863 18.6043 13.8503 18.3894 13.5403C17.8847 12.7831 17.2255 12.1413 16.4551 11.657C15.6847 11.1727 14.8205 10.8569 13.9194 10.7303C13.6904 10.7021 13.4591 10.759 13.2694 10.8903C12.3225 11.5849 11.1788 11.9594 10.0044 11.9594C8.83005 11.9594 7.6863 11.5849 6.7394 10.8903C6.64574 10.8207 6.53904 10.7707 6.42566 10.7432C6.31228 10.7158 6.19452 10.7114 6.0794 10.7303C4.99188 10.8749 3.96015 11.298 3.08416 11.9585C2.20817 12.619 1.51762 13.4945 1.0794 14.5003C1.04519 14.5668 1.02734 14.6405 1.02734 14.7153C1.02734 14.7901 1.04519 14.8638 1.0794 14.9303C1.26645 15.241 1.47007 15.5415 1.6894 15.8303C2.0017 16.2556 2.35324 16.6507 2.7394 17.0103C3.0594 17.3303 3.4194 17.6203 3.7394 17.9203C5.5237 19.2451 7.68704 19.9604 9.9094 19.9604C12.1318 19.9604 14.2951 19.2451 16.0794 17.9203C16.4329 17.6399 16.767 17.3358 17.0794 17.0103C17.4431 16.6438 17.7775 16.2492 18.0794 15.8303C18.3042 15.5455 18.5081 15.2447 18.6894 14.9303C18.7637 14.8983 18.8254 14.8428 18.8651 14.7724C18.9048 14.7019 18.9204 14.6204 18.9094 14.5403Z" />
                </g>
                <defs>
                  <clipPath id="clip0_1627_5236">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
          <span>Profile</span>
          </NavLink>
          <NavLink  to="/followed-celebrities" className={({ isActive }) =>
          `w-full flex p-[16px] rounded-lg text-left primary-font text-[16px] transition-all
          ${isActive 
            ? "bg-[#4285F4] text-[#E3E3E3]" 
            : "text-[#1E1E1E] hover:bg-[#4285F4] hover:text-white"
          }`
        }
          >
           <svg className="me-[10px] group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path className=" group-hover:fill-white" d="M21.3524 5.6147H15.8823V10.8148C15.8801 12.6184 15.2969 14.3749 14.2166 15.831C13.1363 17.287 11.6147 18.3676 9.87109 18.917C10.3757 20.5903 11.4877 22.0221 12.995 22.9394C14.5024 23.8568 16.2996 24.1955 18.0442 23.8909C19.7887 23.5864 21.3584 22.66 22.4542 21.2882C23.5499 19.9165 24.0949 18.1954 23.9853 16.4532V8.16144C23.9854 7.82298 23.917 7.48789 23.7841 7.17578C23.6512 6.86366 23.4565 6.58078 23.2113 6.34366C22.9662 6.10655 22.6756 5.91995 22.3564 5.79479C22.0372 5.66962 21.6959 5.6084 21.3524 5.6147ZM20.571 18.1115C20.5314 18.1937 20.4753 18.2671 20.4062 18.3274C20.3371 18.3877 20.2563 18.4336 20.1687 18.4623C20.0811 18.4911 19.9886 18.5021 19.8965 18.4948C19.8045 18.4874 19.715 18.4618 19.6332 18.4195C18.8602 18.0399 18.0083 17.8422 17.1446 17.8422C16.2809 17.8422 15.429 18.0399 14.656 18.4195C14.4917 18.5025 14.3008 18.5179 14.125 18.4624C13.9492 18.4069 13.8029 18.285 13.7182 18.1234C13.6335 17.9598 13.6175 17.7699 13.6737 17.5947C13.73 17.4196 13.8539 17.2734 14.0188 17.1876C14.9864 16.7138 16.0521 16.4673 17.1326 16.4673C18.2131 16.4673 19.2788 16.7138 20.2464 17.1876C20.3298 17.2266 20.4043 17.2818 20.4655 17.35C20.5267 17.4181 20.5733 17.4977 20.6025 17.5839C20.6317 17.6702 20.6428 17.7614 20.6354 17.8521C20.6279 17.9428 20.6019 18.031 20.559 18.1115H20.571ZM20.1863 12.331H18.7797C18.609 12.309 18.4522 12.2265 18.3387 12.099C18.2251 11.9715 18.1625 11.8077 18.1625 11.638C18.1625 11.4684 18.2251 11.3046 18.3387 11.1771C18.4522 11.0496 18.609 10.9671 18.7797 10.9451H20.1863C20.357 10.9671 20.5137 11.0496 20.6273 11.1771C20.7408 11.3046 20.8034 11.4684 20.8034 11.638C20.8034 11.8077 20.7408 11.9715 20.6273 12.099C20.5137 12.2265 20.357 12.309 20.1863 12.331Z" />
              <path className=" group-hover:fill-white" d="M14.4869 10.8148V2.52305C14.4839 1.86094 14.2181 1.22627 13.7463 0.75477C13.2745 0.28327 12.6341 0.0123694 11.9622 0H2.57279C1.89141 0.00311531 1.23885 0.271185 0.757045 0.745897C0.275238 1.22061 0.00316186 1.86356 0 2.5349V10.8266C0 12.7116 0.759983 14.5193 2.11276 15.8522C3.46554 17.185 5.3003 17.9338 7.21342 17.9338C9.12653 17.9338 10.9613 17.185 12.3141 15.8522C13.6669 14.5193 14.4268 12.7116 14.4268 10.8266L14.4869 10.8148ZM3.5466 5.5673C3.54657 5.38399 3.61965 5.208 3.75008 5.07727C3.88052 4.94654 4.05786 4.87154 4.24389 4.86843H5.61444C5.80047 4.87154 5.97782 4.94654 6.10825 5.07727C6.23869 5.208 6.31177 5.38399 6.31174 5.5673C6.31174 5.74952 6.23827 5.92426 6.10751 6.05311C5.97674 6.18195 5.79938 6.25433 5.61444 6.25433H4.20783C4.02921 6.24522 3.86098 6.16883 3.73792 6.04096C3.61485 5.91309 3.54636 5.74352 3.5466 5.5673ZM10.3993 12.3428C9.43129 12.8221 8.36292 13.0716 7.27954 13.0716C6.19616 13.0716 5.12779 12.8221 4.15974 12.3428C3.99588 12.2592 3.87157 12.1159 3.81321 11.9433C3.75484 11.7708 3.76702 11.5827 3.84716 11.4189C3.92956 11.2642 4.06865 11.1463 4.23614 11.0891C4.40364 11.0319 4.58696 11.0397 4.74883 11.1109C5.52183 11.4906 6.37375 11.6882 7.23746 11.6882C8.10117 11.6882 8.95309 11.4906 9.72609 11.1109C9.87887 11.0699 10.0413 11.0813 10.1866 11.1433C10.332 11.2052 10.4515 11.3141 10.5257 11.452C10.5999 11.5899 10.6242 11.7485 10.5947 11.9018C10.5651 12.0551 10.4835 12.1939 10.3633 12.2955L10.3993 12.3428ZM10.2791 6.25433H8.88452C8.79195 6.25591 8.69998 6.2393 8.61399 6.20548C8.52799 6.17165 8.4497 6.1213 8.38367 6.05734C8.31764 5.99339 8.2652 5.91712 8.22941 5.83298C8.19362 5.74885 8.17519 5.65853 8.17521 5.5673C8.17521 5.38195 8.24994 5.20419 8.38296 5.07312C8.51598 4.94206 8.6964 4.86843 8.88452 4.86843H10.2791C10.4652 4.87154 10.6425 4.94654 10.7729 5.07727C10.9034 5.208 10.9764 5.38399 10.9764 5.5673C10.9764 5.74952 10.903 5.92426 10.7722 6.05311C10.6414 6.18195 10.4641 6.25433 10.2791 6.25433Z" />
            </svg>
         <span> Followed Celebrities</span>
          </NavLink>
          <NavLink to="/my-collections"
            className={({ isActive }) =>
                `w-full flex p-[16px] rounded-lg text-left primary-font text-[16px] transition-all
              ${isActive 
                ? "bg-[#4285F4] text-[#E3E3E3]" 
                : "text-[#1E1E1E] hover:bg-[#4285F4] hover:text-white"
              }`
            }
          >
            <svg className="me-[10px] group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <g clip-path="url(#clip0_1465_3815)">
                <path className=" group-hover:fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M4.20078 3.1001C4.20078 2.0001 5.10078 1.1001 6.20078 1.1001H14.1008C15.2008 1.1001 16.1008 2.0001 16.1008 3.1001V4.1001H4.20078V3.1001ZM2.20078 7.5001C2.20078 6.4001 3.10078 5.5001 4.20078 5.5001H16.0008C17.1008 5.5001 18.0008 6.4001 18.0008 7.5001V8.5001H2.20078V7.5001ZM0.300781 12.0001C0.300781 10.9001 1.20078 10.0001 2.30078 10.0001H18.0008C19.1008 10.0001 20.0008 10.9001 20.0008 12.0001V15.0001C20.0008 17.2001 18.2008 18.9001 16.1008 18.9001H4.20078C2.00078 18.9001 0.300781 17.1001 0.300781 15.0001V12.0001ZM7.40078 13.0001C7.40078 12.6001 7.70078 12.3001 8.10078 12.3001H12.1008C12.5008 12.3001 12.8008 12.6001 12.8008 13.0001C12.8008 13.4001 12.5008 13.7001 12.1008 13.7001H8.10078C7.80078 13.7001 7.40078 13.4001 7.40078 13.0001Z" />
              </g>
              <defs>
                <clipPath id="clip0_1465_3815">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          <span>My Collections</span>
          </NavLink>
          <NavLink to="/change-password"
            // onClick={() => setActive(item)}
            className={({ isActive }) =>
              `w-full flex p-[16px] rounded-lg text-left primary-font text-[16px] transition-all
              ${isActive 
                ? "bg-[#4285F4] text-[#E3E3E3]" 
                : "text-[#1E1E1E] hover:bg-[#4285F4] hover:text-white"
              }`
            }
          >
           <svg className="me-[10px] group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <g clip-path="url(#clip0_1465_3810)">
                <path className=" group-hover:fill-white" d="M12.5016 8.0999H11.9016V6.8999C11.9016 5.4999 10.8016 4.3999 9.40156 4.3999C8.00156 4.3999 6.90156 5.4999 6.90156 6.8999V8.0999H6.20156C5.90156 8.0999 5.60156 8.3999 5.60156 8.6999V13.6999C5.60156 13.9999 5.90156 14.2999 6.20156 14.2999H12.4016C12.7016 14.2999 13.0016 13.9999 13.0016 13.6999V8.6999C13.1016 8.3999 12.8016 8.0999 12.5016 8.0999ZM10.6016 8.0999H8.10156V6.8999C8.10156 6.1999 8.70156 5.6999 9.30156 5.6999C9.90156 5.6999 10.5016 6.2999 10.5016 6.8999V8.0999H10.6016Z" />
                <path className=" group-hover:fill-white" d="M19.6 6.3C19.3 6.2 18.9 6.3 18.8 6.6L18.4 7.5C17.3 3.5 13.7 0.5 9.4 0.5C4.2 0.6 0 4.8 0 10C0 15.2 4.2 19.4 9.4 19.4C11.9 19.4 14.3 18.4 16 16.7C16.2 16.5 16.2 16.1 16 15.8C15.8 15.6 15.4 15.6 15.1 15.8C13.6 17.3 11.5 18.2 9.4 18.2C4.9 18.2 1.3 14.6 1.3 10.1C1.3 5.6 4.9 2 9.4 2C13.3 2 16.6 4.8 17.3 8.4L16 7.1C15.8 6.9 15.4 6.9 15.1 7.1C14.9 7.3 14.9 7.7 15.1 8L17.6 10.5C17.7 10.6 17.9 10.7 18 10.7H18.1C18.3 10.7 18.5 10.5 18.6 10.3L20 7.1C20.1 6.8 19.9 6.4 19.6 6.3Z" />
              </g>
              <defs>
                <clipPath id="clip0_1465_3810">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          <span>Change Pasword</span>
          </NavLink>
      
      </div>
    </div>
  );
};


const FeedCard = () => {
  return (
    <div className="rounded-xl p-4 ">
      <p className="primary-font text-[#868484] text-[12px]">Interview · 02-01-2026</p>
      <h2 className="font-semibold text-[24px] text-[#1E1E1E] mt-1">
        Jaya Bachchan Launches Initiative to Support Local Artisans in Mumbai
      </h2>

      <img
        src={img12}
        alt=""
        className="rounded-lg my-[16px] w-full"
      />

      <p className="primary-font text-[16px] text-[#1E1E1E] font-[500]">
        Jaya Bachchan Launches Initiative to Support Local Artisans in Mumbai
      </p>

      <ul className="mt-[16px] flex gap-[10px] flex-wrap">
        <li>
          <a href="#!" className="px-[16px] py-[8px] text-[14px] bg-[#4285F41F] primary-font text-[#4285F4] rounded-[100px]">Jaya Bachchan</a>
        </li>
        <li>
          <a href="#!" className="px-[16px] py-[8px] text-[14px] bg-[#4285F41F] primary-font text-[#4285F4] rounded-[100px]">Jaya Bachchan</a>
        </li>
        <li>
          <a href="#!" className="px-[16px] py-[8px] text-[14px] bg-[#4285F41F] primary-font text-[#4285F4] rounded-[100px]">Jaya Bachchan</a>
        </li>
      </ul>
    </div>
  );
};

const Trending = () => {
  return (
    <div className="rounded-xl p-4 bg-[#fff]">
      <h3 className="font-semibold text-[20px] flex items-center berlin mb-2"><svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
  <path d="M12 6.92822L0 13.8564L0 1.95503e-05L12 6.92822Z" fill="#4285F4"/>
</svg>Trending Trivia</h3>
      <div className=" mt-[36px]">
     {Array(5)
  .fill(0)
  .map((_, i, arr) => (
    <div key={i}>
      <p className="primary-font font-[500] text-[#1E1E1E] text-[14px]">
        Akshay Kumar Says Success Changed His Career Track
      </p>

      <hr
        className={`mt-[20px] mb-[20px] border-[#D9D9D9] ${
          i === arr.length - 1 ? "hidden" : "block"
        }`}
      />
    </div>
  ))} 
      </div>
      <a href="" className="text-[#4285F4] text-[14px] font-[600] mt-[36px] text-center block cursor-pointer">see more</a>
    </div>
  );
};

export default  function ExplorerFeed() {
  return (<>
    <div className=''>
    <ul className='flex gap-2 px-6 py-2 bg-[#4285F4]'>
      <li className='text-[#fff] ptimary-font text-[12px]'><a href="#!">Home</a></li>
      <li className='text-[#fff] ptimary-font text-[12px]'>/</li>
      <li className='text-[#fff] ptimary-font text-[12px]'>Explorer</li>
    </ul>


  </div>
  
    <div className=" md:h-screen bodyslide p-4 flex flex-col overflow-hidden ">
    

      <div className="flex maomcontflex  flex-1 md:overflow-hidden">
        {/* Sidebar */}
        <div className="">
          <Sidebar />
        </div>

        {/* Center Scroll Area */}
        <div className="flex-1 md:overflow-y-auto md:p-6 py-4 space-y-[50px]  no-scrollbar">
          <h2 className="text-center md:text-[48px] text-[36px] berlin font-[400] md:mb-[50px] mb-[32px]">Explore Feed</h2>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

        {/* Right Panel */}
        <div className=" w-84 treviawiidth">
          <Trending />
        </div>
      </div>
    </div></>
  );
}


export function Profilepage() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const dropdownRef = useRef(null);

  const options = ["English", "Hindi", "Marathi"];

  // select / remove
  const handleSelect = (value) => {
    if (categories.includes(value)) {
      setCategories(categories.filter((item) => item !== value));
    } else {
      setCategories([...categories, value]);
    }
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (<>
    <div className=''>
    <ul className='flex gap-2 px-6 py-2 bg-[#4285F4]'>
      <li className='text-[#fff] ptimary-font text-[12px]'><a href="#!">Home</a></li>
      <li className='text-[#fff] ptimary-font text-[12px]'>/</li>
      <li className='text-[#fff] ptimary-font text-[12px]'>Profile Page</li>
    </ul>


  </div>
       <div className=" md:h-screen bodyslide p-4 flex flex-col overflow-hidden ">
    

      <div className="flex maomcontflex  flex-1 overflow-hidden">
        <div className="">
          <Sidebar />
        </div>

        {/* Center Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-[50px]  no-scrollbar">
          <h2 className="text-center md:text-[48px] text-[36px] berlin font-[400] md:mb-[50px] mb-[32px]">Profile</h2>
          <div className="max-w-[762px] m-auto bg-[#fff] p-[24px] rounded-[16px]">
            <div className="p-[16px] bg-[#F4FBFF] rounded-[8px] mb-[14px]">
              <h4 className="text-[#757575] text-[16px] primary-font mb-[8px]">Name</h4>
              <input type="text" className="bg-[#F5F5F5] w-full p-[16px] rounded-[8px] outline-none focus:ring-none focus:ring-none" placeholder="Name" />

            </div>
            <div className="p-[16px] bg-[#F4FBFF] rounded-[8px] mb-[14px]">
              <h4 className="text-[#757575] text-[16px] primary-font mb-[8px]">Email</h4>
              <input type="text" className="bg-[#F5F5F5] w-full p-[16px] rounded-[8px] outline-none focus:ring-none focus:ring-none" placeholder="jhonedoe@gmail.com" />

            </div>
            <div className="p-[16px] bg-[#F4FBFF] rounded-[8px] mb-[14px]">
              <h4 className="text-[#757575] text-[16px] primary-font mb-[8px]">Mobile</h4>
              <input type="text" className="bg-[#F5F5F5] w-full p-[16px] rounded-[8px] outline-none focus:ring-none focus:ring-none" placeholder="1236547896" />

            </div>
           
            <div className="p-[16px] bg-[#F4FBFF] rounded-[8px] mb-[14px]">
              <h4 className="text-[#757575] text-[16px] primary-font mb-[8px]">Preferred Language</h4>
              <div className="relative custom-select">
                  <select
                    className="appearance-none bg-[#F5F5F5] text-[#757575] w-full p-[16px] pr-[40px] rounded-[8px] outline-none"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Marathi">Marathi</option>
                  </select>

                  <svg
                    className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M4.5 6.75L9 11.25L13.5 6.75"
                      stroke="#757575"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
            </div>

            <div className="p-[16px] bg-[#F4FBFF] rounded-[8px] mb-[14px]" ref={dropdownRef}>
                <h4 className="text-[#757575] text-[16px] primary-font mb-[8px]">
                  Preferred Categories
                </h4>

                {/* Input / Trigger */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-[#F5F5F5] rounded-[8px] p-[12px] flex flex-wrap gap-2 cursor-pointer min-h-[50px]"
                >
                  {/* {categories.length === 0 && ( */}
                    <span className="text-[#757575] block  primary-font text-[14px]">
                      Select Category
                    </span>
                  {/* // )} */}

                

                  {/* Arrow */}
                  <svg
                    className={`ml-auto transition-transform ${isOpen ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M4.5 6.75L9 11.25L13.5 6.75"
                      stroke="#757575"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Dropdown */}
                {isOpen && (
                  <div className="mt-2 bg-white rounded-[8px] shadow p-2">
                    {options.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => handleSelect(item)}
                        className={`px-[12px] py-[8px] rounded-[6px] cursor-pointer transition-all
                          `}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
                   <ul className="flex mt-[16px] gap-2">

              
                {categories.map((cat, i) => (
                    <li
                      key={i}
                      className="flex items-center primary-font gap-2 bg-[#fff] text-[#757575] px-[10px] py-[4px] rounded-full text-[12px]"
                    >
                      {cat}
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelect(cat);
                        }}
                        className="cursor-pointer"
                      >
                        ✕
                      </span>
                    </li>
                  ))}
                  </ul>
              </div>

              <div className="mt-[26px] flex justify-end gap-[10px]">
                <button className="py-[12px] px-[24px] rounded-[8px] font-[600] bg-[#F5F5F5] text-[#1E1E1E] dm-sans font-[16px]">Close</button>
                <button className="py-[12px] px-[24px] rounded-[8px] font-[600] bg-[#4285F4] text-[#fff] dm-sans font-[16px]">Edit</button>

              </div>
           
           

          </div>
         
        </div>

      
      </div>
    </div>
    </>
  );
}



export function FollowedCelebrities() {
   const actorsData = [
  {
    id: 1,
    name: "Chris Evans",
    gender: "Male",
    language: ["English"],
    age: 42,
    totalMovies: 38,
    cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    totalAwards: 15,
    img: "/catogary/cat1.jpg",
    link:"/profiles"
  },
  {
    id: 2,
    name: "Florence Pugh",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 38,
    totalMovies: 30,
    totalAwards: 25,
     img: "/catogary/cat2.jpg",
      link:"/profiles"
  },
  {
    id: 3,
    name: "Tom Hiddleston",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi"],
    age: 58,
    totalMovies: 45,
    totalAwards: 40,
      img: "/catogary/cat5.png",
       link:"/profiles"
  },
  {
    id: 4,
    name: "Priyanka Chopra",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat4.jpg",
      link:"/profiles"
  },
  {
    id: 5,
    name: "Scarlett Johansson",
    gender: "Female",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    totalAwards: 28,
     img: "/catogary/cat3.jpg",
      link:"/profiles"
  },
  {
    id: 6,
    name: "Chris Hemsworth",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat6.jpg",
      link:"/profiles"
  },
   {
    id: 3,
    name: "Tom Hiddleston",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi"],
    age: 58,
    totalMovies: 45,
    totalAwards: 40,
      img: "/catogary/cat5.png",
       link:"/profiles"
  },
  {
    id: 4,
    name: "Priyanka Chopra",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat4.jpg",
      link:"/profiles"
  },{
    id: 3,
    name: "Tom Hiddleston",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi"],
    age: 58,
    totalMovies: 45,
    totalAwards: 40,
      img: "/catogary/cat5.png",
       link:"/profiles"
  },
  {
    id: 4,
    name: "Priyanka Chopra",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat4.jpg",
      link:"/profiles"
  },
  {
    id: 5,
    name: "Scarlett Johansson",
    gender: "Female",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    totalAwards: 28,
     img: "/catogary/cat3.jpg",
      link:"/profiles"
  },
  {
    id: 6,
    name: "Chris Hemsworth",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat6.jpg",
      link:"/profiles"
  },
   {
    id: 3,
    name: "Tom Hiddleston",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi"],
    age: 58,
    totalMovies: 45,
    totalAwards: 40,
      img: "/catogary/cat5.png",
       link:"/profiles"
  },
  {
    id: 4,
    name: "Priyanka Chopra",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat4.jpg",
      link:"/profiles"
  },
  {
    id: 3,
    name: "Tom Hiddleston",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi"],
    age: 58,
    totalMovies: 45,
    totalAwards: 40,
      img: "/catogary/cat5.png",
       link:"/profiles"
  },
  {
    id: 4,
    name: "Priyanka Chopra",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat4.jpg",
      link:"/profiles"
  },
  {
    id: 5,
    name: "Scarlett Johansson",
    gender: "Female",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    totalAwards: 28,
     img: "/catogary/cat3.jpg",
      link:"/profiles"
  },
  {
    id: 6,
    name: "Chris Hemsworth",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat6.jpg",
      link:"/profiles"
  },
   {
    id: 3,
    name: "Tom Hiddleston",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi"],
    age: 58,
    totalMovies: 45,
    totalAwards: 40,
      img: "/catogary/cat5.png",
       link:"/profiles"
  },
  {
    id: 4,
    name: "Priyanka Chopra",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat4.jpg",
      link:"/profiles"
  },
  {
    id: 3,
    name: "Tom Hiddleston",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi"],
    age: 58,
    totalMovies: 45,
    totalAwards: 40,
      img: "/catogary/cat5.png",
       link:"/profiles"
  },
  {
    id: 4,
    name: "Priyanka Chopra",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat4.jpg",
      link:"/profiles"
  },
  {
    id: 5,
    name: "Scarlett Johansson",
    gender: "Female",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    totalAwards: 28,
     img: "/catogary/cat3.jpg",
      link:"/profiles"
  },
  {
    id: 6,
    name: "Chris Hemsworth",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat6.jpg",
      link:"/profiles"
  },
   {
    id: 3,
    name: "Tom Hiddleston",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi"],
    age: 58,
    totalMovies: 45,
    totalAwards: 40,
      img: "/catogary/cat5.png",
       link:"/profiles"
  },
  {
    id: 4,
    name: "Priyanka Chopra",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat4.jpg",
      link:"/profiles"
  },

      ];
  
  return (<>
    <div className=''>
    <ul className='flex gap-2 px-6 py-2 bg-[#4285F4]'>
      <li className='text-[#fff] ptimary-font text-[12px]'><a href="#!">Home</a></li>
      <li className='text-[#fff] ptimary-font text-[12px]'>/</li>
      <li className='text-[#fff] ptimary-font text-[12px]'>Followed Celebrities</li>
    </ul>


  </div>
      <div className=" md:h-screen bodyslide p-4 flex flex-col overflow-hidden ">
    

      <div className="flex maomcontflex  flex-1 overflow-hidden">
        <div className="">
          <Sidebar />
        </div>

        {/* Center Scroll Area */}
        <div className="flex-1 h-full md:overflow-y-auto p-6 space-y-[50px]  no-scrollbar">
          <h2 className="text-center md:text-[48px] text-[36px] text-[#4285F4] berlin font-[400] md:mb-[50px] mb-[32px]">Followed Celebrities</h2>
          <div className="grid grid-cols-6 md:px-[50px] gap-[20px] h-fit">
            {
              actorsData.map((item)=>(
                <div className="md:col-span-2 sm:col-span-3 col-span-6">


                <CatogeriesCard key={item.id} data={item} />
                </div>
              ))
            }
          </div>
         
        </div>

      
      </div>
    </div></>
  );
}

export function MyCollections() {
    const Collectionbox = {
  title:"Followed Celebrities",
  btnlink:"/",
  cardClass:"py-[70px] pt-[20px]",
  slider:[
        {
    id: 1,
    collectionName: "Collection 1",
    dis: "24 Celebrities",
    cardcalss:"md:col-span-2 sm:col-span-3 col-span-6",
 link:"/collection-details",  
     img: "/all.png",
  },
  {
    id: 2,
    collectionName: "Collection 2",
    dis: "24 Celebrities",
    cardcalss:"md:col-span-2 sm:col-span-3 col-span-6",
    link:"/collection-details",
     img: "/all.png",
  },
  {
    id: 3,
   collectionName: "Collection 3",
    dis: "24 Celebrities",
    cardcalss:"md:col-span-2 sm:col-span-3 col-span-6",
 link:"/collection-details",
     img: "/all.png",
  },
  {
    id: 4,
     collectionName: "Collection 4",
    dis: "24 Celebrities",
    cardcalss:"md:col-span-2 sm:col-span-3 col-span-6",
 link:"/collection-details",
     img: "/all.png",
  },
     {
    id: 1,
    collectionName: "Collection 1",
    dis: "24 Celebrities",
    cardcalss:"md:col-span-2 sm:col-span-3 col-span-6",
 link:"/collection-details",
     img: "/all.png",
  },
  {
    id: 2,
    collectionName: "Collection 2",
    dis: "24 Celebrities",
    cardcalss:"md:col-span-2 sm:col-span-3 col-span-6",
 link:"/collection-details",
     img: "/all.png",
  },
  {
    id: 3,
   collectionName: "Collection 3",
    dis: "24 Celebrities",
    cardcalss:"md:col-span-2 sm:col-span-3 col-span-6",
 link:"/collection-details",
     img: "/all.png",
  },
  {
    id: 4,
     collectionName: "Collection 4",
    dis: "24 Celebrities",
    cardcalss:"md:col-span-2 sm:col-span-3 col-span-6",
    link:"/collection-details",
     img: "/all.png",
  },
  
        ]
}

  
  return (<>
    <div className=''>
    <ul className='flex gap-2 px-6 py-2 bg-[#4285F4]'>
      <li className='text-[#fff] ptimary-font text-[12px]'><a href="#!">Home</a></li>
      <li className='text-[#fff] ptimary-font text-[12px]'>/</li>
      <li className='text-[#fff] ptimary-font text-[12px]'>My Collections</li>
    </ul>


  </div>
      <div className=" md:h-screen bodyslide p-4 flex flex-col overflow-hidden ">
    

      <div className="flex maomcontflex  flex-1 overflow-hidden">
        <div className="">
          <Sidebar />
        </div>

        {/* Center Scroll Area */}
        <div className="flex-1 h-full md:overflow-y-auto md:p-6 pt-[36px] space-y-[50px]  no-scrollbar">
          <h2 className="text-center md:text-[48px] text-[36px] text-[#4285F4] berlin font-[400] md:mb-[50px] mb-[32px]">My Collections</h2>
          <div className="grid grid-cols-6 md:px-[50px] paddmone gap-[20px] h-fit">
 {
                      Collectionbox.slider.map((item)=>(
                // <div className="md:col-span-2 sm:col-span-3 col-span-6">
                   
                        <Card2 data={item} />
                    
                // </div>
                ))
                    }

           
          </div>
         
        </div>

      
      </div>
    </div></>
  );
}

export function CollectionsDetails() {
   const actorsData = [

  {
    id: 6,
    name: "Chris Hemsworth",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat6.jpg",
      link:"/profiles"
  },
   {
    id: 3,
    name: "Tom Hiddleston",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi"],
    age: 58,
    totalMovies: 45,
    totalAwards: 40,
      img: "/catogary/cat5.png",
       link:"/profiles"
  },
  {
    id: 4,
    name: "Priyanka Chopra",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat4.jpg",
      link:"/profiles"
  },
  {
    id: 3,
    name: "Tom Hiddleston",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi"],
    age: 58,
    totalMovies: 45,
    totalAwards: 40,
      img: "/catogary/cat5.png",
       link:"/profiles"
  },
  {
    id: 4,
    name: "Priyanka Chopra",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat4.jpg",
      link:"/profiles"
  },
  {
    id: 5,
    name: "Scarlett Johansson",
    gender: "Female",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    totalAwards: 28,
     img: "/catogary/cat3.jpg",
      link:"/profiles"
  },
  {
    id: 6,
    name: "Chris Hemsworth",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat6.jpg",
      link:"/profiles"
  },
   {
    id: 3,
    name: "Tom Hiddleston",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi"],
    age: 58,
    totalMovies: 45,
    totalAwards: 40,
      img: "/catogary/cat5.png",
       link:"/profiles"
  },
  {
    id: 4,
    name: "Priyanka Chopra",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat4.jpg",
      link:"/profiles"
  },
  {
    id: 3,
    name: "Tom Hiddleston",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi"],
    age: 58,
    totalMovies: 45,
    totalAwards: 40,
      img: "/catogary/cat5.png",
       link:"/profiles"
  },
  {
    id: 4,
    name: "Priyanka Chopra",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat4.jpg",
      link:"/profiles"
  },
  {
    id: 5,
    name: "Scarlett Johansson",
    gender: "Female",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    totalAwards: 28,
     img: "/catogary/cat3.jpg",
      link:"/profiles"
  },
  {
    id: 6,
    name: "Chris Hemsworth",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat6.jpg",
      link:"/profiles"
  },
   {
    id: 3,
    name: "Tom Hiddleston",
    gender: "Male",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi"],
    age: 58,
    totalMovies: 45,
    totalAwards: 40,
      img: "/catogary/cat5.png",
       link:"/profiles"
  },
  {
    id: 4,
    name: "Priyanka Chopra",
    gender: "Female",
     cardcalss:"lg:col-span-1 md:md:col-span-2 sm:col-span-3 col-span-6 col-span-4",
    language: ["Hindi", "English"],
    age: 41,
    totalMovies: 35,
    totalAwards: 28,
     img: "/catogary/cat4.jpg",
      link:"/profiles"
  },

      ];
  
  return (<>
    <div className=''>
    <ul className='flex gap-2 px-6 py-2 bg-[#4285F4]'>
      <li className='text-[#fff] ptimary-font text-[12px]'><a href="#!">Home</a></li>
      <li className='text-[#fff] ptimary-font text-[12px]'>/</li>
      <li className='text-[#fff] ptimary-font text-[12px]'>Collections Details</li>
    </ul>


  </div>
    <div className=" md:h-screen bodyslide p-4 flex flex-col overflow-hidden ">
    

      <div className="flex maomcontflex  flex-1 overflow-hidden">
        <div className="">
          <Sidebar />
        </div>

        {/* Center Scroll Area */}
        <div className="flex-1 h-full md:overflow-y-auto p-6 space-y-[50px]  no-scrollbar">
          <h2 className="text-center md:text-[48px] text-[36px] text-[#4285F4] berlin font-[400] mb-[8px]">Collection 1</h2>
          <p className="text-center primary-font text-[16px] text-[#757575]">{actorsData.length} Celebrities</p>
          <div className="grid grid-cols-6 md:px-[50px] gap-[20px] h-fit">
            {
              actorsData.map((item)=>(
                <div className="md:col-span-2 sm:col-span-3 col-span-6">


                <CatogeriesCard key={item.id} data={item} />
                </div>
              ))
            }
          </div>
         
        </div>

      
      </div>
    </div></>
  );
}


export function ChangePassword() {
 
  return (<>
    <div className=''>
    <ul className='flex gap-2 px-6 py-2 bg-[#4285F4]'>
      <li className='text-[#fff] ptimary-font text-[12px]'><a href="#!">Home</a></li>
      <li className='text-[#fff] ptimary-font text-[12px]'>/</li>
      <li className='text-[#fff] ptimary-font text-[12px]'>Change Password</li>
    </ul>


  </div>
    <div className=" md:h-screen bodyslide p-4 flex flex-col overflow-hidden ">
    

      <div className="flex maomcontflex  flex-1 overflow-hidden">
        <div className="">
          <Sidebar />
        </div>

        {/* Center Scroll Area */}
        <div className="flex-1 md:overflow-y-auto p-6 space-y-[50px]  no-scrollbar">
          <h2 className="text-center md:text-[48px] text-[36px] berlin font-[400] md:mb-[50px] mb-[32px]">Change Password</h2>
          <div className="max-w-[762px] m-auto bg-[#fff] p-[24px] rounded-[16px]">
            <div className="p-[16px] bg-[#F4FBFF] rounded-[8px] mb-[14px]">
              <h4 className="text-[#757575] text-[16px] primary-font mb-[8px]">Current Password</h4>
              <input type="Current Password" className="bg-[#F5F5F5] w-full p-[16px] rounded-[8px] outline-none focus:ring-none focus:ring-none" placeholder="********" />

            </div>
            <div className="p-[16px] bg-[#F4FBFF] rounded-[8px] mb-[14px]">
              <h4 className="text-[#757575] text-[16px] primary-font mb-[8px]">New Password</h4>
              <input type="New Password" className="bg-[#F5F5F5] w-full p-[16px] rounded-[8px] outline-none focus:ring-none focus:ring-none" placeholder="********" />

            </div>
            <div className="p-[16px] bg-[#F4FBFF] rounded-[8px] mb-[14px]">
              <h4 className="text-[#757575] text-[16px] primary-font mb-[8px]">Confirm New Password</h4>
              <input type="Confirm New Password" className="bg-[#F5F5F5] w-full p-[16px] rounded-[8px] outline-none focus:ring-none focus:ring-none" placeholder="********" />

            </div>
           
            

          

              <div className="mt-[26px] flex justify-end gap-[10px]">
              
                <button className="py-[12px] px-[24px] rounded-[8px] w-full font-[600] bg-[#4285F4] text-[#fff] dm-sans font-[16px]">Update Password</button>

              </div>
           
           

          </div>
         
        </div>

      
      </div>
    </div></>
  );
}