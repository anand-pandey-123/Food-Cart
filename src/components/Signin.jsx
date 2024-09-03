import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function Signin() {
  const navigate = useNavigate();
  const [signin, setSignin] = useState(true);
  const email = useRef(null);
  const password = useRef(null);


  const signInHandler = () => {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // const signUpHandler = () => {
  //   createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  //     .then((userCredential) => {
  //       // Signed up
  //       const user = userCredential.user;
  //       navigate("/signin");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // };

  return (
    <div className=" bg-zinc-900  h-full w-full bg-opacity-75 absolute z-40 flex justify-end ">
      <div className="bg-white md:w-[32%] h-full overflow-hidden  p-6">
        
        <h1 className="text-3xl mt-4 mb-3 font-semibold">Login</h1>
        <h2 className="text-xs font-semibold">
          or{" "}
          <Link to={"/signup"}><span
            className="text-red-500 cursor-pointer"
          >
            create a new account
          </span></Link>
        </h2>
        <hr className="mt-4 w-12 border-black border-[1px]"></hr>
        <input
          ref={email}
          className="mt-8 h-16 w-[72%] p-4 rounded-none border-zinc-400 border outline-none"
          placeholder="Enter email address"
          type="text"
        />
        <input
          ref={password}
          className="mt-1 h-16 w-[72%] p-4 rounded-none border-zinc-400 border outline-none"
          placeholder="Enter password"
          type="password"
        />
        <button
          onClick={signInHandler}
          className="w-[72%] px-4 py-4 mt-6 bg-[#FF5200] text-white font-bold text-xs"
        >
          LOGIN
        </button>
        <p className="w-[72%] text-zinc-800 text-xs mt-2">
          By clicking on Login, I accept the{" "}
          <span className="font-semibold text-black">Terms & Conditions</span> &
          Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default Signin;
