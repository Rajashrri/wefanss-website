import React from 'react'
import { Link } from 'react-router-dom'

const News2 = ({news}) => {
  return (
    <Link  key={news.id}
                            className={`transition-all flex gap-3 duration-500 w-[100%] ${news.cardclass}`}
                            >
                            <div className="relative w-[320px]  sldieimh rounded-[8px] overflow-hidden">
                                <img
                                src={news.img}
                                alt={news.title}
                                className="h-full w-full object-cover rounded-[8px]"
                                />

                               
                            </div>

                            <div className="flex w-[264px] gap-y-9 flex-col items-left justify-between mt-3">
                                <div>
                                <h4 className='text-[#B3B3B3] text-[12px]'>{news.time}</h4>
                                <h3 className="text-[16px] mt-3 text-[#1E1E1E] font-[400] berlin">
                                    {news.title}
                                </h3>
                                <p className='text-[14px] mt-2'>{news.disk}</p>
                                </div>
                                <div >
                                    <a href="" className='text-[#4285F4] mb-2 block primary-font'>Read Now</a>
                                </div>
                            </div>

                      
                            </Link>
  )
}

export default News2