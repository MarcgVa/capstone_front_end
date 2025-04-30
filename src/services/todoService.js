import { api } from "../app/api";
import { createSlice } from "@reduxjs/toolkit";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: ({ body }) => ({
        url: "/task/new",
        method: "POST",
        body,
      }),
    }),
    getTask: builder.query({
      query: ({credentials}) => ({
        url: "/task/all",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    getAccount: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    logout: builder.mutation({
      queryFn: () => ({ data: {} }),
      invalidatesTags: ["User", "Todo"],
    }),
  }),
});



export const {
  useRegisterMutation,
  useLoginMutation,
  useGetAccountQuery,
  useLogoutMutation,
} = authApi;
