import { Bookmark, LinkIcon, Maximize2, Share } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../hooks/MyContext ';

const Profilecard = ({ ActorData }) => {
    const [Quick, setQuick] = useState(false);
    const [Sharelink, setSharelink] = useState(false);
    const [savecollection, setsavecollection] = useState(false);
    const [createcollecton, setcreatecollecton] = useState(false);
    const [saveprofile, setsaveprofile] = useState(false);
    const [follow, setfollow] = useState(false);

    const {setActive} = useContext(MyContext)
    return (
        <div className="md:flex hidden  gap-6 relative  rounded-2xl ">
            <img
                src={ActorData.profileimg}
                className="w-[209px] h-[314px] rounded-[8px] object-cover"
                alt=""
            />
            <div className="flex flex-col justify-between h-auto">
                <div>
                    {
                        ActorData.Roles.map((item, index) => (
                            <span
                                key={index}
                                className={`text-[12px] text-[#fff] primary-font relative inline-flex items-center ${index !== ActorData.Roles.length - 1
                                    ? "mr-2 after:content-[''] after:inline-block after:h-[4px] after:w-[4px] after:bg-white after:rounded-full after:ml-2"
                                    : ""
                                    }`}
                            >
                                {item}
                            </span>
                        ))
                    }
                    <h1 className="text-3xl mt-1 font-bold text-[#fff] berlin">{ActorData.Name}</h1>

                    {
                        ActorData.Languages.map((item, index) => (
                            <span
                                key={index}
                                className={`text-[12px] text-[#fff] primary-font relative inline-flex items-center ${index !== ActorData.Languages.length - 1
                                    ? "mr-2 after:content-[''] after:inline-block after:h-[4px] after:w-[4px] after:bg-white after:rounded-full after:ml-2"
                                    : ""
                                    }`}
                            >
                                {item}
                            </span>
                        ))
                    }

                    <div className="mt-6 flex justify-start items-center gap-[10px]">
                        <Link onClick={() => setfollow(!follow)} className={`px-5 py-2  transition-all duration-300 ease-in-out flex w-fit rounded-[24px] primary-font text-[16px]  items-center gap-2  
                            ${follow
                                ? "bg-[#4285F4] text-[#fff]"
                                : "bg-[#fff] text-[#4285F4]"
                            }`
                        }>{follow
                            ? "Follow"
                            : "Following"
                            } <svg className={` ${follow
                                ? "block"
                                : "hidden invisible"
                                }`
                            } width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1V15M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></Link>
                        <div className='relative'>
                            <Link onClick={() => setsavecollection(!savecollection)} className={`px-[10px] h-[42px] py-[10px] flex w-fit rounded-[8px] primary-font text-[16px] text-[#fff] items-center gap-2 bg-[#fff] ${saveprofile
                                ? "bg-[#fff]"
                                : "bg-[4285F4]"
                                }`}> <Bookmark color="#4285F4" height={24}/></Link>
                            <div
                                className={`w-[290px]  bg-[#F4FBFF] z-100  rounded-[8px] overflow-hidden  absolute left-[-150px] top-[70px] rounded-[16px]
                                transition-all duration-300 ease-in-out
                                ${savecollection
                                        ? "opacity-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 -translate-y-5 pointer-events-none"
                                    }`}
                            >
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

                                <button onClick={() => {setcreatecollecton(!createcollecton),setsavecollection(!savecollection)}} type="button" className='bg-[#4285F4] hover:cursor-pointer flex justify-center w-full p-2 items-center gap-[8px] text-[#fff] primary-font text-[16px] font-[600]' ><span className='bg-[#fff] block h-[40px] w-[40px] flex items-center justify-center rounded-[8px]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8 1V15M1 8H15" stroke="#4285F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></span>Create New Collection</button>

                            </div>
                             <div
                                className={`w-[290px]  bg-[#F4FBFF] z-100  rounded-[8px] overflow-hidden  absolute left-[150px] top-[70px] rounded-[16px]
                                transition-all duration-300 ease-in-out
                                ${createcollecton
                                        ? "opacity-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 -translate-y-5 pointer-events-none"
                                    }`}
                            >
                                <div className='pt-4 py-6 px-3'>
                                    <h3 className="text-[#1E1E1E] primary-font text-[14px] font-[500] text-center">Enter Collection Name</h3>
                                    <div className='relative mt-[12px]'>
                                        <input
                                            type="search"
                                            placeholder='Name'
                                            //   value={search}

                                            className='bg-[#fff] h-[40px] w-full border border-[#D9D9D9] p-5 rounded-[24px] outline-none'
                                        />

                                       
                                    </div>
                                    
                                <button onClick={() => {setsaveprofile(!saveprofile) ,setcreatecollecton(!createcollecton)}} type="button" className='bg-[#4285F4] hover:cursor-pointer mt-[12px] rounded-[16px] flex justify-center w-full p-2 items-center gap-[8px] text-[#fff] primary-font text-[16px] font-[600]' >Create </button>
                                </div>


                            </div>
                           
                        </div>
                        <div className="relative">
                        <Link onClick={() => setSharelink(!Sharelink)} className="px-[10px] h-[42px] py-[10px] flex w-fit rounded-[8px] primary-font text-[16px] text-[#fff] items-center gap-2 bg-[#fff]"> <Share color="#4285F4" height={24} /></Link>
                            <div
                                className={`w-[266px] bg-[#fff] z-100 px-3 py-6 absolute left-[-150px] top-[70px] rounded-[16px]
                            transition-all duration-300 ease-in-out
                            ${Sharelink
                                        ? "opacity-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 -translate-y-5 pointer-events-none"
                                    }`}
                            >
                                <h3 className="text-[#1E1E1E] primary-font text-[14px] font-[500] text-center">Share to</h3>
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
                        </div>
                          <div className="relative">
                                <Link onClick={() => setQuick(!Quick)} className={`px-[10px] share h-[42px] py-[10px] flex w-fit rounded-[8px] primary-font text-[16px] text-[#fff] items-center gap-2 bg-[#fff] ${saveprofile
                                                ? "bg-[#fff]"
                                                : "bg-[4285F4]"
                                                }`}>
                                <LinkIcon color="#4285F4" height={24}/>
                                </Link>
                                <div
                                    className={`w-[290px] bg-[#fff] z-100 px-3 py-6 absolute left-[-150px] top-[70px] rounded-[16px]
                            transition-all duration-300 ease-in-out
                            ${Quick
                                            ? "opacity-100 translate-y-0 pointer-events-auto"
                                            : "opacity-0 -translate-y-5 pointer-events-none"
                                        }`}
                                >
                                    <h3 className="text-[#1E1E1E] primary-font text-[14px] font-[500] text-center">Quick links</h3>
                                    <ul className="mt-5 flex flex-col gap-[10px]">
                                        <li className="group">
                                            <Link className="flex transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center" >
                                                <h3 className="flex text-[14px] gap-2 primary-font font-[600] items-center"><img src="/share/Instagram.png" alt="" />
                                                    <span>Instagram</span></h3>
                                                <svg className="opacity-0 transition-all duration-300 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                    <path d="M4.2002 4.2002H10.2002M10.2002 4.2002V10.2002M10.2002 4.2002L4.2002 10.2002" stroke="#4285F4" stroke-width="1.2" stroke-linejoin="round" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="group">
                                            <Link className="flex transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center" >
                                                <h3 className="flex text-[14px] gap-2 primary-font font-[600] items-center"><img src="/share/Facebook.png" alt="" />
                                                    <span>Facebook</span></h3>
                                                <svg className="opacity-0 transition-all duration-300 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                    <path d="M4.2002 4.2002H10.2002M10.2002 4.2002V10.2002M10.2002 4.2002L4.2002 10.2002" stroke="#4285F4" stroke-width="1.2" stroke-linejoin="round" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="group">
                                            <Link className="flex transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center" >
                                                <h3 className="flex text-[14px] gap-2 primary-font font-[600] items-center"><img className="object-contain" src="/share/Twitter.png" alt="" />
                                                    <span>X</span></h3>
                                                <svg className="opacity-0 transition-all duration-300 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                    <path d="M4.2002 4.2002H10.2002M10.2002 4.2002V10.2002M10.2002 4.2002L4.2002 10.2002" stroke="#4285F4" stroke-width="1.2" stroke-linejoin="round" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="group">
                                            <Link className="flex transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center" >
                                                <h3 className="flex text-[14px] gap-2 primary-font font-[600] items-center"><img src="/share/Linkedin.png" alt="" />
                                                    <span>Linkedin</span></h3>
                                                <svg className="opacity-0 transition-all duration-300 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                    <path d="M4.2002 4.2002H10.2002M10.2002 4.2002V10.2002M10.2002 4.2002L4.2002 10.2002" stroke="#4285F4" stroke-width="1.2" stroke-linejoin="round" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="group">
                                            <Link className="flex transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center" >
                                                <h3 className="flex text-[14px] gap-2 primary-font font-[600] items-center"><img src="/share/Threads.png" alt="" />
                                                    <span>Threads</span></h3>
                                                <svg className="opacity-0 transition-all duration-300 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                    <path d="M4.2002 4.2002H10.2002M10.2002 4.2002V10.2002M10.2002 4.2002L4.2002 10.2002" stroke="#4285F4" stroke-width="1.2" stroke-linejoin="round" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="group">
                                            <Link className="flex transition-all duration-300 group-hover:bg-[#F4FBFF] p-2 w-full justify-between items-center" >
                                                <h3 className="flex text-[14px] gap-2 primary-font font-[600] items-center"><img src="/share/globe.svg" alt="" />
                                                    <span>Website1</span></h3>
                                                <svg className="opacity-0 transition-all duration-300 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                    <path d="M4.2002 4.2002H10.2002M10.2002 4.2002V10.2002M10.2002 4.2002L4.2002 10.2002" stroke="#4285F4" stroke-width="1.2" stroke-linejoin="round" />
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                             </div>
                        
                    </div>

                    {/* <Bookmark /> */}
                </div>
                <div>
                    <p className="line-clamp-4 text-[16px] primary-font text-[#fff]">{ActorData.discription}</p>
                </div>

            </div>
            <div className="relative">
                <Link onClick={() => setActive(prev => !prev)} className="absolute h-[42px] w-[42px] flex justify-center items-center rounded-[50%] border border-1 border-[#fff] bg-[#FFFFFF33] share top-2 right-2 z-10">
                    <Maximize2 height={18} color='#fff'/>
                </Link>
             
            </div>
        </div>
    )
}

export default Profilecard