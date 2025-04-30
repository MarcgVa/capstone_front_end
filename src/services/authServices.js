import { api } from "../app/api";
import { createSlice } from "@reduxjs/toolkit";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ ...user }) => ({
        url: "/auth/register",
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: ({ ...login }) => ({
        url: "/auth/login",
        method: "POST",
        body: login,
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

const registration = (state, { payload }) => {
  localStorage.setItem("glcr", 1);
  localStorage.setItem("glcl", 1)
  localStorage.setItem("token", payload.token);
};
const storeToken = (state, { payload }) => {
  localStorage.setItem("glcl", 1);
  localStorage.setItem("token", payload.token);
};
const completeLogout = () => {
  localStorage.setItem("glcl", 0);
  localStorage.removeItem('token');
}

const registerSlice = createSlice({
  name: "register",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.register.matchFulfilled, registration)
      .addMatcher(api.endpoints.login.matchFulfilled, storeToken)
      .addMatcher(api.endpoints.logout.matchFulfilled, completeLogout);
  },
});

export default registerSlice.reducer;

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetAccountQuery,
  useLogoutMutation,
} = authApi;
