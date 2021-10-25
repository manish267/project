import {createSlice} from '@reduxjs/toolkit';

const initialState={
    resetToken:''
}

const resetSlice=createSlice({
    name:'resetToken',
    initialState:initialState,
    reducers:{
        setResetToken(state,action){
            // console.log(action.payload.token)
            state.resetToken=action.payload.token;
        }
    }
})


export const resetActions=resetSlice.actions;
export default resetSlice.reducer;
