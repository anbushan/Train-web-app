import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const WithdrawrequestApi = createApi({
  reducerPath: "WithdrawrequestApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["WITHDRAWREQUEST"],
  endpoints: (build) => ({
    getWithdrawrequest: build.query({
      query: () => ({
        url: `/admin/viewWithdrawRequests`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["WITHDRAWREQUEST"],
    }),
     

    editWithdrawrequest: build.mutation({
      query: ({ id, data }) => ({
        url: `/admin/updateWithdrawRequests/65bf5868acac9bd014e8ed7/${id}`,
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
        url: `//admin/categories/result${id}`,
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
