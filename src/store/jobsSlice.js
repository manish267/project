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

// export const fetchJobs=()=>{
//   const token = useSelector(state => state.loginSlice.token);


// }

export const jobsActions = jobsSlice.actions;

export default jobsSlice.reducer;
