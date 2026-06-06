import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "./Api-endpoints/endpoints";
import axios from "axios";
import { getApiConfig } from "../utils/api-configs/get-api-config";

export const addProject = createAsyncThunk(
    "project/add-project", async (values, thunkApi) => {
        try {
            const url = `${import.meta.env.VITE_LOCAL_URL}/${EndPoints.AddProjectApi}`;
            const {data} = await axios.post(url, values, getApiConfig());
            if (data.status === 201) {
                return thunkApi.fulfillWithValue(data);
            }
        } catch (error){
            return thunkApi.rejectWithValue(error);
        }
    }
)