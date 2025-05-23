import { api } from "../app/api";

const billingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getListOfInvoicesForUser: builder.query({
      query: (id) => ({
        url: `/invoice/list/${id}`,
        method: "GET",
      }),
      providesTags: ["Billing"],
    }),
  }),
});

export const {
  useGetListOfInvoicesForUserQuery
} = billingApi;
