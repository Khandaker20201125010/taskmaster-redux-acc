import {  configureStore } from '@reduxjs/toolkit'
import tasksSlice from "./features/tasks/tasksSlice"
import userSlice from './features/User/userSlice';

export const store = configureStore({

    reducer: {
         tasksSlice : tasksSlice,
         userSlice : userSlice,
    }
});
export default store