import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";
export const WithdrawrequestApi = createApi({
  reducerPath: "WithdrawrequestApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["WITHDRAWREQUEST"],
  endpoints: (build) => ({
    getWithdrawrequest: build.query({
      query: ({ page,  }) => ({
        url: `/admin/viewWithdrawRequests?page=${page}`, 
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["WITHDRAWREQUEST"],
    }),

    getNumber: build.query({
      query: () => ({
        url: `/admin/usersPhoneNumber`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["WITHDRAWREQUEST"],
    }),     

    editWithdrawrequest: build.mutation({
      query: ({ id, data }) => ({
        url: `/admin/updateWithdrawRequests/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["WITHDRAWREQUEST"],
    }),
    deleteWithdrawrequest: build.mutation({
      query: (id) => ({
        url: `/admin/deleteWithdrawRequest/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["WITHDRAWREQUEST"],
    }),
  }),
});

export const { useGetWithdrawrequestQuery, useGetNumberQuery,useDeleteWithdrawrequestMutation,useEditWithdrawrequestMutation
} = WithdrawrequestApi;
