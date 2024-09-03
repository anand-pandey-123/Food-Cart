import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ItemList from "./ItemList";

function ItemCategory({ data, vegFilterFlag }) {
  // console.log(data);
  const veg = data?.itemCards?.filter((c) => c?.card?.info?.isVeg)
  const [categoryFlag, setCategoryFlag] = useState(false);
  return (
    <div className={`${categoryFlag ? "bg-zinc-100" : "bg-white border-t-2"}  my-3  py-2 `}>
      <div onClick={() => setCategoryFlag(!categoryFlag)} className="flex justify-between items-center cursor-pointer">
        <span className="font-bold text-lg px-3">
          {data && data.title}({vegFilterFlag ? veg?.length : data?.itemCards?.length})
        </span>
        <div
          className="cursor-pointer px-3"
        >
          {!categoryFlag ? (
            <IoIosArrowDown></IoIosArrowDown>
          ) : (
            <IoIosArrowUp></IoIosArrowUp>
          )}
        </div>
      </div>
      {!categoryFlag && <div className="py-4">
        {vegFilterFlag ? veg?.map((items,index) => <ItemList key={index} data={items} ></ItemList>)
         : data?.itemCards?.map((items,index) => <ItemList key={index} data={items} ></ItemList>)}
      </div>}
    </div>
  );
}

export default ItemCategory;
