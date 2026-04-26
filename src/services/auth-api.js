import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "./Api-endpoints/endpoints";
import { getApiConfig } from "../utils/api-configs/get-api-config";
import axios from "axios";


//  Sign in

export const signInUser = createAsyncThunk(
    "auth/signInUser", async (values, thunkApi) => {
        try{
            const url = `${import.meta.env.VITE_LOCAL_URL}/${EndPoints.SignInApi}`;
            const { data } = await axios.post(url, values, getApiConfig());

            // local storage token
            if (data.status === 200) {
                localStorage.setItem('authToken', data.token);
                return thunkApi.fulfillWithValue(data);
            }
        }catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

// Sign up

export const signUpUser = createAsyncThunk(
    "auth/signUpUser", async (values, thunkApi) => {
        try{
            const url = `${import.meta.env.VITE_LOCAL_URL}/${EndPoints.SignUpApi}`;
            const { data } = await axios.post(url, values, getApiConfig());
            if (data.status === 201) {
                return thunkApi.fulfillWithValue(data);
            }
        }catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)