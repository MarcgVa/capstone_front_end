import { createSlice } from "@reduxjs/toolkit";
import { api } from "../app/api";

const scheduleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSchedules: builder.query({
      query: () => ({
        url: "/ops/schedules",
        method: "GET",
      }),
      providesTags: ["Schedule"],
    }),
    getMySchedule: builder.query({
      query: () => ({
        url: "/ops/schedule",
        method: "GET",
      }),
      providesTags: ["Schedule"],
    }),
  }),
});

const scheduleSlice = createSlice({
  name: "schedules",
  initialState: {
    value: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getSchedules.matchFulfilled, (state, { payload }) => {return payload; }
    );
  },
});

export default scheduleSlice.reducer;

export const {
  useGetSchedulesQuery,
  useGetMyScheduleQuery,
} = scheduleApi;
