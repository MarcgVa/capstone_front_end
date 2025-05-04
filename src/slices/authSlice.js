import { api } from "../app/api";
import { createSlice } from "@reduxjs/toolkit";

const TOKEN = 'token';
const ROLE = 'role';
const EMAIL = 'email'

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
      invalidatesTags: ["User", "Task"],
    }),
  }),
});

const storeToken = (state, { payload }) => {
  if (typeof (payload) === 'string') {
    payload = JSON.parse(payload);
  }
  console.log(payload);
  state.token = payload.token;
  state.user = payload.user;
  window.sessionStorage.setItem(TOKEN, payload.token)
  window.sessionStorage.setItem(ROLE, payload.user.role)
  window.sessionStorage.setItem(EMAIL, payload.user.email)
};
const completeLogout = (state) => {
  state.token = null
  window.sessionStorage.removeItem(TOKEN);
  window.sessionStorage.removeItem(ROLE);
  window.sessionStorage.removeItem(EMAIL);
}

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.register.matchFulfilled, storeToken)
      .addMatcher(api.endpoints.login.matchFulfilled, storeToken)
      .addMatcher(api.endpoints.logout.matchFulfilled, completeLogout);
  },
});

export default authSlice.reducer;

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetAccountQuery,
  useLogoutMutation,
} = authApi;
