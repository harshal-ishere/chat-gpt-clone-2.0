import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './slices/counter';
import  barringSlice  from './slices/barring';
export const store = configureStore({
    reducer:{
        counter:counterSlice,
        bare:barringSlice
    }
});