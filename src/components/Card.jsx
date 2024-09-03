import React from 'react'
import { IoStarOutline } from "react-icons/io5";
import { IMG_URL } from '../utils/constants';

function Card({res}) {
  return (
    <div className='md:h-72 h-56 m-4 md:m-4 md:w-60 w-32 hover:scale-90 ease-in duration-150  rounded-xl md:leading-7'>
        <div className='w-full md:h-[64%] h-[64%] '>
            <img className='w-full h-full object-cover rounded-xl' src={`${IMG_URL}${res?.info?.cloudinaryImageId}`} alt="" />
        </div>
        <h1 className='font-bold text-sm md:text-lg'>{res?.info?.name}</h1>
        <div className='flex items-center font-semibold'>
        <IoStarOutline />
        {res?.info?.avgRating}
        </div>
        <p className='md:text-sm text-xs'>{res?.info?.cuisines?.join(", ")}</p>
        
    </div>
  )
}

export default Card