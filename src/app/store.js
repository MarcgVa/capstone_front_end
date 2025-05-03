import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import usersReducer from "../slices/usersSlice";
import userReducer from "../slices/userSlice";
import tasksReducer from "../slices/tasksSlice";
import taskReducer from "../slices/taskSlice";

import { api } from "./api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    users: usersReducer,
    user: userReducer,
    tasks: tasksReducer,
    task: taskReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(api.middleware),
});
