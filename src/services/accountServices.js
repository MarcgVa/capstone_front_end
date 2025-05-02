import { api } from "../app/api";
import { createSlice } from "@reduxjs/toolkit";

const accountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/api/clients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...user }) => ({
        url: `/api/clients/${id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    getSelf: builder.query({
      query: () => ({
        url: "/api/clients/me",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getUsers: builder.query({
      query: () => ({
        url: "/api/clients/list",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getUser: builder.query({
      query: () => ({
        url: `/api/clients/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});





export const {
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetSelfQuery,
  useGetUsersQuery,
  useGetUserQuery,
} = accountApi;
