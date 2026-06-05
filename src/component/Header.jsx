import React, { useEffect, useState } from "react";

import { Link,useNavigate } from 'react-router-dom'
import Button from './Button'
import { getProfession } from "../utils/frontApi";
import { getProfile } from "../utils/userApi";

const Header = () => {
    const [professionData, setProfessionData] = useState([]);
  const [profile, setProfile] = useState(null);

    const navigate = useNavigate();
  // ✅ CHECK LOGIN
  const isLoggedIn = localStorage.getItem("token");
 useEffect(() => {
    fetchProfession();
    fetchProfile();
  }, []);
 const fetchProfile = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await getProfile(user._id);

      if (res?.data?.success) {
        setProfile(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchProfession = async () => {
    try {
      const res = await getProfession();

      setProfessionData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
// ✅ LOGOUT
const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.href = "/login";
};
  return (
    <>
      <div className='header px-[50px] py-[20px] flex justify-between items-center bg-[#fff]'>
        <div>
          <Link to="/">
          <img src="../wefanss.svg" className='w-[150px] md:block hidden' alt="" />
          <img src="../w.png" className='md:hidden block' alt="" />
          </Link>
        </div>
        <ul className='md:flex hidden lg:gap-x-[40px] md:gap-x-[20px] items-center'>
         
      {professionData?.map((item) => (
        <li key={item._id}>
          <Link
            className="primary-font text-[16px] font-[500] text-[#1E1E1E]"
            to={`/${item.slug}`}
          >
            {item.name === "Actor"
              ? "Actor"
              : item.name === "Politician"
              ? "Politician"
              : item.name}
          </Link>
        </li>
      ))}
          <li><Link className='primary-font text-[16px] font-[500] text-[#D5D5D5]' to="#!">Singers</Link></li>
          <li><Link className='primary-font text-[16px] font-[500] text-[#D5D5D5]' to="#!">Sportsperson</Link></li>
          <li><Link className='primary-font text-[16px] font-[500] text-[#D5D5D5]' to="#!">More</Link></li>
        </ul>
        <div className="lg:w-[200px] flex justify-end">

      {/* {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-[#0F4F72] text-white px-6 h-[48px] rounded-[8px]"
        >
          Logout
        </button>
      ) : (
        <Button
          btnlink="/login"
          btnclass=""
          btntext="Login"
        />
      )} */}

      {/* <img
        src="../menu.svg"
        className="md:hidden block ml-3"
        alt=""
      /> */}
    {isLoggedIn ? (
  <div className="relative group cursor-pointer">
    <img
      src={
          profile?.profileImage
            ? `${import.meta.env.VITE_API_BASE_URL}${profile.profileImage}`
            : "../../dash-pro.png"
        }
      className="block ml-3 h-12"
      alt="Profile"
    />

    <div className="absolute right-[-80%] min-w-[200px] top-[60px] bg-white p-8 z-50 opacity-0 invisible translate-y-[-20px] transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
      <ul className="text-center">
          {/* User Name */}
    <li className="primary-font text-[18px] font-[600] text-[#1E1E1E] mb-4 border-b pb-3">
      {profile?.name || "User"}
    </li>
        <li className="primary-font text-[16px] font-[500] text-[#1E1E1E] mb-3">
          <a href="/profile">My Profile</a>
        </li>

        <li className="primary-font text-[16px] font-[500] text-[#1E1E1E] mb-3">
          <a href="/user-dashboard">User Dashboard</a>
        </li>

        <li className="primary-font text-[16px] font-[500] text-[#1E1E1E] mb-3">
          <button onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  </div>
) : (
 <a class="bg-[#4285F4] px-[30px] py-[12px] primary-font font-semibold leading-[19px] text-[#FFFFFF] rounded-[100px] justify-center items-center w-fit  flex " href="/login" data-discover="true">Login</a>
)}
    </div>

      </div>
    </>
  )
}

export default Header