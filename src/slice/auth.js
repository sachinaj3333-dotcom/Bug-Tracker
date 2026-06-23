import { createSlice } from "@reduxjs/toolkit"
import { getAuthData, signInUser, signUpUser } from "../services/auth-api.js";
import { safelyDecodeToken } from "../utils/auth.js";
import { isAuthenticated } from "../utils/tokenUtil.js";



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
    reducers: {
        logout: (state) => {
            localStorage.removeItem("authToken");
            state.token = null;
            state.user = null;
        },
    },
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

            // getauthdata
            .addCase(getAuthData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAuthData.fulfilled, (state, action) => {
                state.loading = false;
                const token = action.payload.token;
                state.token = token;

                const decodedUser = safelyDecodeToken(token);

                if (decodedUser) {
                    state.user = decodedUser;
                } else {
                    state.error = "Invalid token received.";
                }
            });
    },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;