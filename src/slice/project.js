import { createSlice } from "@reduxjs/toolkit"
import { addProject } from "../services/project-api"

const initialState = {
    token: null,
    loading: null,
    error: null,
    message: null,
    project: null,
    user: null,
    allProject: [],
    addProjectSuccess: false,
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // To add project
        .addCase(addProject.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.addProjectSuccess = false;
        })
        .addCase(addProject.fulfilled, (state, action) => {
            state.loading = false;
            state.project = action.payload.project;
            const project = action.payload.project;
            state.allProject = [project, ...state.allProject];
            state.token = action.payload.token;
            state.message = action.payload.message;
            state.addProjectSuccess = true;
        })
        .addCase(addProject.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
            state.message = action.payload.message;
        })
    }
})

export default projectSlice.reducer;