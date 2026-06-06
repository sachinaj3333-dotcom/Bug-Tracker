import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/slice/auth.js";
import projectReducer from "../src/slice/project.js";


const store = configureStore({
    reducer: {

        auth: authReducer,
        project: projectReducer,
    }
})

export default store;