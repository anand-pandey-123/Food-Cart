import { Route, Routes, useNavigate } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Cards from "./components/Cards";
import RestaurantMenu from "./pages/RestaurantMenu";
import Cart from "./pages/Cart";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useEffect } from "react";
import Signin from "./components/Signin";
import { addUser, removeUser } from "./store/userSlice";
import { useDispatch } from "react-redux";
import SignUp from "./components/signUp";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    const unscubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        console.log(uid, email, displayName)
        navigate("/")
        dispatch(addUser(uid));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });

    return () => unscubscribe(); // Clean up function when component unmounts
  }, [])


  return (
    <div className="mx-auto h-screen w-full ">
      <Routes>
        <Route path="/" element={<Home></Home>} errorElement={<Error></Error>}>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/about" element={<AboutUs></AboutUs>}></Route>
          <Route path="/" element={<Cards></Cards>}></Route>
          <Route path="/restaurants/:resId" element={<RestaurantMenu></RestaurantMenu>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
