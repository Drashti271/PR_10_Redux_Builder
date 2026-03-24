import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.js";
import taskReducer from "../features/task/taskSlice.js";

const store = configureStore({
    reducer : {
        users : userReducer,
        tasks : taskReducer
    }
})

export default store;