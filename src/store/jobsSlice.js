import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allJobs: []
 
};

const jobsSlice = createSlice({
  name: "jobsSlice",
  initialState,
  reducers: {
    setJobs(state, action) {
      state.allJobs = action.payload;
    }
   
  },
});


// fetch allJobs
// export const fetchJobs=()=>async (dispatch)=>{

  //   const fetchData=async ()=>{


  // }
  
  
// }

export const jobsActions = jobsSlice.actions;

export default jobsSlice.reducer;
