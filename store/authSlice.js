import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    permision: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setPermision(state) {
            state.permision = !state.permision
        }
    }
})

export const {setPermision} = authSlice.actions;
export default authSlice.reducer;