import React, { useEffect, useState } from "react";

import { Link,useNavigate } from 'react-router-dom'
import Button from './Button'
import { getProfession } from "../utils/frontApi";

const Header = () => {
    const [professionData, setProfessionData] = useState([]);

    const navigate = useNavigate();
  // ✅ CHECK LOGIN
  const isLoggedIn = localStorage.getItem("token");
 useEffect(() => {
    fetchProfession();
  }, []);

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
            to={`/${item.url}`}
          >
            {item.name === "Actor"
              ? "Actors"
              : item.name === "Politician"
              ? "Politicians"
              : item.name}
          </Link>
        </li>
      ))}
          <li><Link className='primary-font text-[16px] font-[500] text-[#D5D5D5]' to="#!">Singers</Link></li>
          <li><Link className='primary-font text-[16px] font-[500] text-[#D5D5D5]' to="#!">Sportsperson</Link></li>
          <li><Link className='primary-font text-[16px] font-[500] text-[#D5D5D5]' to="#!">More</Link></li>
        </ul>
        <div className="lg:w-[200px] flex justify-end">

      {isLoggedIn ? (
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
      )}

      <img
        src="../menu.svg"
        className="md:hidden block ml-3"
        alt=""
      />
    </div>

      </div>
    </>
  )
}

export default Header