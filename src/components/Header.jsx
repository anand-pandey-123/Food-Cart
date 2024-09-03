import React, { useState } from 'react'
import Search from './Search'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Signin from './Signin';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';

function Header() {
  // const[login, setLogin] = useState();
  const cartItems = useSelector(store => store?.cart?.cart)
  const user = useSelector(store => store?.user)
  const navigate = useNavigate()
  // console.log(login)
  const loginHandler = () => {
    if(user.length) {
      signOut(auth)
      .then(() => {
        navigate("/")
        // setLogin("login")
        // console.log(login);
        // alert("user logged out")
      })
      .catch((error) => {
        navigate("/error")
      })
    }
  }

  // if(login == "login") {
  //   return <Signin setLogin={setLogin}></Signin>
  // }

  return (
    <div className='flex fixed bg-white mx-auto md:h-[14%] z-20 w-full  justify-between shadow-lg items-center px-4 '>
        <div className='md:mx-10 h-14 md:w-20 '>
            <img className='h-full object-cover' src="https://icon-library.com/images/food-app-icon/food-app-icon-5.jpg" alt="" />
        </div>
        <div className='md:w-[28%] w-14 '>
        <Search data='search for Restaurant and Food' ></Search>
        </div>
        <div className='flex items-center md:gap-6 md:mr-8 '>
            <Link to={"/"}>
            <div className='md:text-lg text-xs text-zinc-500 hover:text-red-500 font-semibold md:px-2 pl-2 cursor-pointer '>Home</div>
            </Link>
            <Link to={"/about"}>
            <div className='md:text-lg text-xs text-zinc-500 hover:text-red-500 font-semibold md:px-2 pl-2 cursor-pointer  '>About Us</div>
            </Link>
            <Link to={"/cart"}>
            <div className='md:text-lg text-xs text-zinc-500 hover:text-red-500 font-semibold md:px-2 pl-2 cursor-pointer '>Cart({cartItems?.length})</div>
            </Link>
            <Link to={"/contact"}>
            <div className='md:text-lg text-xs text-zinc-500 hover:text-red-500 font-semibold md:px-2 pl-2 cursor-pointer '>Contact Us</div>
            </Link>
            <Link to={"/signin"} className='text-center' >
            <button className='md:text-lg  text-xs text-zinc-500 hover:text-red-500 font-semibold md:px-2 pl-2 cursor-pointer '
             onClick={loginHandler}>{user.length ? "log out" : "login"}</button>
            </Link>
        </div>
    </div>
  )
}

export default Header