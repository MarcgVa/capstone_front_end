import { api } from '../app/api';
import { createSlice } from '@reduxjs/toolkit';


const servicesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getServicePlans: builder.query({
      query: () => ({
        url: "/services/admin/plans",
        method: "GET",
      }),
      providesTags: ["Service"],
    }),
    getService: builder.query({
      query: (id) => ({
        url: `/services/service/${id}`,
        method: "GET",
      }),
      providesTags:["Service"],
    }),
    getServicesforUser: builder.query({
      query: () => ({
        url: "/services/me",
        method: "GET",
      }),
      providesTags: ["Service"],
    }),
    updateUserServices: builder.mutation({
      query: (payload) => ({
        url: `/services/service/${payload.id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Service"],
    }),
    addNewService: builder.mutation({
      query: (payload) => ({
        url: "/services/new",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Service"],
    }),
    getServiceWithNoCutDate: builder.query({
      query: () => ({
        url: '/services/no-cut',
        method: "GET",
      }),
      providesTags:["Service"],
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/services/service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:["Service"],
    }),
  }),
});




export const {
  useGetServicePlansQuery,
  useGetServicesforUserQuery,
  useUpdateUserServicesMutation,
  useAddNewServiceMutation,
  useGetServiceWithNoCutDateQuery,
  useDeleteServiceMutation,
  useGetServiceQuery,
} = servicesApi;  