import {createSlice} from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:"counter",
    initialState:false,
    reducers:{
        toggle:state=>!state
    }
})

export const {toggle} =counterSlice.actions;
export default counterSlice.reducer;