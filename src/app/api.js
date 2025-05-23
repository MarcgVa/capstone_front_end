import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
const API_URL = "https://glc-back-end.onrender.com/api";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = window.sessionStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Task", "User", "Schedule", "Service"],
  endpoints: () => ({}),
});
