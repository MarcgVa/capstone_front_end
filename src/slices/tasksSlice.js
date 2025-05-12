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
    getTaskById: builder.query({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "GET",
      }),
      invalidatesTags:["Task"],
    }),
    getNewConsults: builder.query({
      query: () => ({
        url: `/tasks/consults`,
        method: "GET",
      }),
      invalidatesTags:["Task"],
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
  useGetTaskByIdQuery,
  useGetNewConsultsQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
