import { api } from '../app/api';
import { createSlice } from '@reduxjs/toolkit';


const servicesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getServicePlans: builder.query({
      query: () => ({
        url: "/services/admin/plans",
        method: "GET",
      }),
      providesTags:["Plans"],
    }),

  })
});




export const {useGetServicePlansQuery } = servicesApi;  