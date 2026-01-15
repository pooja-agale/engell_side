import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tan-dunlin-922908.hostingersite.com",
  }),
  endpoints: (builder) => ({
    submitEnquiry: builder.mutation({
      query: (body) => ({
        url: "/enquiry",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSubmitEnquiryMutation } = api;
