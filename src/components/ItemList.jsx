import React from 'react'
import { IMG_URL } from '../utils/constants'
import { FaRupeeSign } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addCart, deleteFromCart } from '../store/cartSlice';
import { FaStopCircle } from "react-icons/fa";
import { useParams } from 'react-router-dom';



function ItemList({data}) {
    // console.log(data?.card?.info?.isVeg);
    const cart = useSelector((store) => store?.cart?.cart);
    // const filteredCart = useSelector((store) => store?.cart?.filteredCart);

    const {resId} = useParams();
    const dispatch = useDispatch();
    const cartHandler = () => {
        dispatch(addCart(data && data));
    }

    const onClickHandler = (data) => {
      const filter = cart?.filter((item) => item?.card?.info?.id != data)
      // console.log(filter)
      dispatch(deleteFromCart(filter && filter));
    }


  return (
    <div>
        <div className='flex justify-between bg-white'>
        <div className='flex flex-col w-[60%] '>
            <div className='flex  items-center gap-1'>
            <h1 className='font-bold md:text-lg text-sm text-zinc-900 '>{data?.card?.info?.name}</h1>
            {data?.card?.info?.isVeg === 1? <FaStopCircle className='text-green-500 md:text-lg'></FaStopCircle> : <FaStopCircle className='text-red-500 text-lg '></FaStopCircle>}
            </div>
            <p className='flex items-center font-bold text-md text-zinc-800'><FaRupeeSign className='text-xs font-semibold'></FaRupeeSign>{data?.card?.info?.price ? data?.card?.info?.price/100 : data?.card?.info?.defaultPrice/100}</p>
            <p className='flex items-center  text-sm font-semibold'><MdStars className='text-yellow-500'></MdStars>{data?.card?.info?.ratings?.aggregatedRating?.rating}</p>
            {data?.card?.info?.description ? <p className='md:text-sm text-xs font-semibold  text-zinc-400 '>{data?.card?.info?.description}</p> : null}
        </div>
        <div className={`h-36 relative  text-center md:w-[24%] w-[36%] `}>
            {data?.card?.info?.imageId && <img className='h-full w-full  rounded-md' src={IMG_URL + data?.card?.info?.imageId} alt="" />}
            {data?.card?.info?.imageId && resId ? <button onClick={cartHandler} className='px-8 py-1 absolute -my-4 border-x-2 border-y-2 rounded-md border-zinc-200 -mx-12 text-md font-extrabold bg-white shadow-lg text-green-600 '>{resId ? "ADD" : "Remove"}</button>
             : (<button onClick={() => onClickHandler(data?.card?.info?.id)} className='md:px-8 px-4 py-1 absolute -my-4 border-x-2 border-y-2 rounded-md border-zinc-200 -mx-12 md:-mx-12 text-md font-extrabold bg-white shadow-lg text-green-600 '>{resId ? "ADD" : "Remove"}</button>)}
        </div>
    </div>
    <hr className='my-6'></hr>
    </div>
  )
}

export default ItemList