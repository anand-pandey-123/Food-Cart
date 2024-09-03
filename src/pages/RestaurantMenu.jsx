import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Search from "../components/Search";
import { IoStarOutline } from "react-icons/io5";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import ItemCategory from "../components/ItemCategory";
import Shimmar from "../components/Shimmar";

function RestaurantMenu() {
  const menuData = useSelector((store) => store?.restaurantMenu?.menuData);
  const resData = useSelector((store) => store?.restaurantMenu?.resData);
  const filteredData = useSelector((store) => store?.restaurantMenu?.filteredMenuData);
  const[vegFilterFlag, setVegFilterFlag] = useState(false);
  const dispatch = useDispatch()

  useRestaurantMenu();
  const vegFilter = menuData && menuData.filter((menu) => menu?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  const vegFilterHandler = () => {
    setVegFilterFlag(!vegFilterFlag);
  }

  return (
    <div className="  md:w-[60%]  mx-auto pt-[8%] ">
      {vegFilter ? <div className="px-4 w-full">
        <h1 className="text-2xl font-bold">{resData?.name}</h1>
        <div className="border-zinc-300 border-x-8 border-y-8 my-4 px-4 font-bold rounded-xl leading-7 py-6">
          <p className="flex items-center font-bold">
            <IoStarOutline className="bg-green-400 rounded-full"></IoStarOutline>
            {resData?.avgRating}.({resData?.totalRatingsString}) . {resData?.costForTwoMessage}
          </p>
          <p className="text-red-500 underline">{resData?.areaName}</p>
          <p>{resData?.cuisines.join(", ")}</p>
        </div>
        <div className="w-full ">
          <Search data="search for dishes"></Search>
        </div>
        <button onClick={vegFilterHandler} className="px-4 py-2 bg-zinc-100 my-3 text-xs rounded-full flex font-bold">Veg Only<span className="inline-block h-4 w-4 rounded-full bg-green-400  ml-2"></span></button>
        <h1 className="text-lg font-bold">Menu :</h1>
        {vegFilter ? (
          vegFilter?.map((menu, index) => (
            <ItemCategory key={index} data={menu?.card?.card} vegFilterFlag={vegFilterFlag} ></ItemCategory>
          ))
        ) : (
          <h1>loading....</h1>
        )}
      </div> : <div className='pt-[8%] w-[95%] p-4 mx-auto flex flex-wrap'>
      {[1,2,3,4,5,6,7,8].map((el, index) => <Shimmar key={index}></Shimmar>)}
  </div>}
    </div>
  );
}

export default RestaurantMenu;
