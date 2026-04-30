import React from 'react'
import { Link } from 'react-router-dom'

const ListenCard = ({listen}) => {
  return (
       <Link  key={listen.id}
                            className={`transition-all  duration-500 w-[100%] ${listen.cardclass}`}
                            >
                            <div className="relative   sldieimh rounded-[8px] overflow-hidden">
                                <img
                                src={listen.img}
                                alt={listen.title}
                                className="h-full w-full object-cover rounded-[8px]"
                                />

                               
                            </div>

                            <div className="flex  gap-y-9 flex-col items-left justify-between mt-3">
                                <div>
                                <h4 className='text-[#B3B3B3] text-[12px]'>{listen.time}</h4>
                                <h3 className="text-[16px] mt-3 text-[#1E1E1E] font-[400] berlin">
                                    {listen.title}
                                </h3>
                                </div>
                                <div className='flex gap-3'>
                                   <img src="/yt.png" alt="" />
                                   <img src="/sf.png" alt="" />
                                   <img src="/rm.png" alt="" />
                                </div>
                            </div>

                      
                            </Link>
  )
}

export default ListenCard