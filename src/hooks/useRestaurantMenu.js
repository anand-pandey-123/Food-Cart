import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addFilteredMenuData, addMenuData, addResDetails } from '../store/resMenuSlice';

function useRestaurantMenu() {
    const { resId } = useParams();
    const dispatch = useDispatch();
  
    const fetchMenu = async () => {
      const res = await fetch(
        ` https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.3893155&lng=72.9106202&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await res.json();
      dispatch(addResDetails(json?.data?.cards[2]?.card?.card?.info));
      dispatch(
        addMenuData(
          json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        )
      );
      dispatch(
        addFilteredMenuData(
          json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        )
      );
    };
  
    useEffect(() => {
      fetchMenu();
    }, []);
}

export default useRestaurantMenu