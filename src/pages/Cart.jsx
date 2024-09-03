import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/ItemList";
import Shimmar from "../components/Shimmar";
import { FaRupeeSign } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import { removeCart } from "../store/cartSlice";

function Cart() {
  const cart = useSelector((store) => store?.cart?.cart);
  // const filteredCart = useSelector((store) => store?.cart?.filteredCart);
  // console.log(filteredCart)
  const dispatch = useDispatch();
  let total = [];
  total = cart?.map(
    (cart) => cart?.card?.info?.price || cart?.card?.info?.defaultPrice
  );
  const sum = total?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );


  const clickHandler = () => {
    alert("your payment is successfull, item(s) are ordered");
    dispatch(removeCart());
  }


  if (cart === null) {
    return (
      <div className=" pt-[20%] my-auto w-[60%] mx-auto">
        <Shimmar></Shimmar>
      </div>
    );
  }
  return (
    <div className="md:pt-[10%] pt-[28%] md:w-[60%] w-[90%] mx-auto pb-4">
      {cart?.map((cart) => (
        <ItemList key={cart?.card?.info?.id} data={cart && cart}></ItemList>
      ))}
      <div>
        {cart?.length ? (
          <div className="w-full shadow-2xl ">
            <div className="w-full flex justify-between px-6 py-6  mt-6  ">
              <span className="inline-block text-xl font-bold text-zinc-600">
                TO PAY
              </span>
              <span className="flex text-xl font-bold text-zinc-600 items-center">
                <FaRupeeSign></FaRupeeSign>
                {sum ? sum / 100 : "00"}
              </span>
            </div>
            <hr></hr>
            <div className="px-6  bg-white w-full py-2 flex flex-row-reverse ">
              <div onClick={clickHandler} className="flex  items-center bg-green-400 rounded-md font-semibold gap-1 cursor-pointer text-white w-32 px-3 py-2">
              PAY <FaRupeeSign></FaRupeeSign>
              {sum ? sum / 100 : "00"}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <LiaCartPlusSolid className="h-[32%] w-[32%] mx-auto text-green-400"></LiaCartPlusSolid>
            <p className="text-3xl font-bold text-zinc-600">
              No items in the cart
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
