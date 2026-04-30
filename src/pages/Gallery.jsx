import React from 'react'

const Gallery = () => {
    const gallery=[
        {
            id:1,
            img:"/gallery/1.png",
            classname:'md:col-span-3 col-span-5'
        },
        {
            id:2,
            img:"/gallery/2.png",
            classname:'w-[55%]',
             classname:'md:col-span-3 col-span-7'
        },
        {
            id:3,
            img:"/gallery/3.png",
             classname:'md:col-span-6 col-span-7'
        },
        {
            id:4,
            img:"/gallery/4.png",
             classname:'md:col-span-6 col-span-5 '
        },
        {
            id:5,
            img:"/gallery/5.png",
             classname:'md:col-span-3 col-span-12'
        },
        {
            id:6,
            img:"/gallery/6.png",
             classname:'md:col-span-3 col-span-6'
        },
        {
            id:7,
            img:"/gallery/7.png",
             classname:'md:col-span-4 col-span-6'
        },
        {
            id:9,
            img:"/gallery/4.png",
             classname:'md:col-span-4  col-span-4'
        },
        
        {
            id:8,
            img:"/gallery/8.png",
             classname:'md:col-span-4 col-span-8'
        },
        
        {
            id:10,
            img:"/gallery/1.png",
             classname:'md:col-span-3 col-span-5'
        },
          {
            id:6,
            img:"/gallery/6.png",
             classname:'md:col-span-6 col-span-7'
        },
        {
            id:9,
            img:"/gallery/9.png",
             classname:'md:col-span-3 col-span-12'
        },
    ]
  return (
    <>
         <div className=''>
            <ul className='flex gap-3 px-6 py-2 bg-[#4285F4]'>
                <li className='text-[#fff] ptimary-font text-[12px]'><a href="#!">Home</a></li>
                <li className='text-[#fff] ptimary-font text-[12px]'>/</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>Celebrites</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>/</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>Actors</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>/</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>Akshay Kumar</li>
            </ul>


        </div>
        <div className="py-[60px]">
            <h1 className='md:text-[64px] text-[40px] berlin text-[#1E1E1E] text-center'>Akshaye Kumar Gallery</h1>

            <div className='grid max-w-[1000px] grid-cols-12 gap-3 mt-12   m-auto px-6' >
                {
                    gallery.map((item)=>(
                        <figure key={item.id} className={`${item.classname} h-[200px]`}>
                            <img src={item.img} className='w-[100%] h-[100%] object-cover' alt="" />
                        </figure>
                    ))
                }
                
            </div>
        </div>
    
    </>
  )
}

export default Gallery