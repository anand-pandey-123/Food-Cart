import { createSlice } from "@reduxjs/toolkit";

const resMenu = createSlice({
    name: 'resMenu',
    initialState: {
        resData: null,
        menuData: null,
        filteredMenuData: null,
    },
    reducers: {
        addResDetails: (state, action) => {
            state.resData = action.payload;
        },
        addMenuData: (state, action) => {
            state.menuData = action.payload;
        },
        addFilteredMenuData: (state, action) => {
            state.filteredMenuData = action.payload;
        }
    }
})


export const { addMenuData, addFilteredMenuData, addResDetails } = resMenu.actions;
export default resMenu.reducer;