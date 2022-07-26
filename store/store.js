import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';


const reducer = {
    auth: authReducer
}

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;
