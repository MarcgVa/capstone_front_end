import { api } from "../app/api";
import { createSlice } from "@reduxjs/toolkit";

const taskApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: ({ ...payload }) => ({
        url: "/tasks/new",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Task"],
    }),
    getTasks: builder.query({
      query: () => ({
        url: "/tasks/all",
        method: "GET",
      }),
      providesTags: ["Task"],
    }),
    getMyTasks: builder.query({
      query: () => ({
        url: "/tasks/assigned",
        method: "GET",
      }),
      providesTags: ["Task"],
    }),
    updateTask: builder.mutation({
      query: ({ id, body }) => ({
        url: `/tasks/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation({
      query: ({ id }) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});


const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    value: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getTasks.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default tasksSlice.reducer;
export const {
  useGetTasksQuery,
  useGetMyTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
