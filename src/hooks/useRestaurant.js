import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addFilteredData, addResData } from '../store/dataSlice';

function useRestaurant() {
    const dispatch = useDispatch();


    const fetchData = async () => {
      const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await res.json();
      dispatch(addResData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
      dispatch(addFilteredData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
    }
  
    useEffect(()=>{
      fetchData()
    }, [])
}

export default useRestaurant