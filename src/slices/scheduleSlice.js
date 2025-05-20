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
    getTodaySchedule: builder.query({
      query: () => ({
        url: "/ops/today",
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
    getMaintenanceSchedule: builder.query({
      query: () => ({
        url: '/ops/maintenance',
        method: "GET",
      }),
      providesTags:["Schedule"],
    }),
  }),
});

export const {
  useGetSchedulesQuery,
  useGetMyScheduleQuery,
  useGetMaintenanceScheduleQuery,
  useGetTodayScheduleQuery,
} = scheduleApi;
