import {createSlice} from "@reduxjs/toolkit";

export const barringSlice=createSlice({
    name:"barring",
    initialState:false,
    reducers:{
        bare:state=>!state
    }
})

export const {bare} =barringSlice.actions;
export default barringSlice.reducer;