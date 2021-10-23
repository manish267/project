import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loggedIn:'',
    loginUser:'',
    loginToken:''
}

const loginSlice=createSlice({
    name:'loginSlice',
    initialState,
    reducers:{
        setLoginUser(state,action){
            state.loginUser=action.payload.userName;
            
        },
        setLoggedInStatus(state,action){
            state.loggedIn=action.payload
        },
        setToken(state,action){
            state.loginToken=action.payload
        }


    }
})

export const loginActions=loginSlice.actions;

export default loginSlice.reducer;