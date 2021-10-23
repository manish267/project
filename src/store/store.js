import {configureStore} from '@reduxjs/toolkit';
import resetToken from './resetToken';
import loginSlice from './loginSlice';

const store=configureStore({
    reducer:{
        resetToken:resetToken,
        loginSlice:loginSlice,
    }
})

export default store;