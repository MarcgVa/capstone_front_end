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
    getServicePlanById: builder.query({
      query: (id) => ({
        url: `/services/admin/plans/plan/${id}`,
        method: "GET",
      }),
      providesTags: ["Service"],
    }),
    createServicePlan: builder.mutation({
      query: ({...formData}) => ({
        url: '/services/admin/plans/new',
        method: "POST",
        body: formData,
      }),
      invalidatesTags:["Service"],
    }),
    updateServicePlan: builder.mutation({
      query: (...plan) => ({
        url: `/services/admin/plans/${plan.servicePlanId}`,
        method: "PUT",
        body: plan,
      }),
      invalidatesTags: ["Service"],
    }),
    getService: builder.query({
      query: (id) => ({
        url: `/services/service/${id}`,
        method: "GET",
      }),
      providesTags:["Service"],
    }),
    getServicesforUser: builder.query({
      query: (id) => ({
        url: `/services/client/${id}`,
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
  useCreateServicePlanMutation,
  useUpdateServicePlanMutation,
  useGetServicePlanByIdQuery,
} = servicesApi;  