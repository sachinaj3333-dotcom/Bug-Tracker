import { createSlice } from "@reduxjs/toolkit"
import { signInUser, signUpUser } from "../services/auth-api"



const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
    message: null,
    status: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Sign in
            .addCase(signInUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signInUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.status = action.payload.status;
                state.message = action.payload.message;
            })
            .addCase(signInUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.response.data.message || "Sign in failed";
                state.message = action.payload.response.data.message || "Try again";
            })

            // Sign up
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.message = action.payload.message;
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.error || "Sign up failed";
                state.message = action.payload.message || "Try again";
            })
    }
})

export default authSlice.reducer;