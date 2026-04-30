import React from 'react'
import { Link } from 'react-router-dom'

const Book = ({book}) => {
  return (
    <>
                    <Link  key={book.id}
                            className="transition-all flex gap-3 duration-500  w-[100%]"
                            >
                            <div className="relative w-[214px]  sldieimh rounded-[8px] overflow-hidden">
                                <img
                                src={book.img}
                                alt={book.title}
                                className="h-full w-full object-cover rounded-[8px]"
                                />

                               
                            </div>

                            <div className="flex w-[170px] flex-col items-left justify-between mt-3">
                                <h3 className="text-[16px] text-[#1E1E1E] font-[400] berlin">
                                    {book.title}
                                </h3>
                                <div >
                                    <a href="" className='text-[#757575] mb-2 block primary-font'>Read Now</a>
                                    <div className='flex gap-3'>
                                        <img src="/a.png" alt="" />
                                        <img src="/flipcard.png" alt="" />
                                        <img src="/kindle.png" alt="" />
                                    </div>
                                </div>
                            </div>

                      
                            </Link>
    </>
  )
}

export default Book