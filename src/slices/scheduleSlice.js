import { api } from "../app/api";

const scheduleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSchedules: builder.query({
      query: () => ({
        url: "/ops/schedules",
        method: "GET",
      }),
      providesTags: ["Schedule"],
    }),
    getSchedule: builder.query({
      query: () => ({
        url: "/ops/schedule",
        method: "GET",
      }),
      providesTags: ["Schedule"],
    }),
  }),
});


export const {
  useGetAllSchedulesQuery,
  useGetScheduleQuery,
} = scheduleApi;
