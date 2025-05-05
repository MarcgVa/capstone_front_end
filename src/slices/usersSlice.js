import { api } from "../app/api";
import { createSlice } from "@reduxjs/toolkit";

const accountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/clients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...user }) => ({
        url: `/clients/${id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    getSelf: builder.query({
      query: () => ({
        url: "/clients/me",
        method: "GET",
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: "/clients/list",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});


const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getUsers.matchFulfilled, (state, { payload }) => { return payload; }
    );
  },
});

export default usersSlice.reducer;

export const {
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetSelfQuery,
  useGetUsersQuery,
} = accountApi;
