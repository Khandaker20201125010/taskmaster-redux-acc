import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name:"pranto",
    email:"po@gmail.com",
    userTask:[],

}
const userSlice = createSlice({

    name: 'userSlice',
    initialState,
    reducers: {
        
    }
})

export default userSlice.reducer;