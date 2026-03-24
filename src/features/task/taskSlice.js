import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from '../../api/axiosInstance.js';

export const createTask = createAsyncThunk('task/createTask' , async (task,{rejectWithValue}) => {
    try {
        const res = await axiosInstance.post('/task',task);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const getAllTask = createAsyncThunk('task/getAllTask', async(_,{rejectWithValue}) => {
    try {
        const res = await axiosInstance.get('/task');
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

const taskSlice = createSlice({
    name : "task",
    initialState : {
        taskData : [],
        isLogin : false,
        loading : false,
        error : null
    },
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(createTask.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(createTask.fulfilled,(state , action) => {
            state.taskData.push(action.payload);
            state.loading = false;
        });

        builder.addCase(getAllTask.fulfilled, (state, action) => {
            state.taskData = action.payload;
        })
    }
})

export default taskSlice.reducer;