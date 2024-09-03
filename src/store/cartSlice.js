import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        filteredCart: [],
    },
    reducers: {
        addCart: (state, action) => {
            state.cart.push(action.payload)
        },
        removeCart: (state, action) => {
            state.cart.length = 0;
            // state.filteredCart.length = 0;
        },
        deleteFromCart: (state, action) => {
            // state.filteredCart.push(action.payload)
            state.cart.length = 0;
            state.cart = action.payload;
        },
       
    }
})



export const { addCart, removeCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;