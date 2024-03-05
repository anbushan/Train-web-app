import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const TransactionhistoryApi = createApi({
  reducerPath: "Transactionhistory",
  baseQuery: customFetchBase,
  tagTypes: ["TRANSACTIONHISTORY"],
  endpoints: (builder) => ({
    getTransactionhistory: builder.query({
      query: (page) => ({
        url: `/admin/viewTransactions?page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["TRANSACTIONHISTORY"],
    }),

    deleteTransactionhistory: builder.mutation({
      query: (id) => ({
        url: `/admin/deleteTransaction/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["TRANSACTIONHISTORY"],
    }),

  
  }),
});

export const { useGetTransactionhistoryQuery,useDeleteTransactionhistoryMutation} = TransactionhistoryApi;
