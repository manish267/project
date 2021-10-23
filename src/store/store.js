import {configureStore} from '@reduxjs/toolkit';
import resetToken from './resetToken';
import loginSlice from './loginSlice';
import jobsSlice from './jobsSlice';

const store=configureStore({
    reducer:{
        resetToken:resetToken,
        loginSlice:loginSlice,
        jobsSlice:jobsSlice
    }
})

export default store;