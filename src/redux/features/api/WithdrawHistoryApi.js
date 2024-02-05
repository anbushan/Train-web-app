import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const WithdrawhistoryApi = createApi({
  reducerPath: "Withdrawhistory",
  baseQuery: customFetchBase,
  tagTypes: ["WITHDRAWHISTORY"],
  endpoints: (builder) => ({
    getWithdrawhistory: builder.query({
      query: (page) => ({
        url: `/admin/witdrawHistory?${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["WITHDRAWHISTORY"],
    }),

  
  }),
});

export const { useGetWithdrawhistoryQuery} = WithdrawhistoryApi;
