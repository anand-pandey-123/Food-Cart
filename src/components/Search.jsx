import React, { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addFilteredData, addResData } from "../store/dataSlice";

function Search({data}) {
  const resData = useSelector((store) => store?.restaurants?.ResData);
  const searchedResult = useRef();
  const dispatch = useDispatch();

  const handleSearchResult = () => {
    console.log(searchedResult.current.value);
    if (searchedResult) {
      const filteredData = resData?.filter((restaurant) => restaurant?.info?.name?.toLowerCase().includes(searchedResult.current.value)
      );
      console.log(filteredData);
      dispatch(addFilteredData(filteredData));
      
    }
  };
  return (
    <div className="w-full h-12 bg-zinc-200 rounded-lg flex ">
      <input
        ref={searchedResult}
        className="w-full rounded-l-lg px-4 bg-zinc-200 outline-none"
        type="text "
        placeholder={data}
      />
      <div
        onClick={handleSearchResult}
        className="w-12 items-center flex justify-center text-2xl text-zinc-400 cursor-pointer"
      >
        <IoIosSearch />
      </div>
    </div>
  );
}

export default Search;
