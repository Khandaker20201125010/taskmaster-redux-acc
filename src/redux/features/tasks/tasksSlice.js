import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks :[],
}

const tasksSlice = createSlice({

    name: 'tasksSlice',
    initialState,
    reducers: {
     addTask (state,{payload}) {
        if(state.tasks.length === 0){
            state.tasks.push({id: 1,status:'pending' ,...payload});
        }
        else{
        const lastElement =  state.tasks.at(-1).id += 1;
        state.tasks.push({id: lastElement.id + 1,...payload});
        }
     },
     removeTask:(state,{payload}) => {
          state.tasks = state.tasks.filter((task) => task.id !== payload);
     },
     updateStatus:(state,{payload}) => {
     const target = state.tasks.find((task) => task.id === payload.id)
     target.status = payload.status
    }  
    }
})

export const {addTask,removeTask,updateStatus} = tasksSlice.actions

export default tasksSlice.reducer;