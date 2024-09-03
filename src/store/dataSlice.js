import { createSlice } from "@reduxjs/toolkit";

const ResDataSlice = createSlice({
    name: 'data',
    initialState: {
        ResData: null,
        filteredData: null,
    },

    reducers: {
        addResData: (state, action)=>{
            state.ResData = action.payload;
        },
        addFilteredData: (state, action)=>{
            state.filteredData = action.payload;
        }
    }
})

export const {addResData, addFilteredData} = ResDataSlice.actions;
export default ResDataSlice.reducer;