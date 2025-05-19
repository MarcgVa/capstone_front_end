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
    getServicesforUser: builder.query({
      query: () => ({
        url: "/services/me",
        method: "GET",
      }),
      providesTags: ["Service"],
    }),
    updateUserServices: builder.mutation({
      query: (payload) => ({
        url: `/services/${payload.id}`,
        method: "PUT",
        body: payload
      }),
      invalidatesTags: ["Service"],
    }),
    addNewService: builder.mutation({
      query: (payload) => ({
        url: '/services/new',
        method: "POST",
        body: payload
      }),
      invalidatesTags:["Service"]
    }),
  }),
});




export const {
  useGetServicePlansQuery,
  useGetServicesforUserQuery,
  useUpdateUserServicesMutation,
  useAddNewServiceMutation,  
} = servicesApi;  