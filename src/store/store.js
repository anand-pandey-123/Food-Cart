import { configureStore } from "@reduxjs/toolkit";
import ResDataReducer from "./dataSlice"
import resMenuReducer from "./resMenuSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
const store = configureStore({
    reducer: {
        restaurants: ResDataReducer,
        restaurantMenu: resMenuReducer,
        cart: cartReducer,
        user: userReducer,
    }
})

export default store;