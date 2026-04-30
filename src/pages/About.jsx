import React from 'react'
import SectionHeading from '../component/SectionHeading'
import { Flag, HeartHandshake, Podcast, Sparkle } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
    const platformcard=[
        {
            id:1,
            title:"Bridge the gap between fans and celebrities",
             img:"/about/2.png",
        },
        {
            id:2,
            title:"Offering a comprehensive database of profiles",
            img:"/about/1.png",
        },
        {
            id:3,
            title:"News updates to keep you informed and entertained.",
             img:"/about/3.png",
        }
    ]
  return (
    <div className='bg-white'>
        <div className=''>
            <ul className='flex gap-3 px-6 py-2 bg-[#4285F4]'>
                <li className='text-[#fff] ptimary-font text-[12px]'><a href="#!">Home</a></li>
                <li className='text-[#fff] ptimary-font text-[12px]'>/</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>About</li>
            </ul>
            <h1 className='berlin md:text-[128px] text-[48px] text-[#4285F4] m-auto text-center py-8'>About</h1>


        </div>
        <div className='md:rounded-t-[100px] overflow-hidden relative'>
            <img src="/about/first.png" className='w-full h-full object-cover absolute' alt="" />
            <div className='max-w-[720px] relative md:rounded-[100px] overflow-hidden ml-auto md:p-[100px] py-[90px] px-6 z-10  mb-[40px] relative'>
                <div className='bg-[#4285F4] opacity-80 absolute inset-0 z-10 '></div>
                <h3 className='relative z-20 berlin text-[#FFFFFF] text-[36px]'>Vision</h3>
                <p className='relative z-20 text-[#FFFFFF] text-[20px] mt-2'>Our vision is to unite fans with the most reliable and up-to-date insights about their beloved celebrities. We aim to be the ultimate destination for celebrity news.</p>
            </div>

        </div>
         <div className='md:rounded-b-[100px] !rounded-0 mt-9 overflow-hidden relative'>
            <img src="/about/abou2.png" className='w-full h-full object-cover absolute' alt="" />
            <div className='max-w-[720px] relative md:rounded-[100px] overflow-hidden mr-auto md:p-[100px] px-6 py-[90px] z-10  mt-[40px] relative'>
                <div className='bg-[#4285F4] opacity-80 absolute inset-0 z-10 '></div>
                <h3 className='relative z-20 berlin text-[#FFFFFF] text-[36px]'>Purpose</h3>
                <p className='relative z-20 text-[#FFFFFF] text-[20px] mt-2'>Our purpose is to empower fans by providing them with accurate and timely information about their favorite stars. We are dedicated to being the leading platform for all celebrity-related updates.</p>
            </div>

        </div>
        <div className='py-[70px] px-6'>
            <SectionHeading titleclass="" title="Why this platform exists" subtitleclass="text-center text-[#757575]" subtitle='This platform was created to connect people from all walks of life, fostering collaboration and innovation. It serves as a hub for sharing ideas, resources, and experiences, empowering users to achieve their goals and make a positive impact in their communities.' />
            <div className='flex flex-wrap justify-center gap-9 mt-8'>
                {
                    platformcard.map((item)=>(
                        <div key={item.id} className='max-w-[350px]'>
                            <h3 className='berlin text-[20px] text-center text-[#4285F4] mb-4'>{item.title}</h3>
                            <figure className='mb-0 m-auto'>
                                <img src={item.img} className='m-auto' alt="" />
                            </figure>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='py-[70px] px-6'>
            <SectionHeading titleclass="" title="What Makes Us Different" subtitleclass="text-center text-[#757575]" subtitle='This platform was created to connect people from all walks of life, fostering collaboration and innovation. It serves as a hub for sharing ideas, resources, and experiences, empowering users to achieve their goals and make a positive impact in their communities.' />
            <div className='flex flex-wrap justify-center gap-9 mt-8'>
                <div className='max-w-[300px]   flex-col justify-center items-start gap-3'>
                    <Sparkle color='#4285F4' height={24} className='m-auto'/>
                    <h3 className='berlin mt-3 md:text-[16px]  text-center text-[#4285F4] mb-4'>Connect fans with their favorite stars through exclusive events.</h3>
                </div>
                <div className='max-w-[300px]   flex-col justify-center items-start gap-3'>
                    <HeartHandshake color='#4285F4' height={24} className='m-auto'/>
                    <h3 className='berlin mt-3 md:text-[16px]  text-center text-[#4285F4] mb-4'>Create memorable experiences that bring fans and celebrities together.</h3>
                </div>
                <div className='max-w-[300px]   flex-col justify-center items-start gap-3'>
                    <Podcast color='#4285F4' height={24} className='m-auto'/>
                    <h3 className='berlin mt-3 md:text-[16px]  text-center text-[#4285F4] mb-4'>Facilitate unique interactions between fans and their idols.</h3>
                </div>
                <div className='max-w-[300px]   flex-col justify-center items-start gap-3'>
                    <Flag color='#4285F4' height={24} className='m-auto'/>
                    <h3 className='berlin mt-3 md:text-[16px]  text-center text-[#4285F4] mb-4'>Offer fans a chance to engage with celebrities in fun and innovative ways.</h3>
                </div>
            </div>    
        </div>
        <div className='py-[80px] bg-[#4285F4] px-6'>
                <div className='max-w-[800px] m-auto text-center'>
                    <h2 className='berlin md:text-[36px] text-[24px] text-[#FFFFFF]'>Our long-term vision is to expand our database to include not just mainstream celebrities but also emerging talents, making it a rich resource for fans of all genres.</h2>
                    <Link className='py-[20px] bg-[#fff] max-w-[600px] text-[#4285F4] rounded-[8px] md:text-[36px] text-[24px] uppercase font-[600] block m-auto mt-12 shadow-[0px_5px_11px_0px_#0000003A]'>Explore</Link>
                </div>
        </div>
    </div>

  )
}

export default About