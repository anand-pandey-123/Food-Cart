import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import Shimmar from './Shimmar';
import { Link } from 'react-router-dom';
import useRestaurant from '../hooks/useRestaurant';

const Cards = () => {
  const filteredData = useSelector(store => store?.restaurants?.filteredData);
  useRestaurant();
  return (filteredData ? 
    <div className='md:pt-[8%] pt-[36%] w-full md:w-[95%]  mx-auto shadow-xl p-8 flex flex-wrap '>
        {filteredData?.map((restaurant)=><Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id} ><Card res={restaurant}></Card></Link>)}
        
        
    </div>
    
  : <div className='pt-[8%] w-[95%] p-4 mx-auto flex flex-wrap'>
      {[1,2,3,4,5,6,7,8].map((el, index) => <Shimmar key={index}></Shimmar>)}
      
  </div>)
}

export default Cards