import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";
export const WithdrawrequestApi = createApi({
  reducerPath: "WithdrawrequestApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["WITHDRAWREQUEST"],
  endpoints: (build) => ({
    getWithdrawrequest: build.query({
      query: ({ page, id }) => ({
        url: `/admin/viewWithdrawRequests?page=${page}&id=${id}`, // Fix the URL construction
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["WITHDRAWREQUEST"],
    }),


    // getWithdrawrequestById: build.query({
    //   query: (id) => ({
    //     url: `/admin/withdrawRequest/${id}`,
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   }),
    //   providesTags: ["WITHDRAWREQUEST"],
    // }),
     

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

export const { useGetWithdrawrequestQuery, useGetWithdrawrequestByIdQuery,useDeleteWithdrawrequestMutation,
    useAddWithdrawrequestMutation,useGetWithdrawrequestBySearchDataQuery,useEditWithdrawrequestMutation
} = WithdrawrequestApi;
