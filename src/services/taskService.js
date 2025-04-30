import { api } from "../app/api";
import { createSlice } from "@reduxjs/toolkit";

const taskApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: ({ body }) => ({
        url: "/tasks/new",
        method: "POST",
        body,
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


export const {
  useGetTasksQuery,
  useGetMyTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
