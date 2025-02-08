import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name:"Pranto",
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