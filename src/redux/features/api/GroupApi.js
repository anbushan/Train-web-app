import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const GroupApi = createApi({
  reducerPath: "GroupApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["GROUP"],
  endpoints: (build) => ({
    getGroup: build.query({
      query: (page) => ({
        url: `/admin/viewGroup?page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["GROUP"],
    }),
  

    addGroup: build.mutation({
        query: (data) => ({
          url: `/admin/addGroup/GroupOnce`,
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["GROUP"],
      }),
     

    deleteGroup: build.mutation({
      query: (id) => ({
        url: `/admin/deleteGroup/Group456/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["GROUP"],
    }),
  }),
});

export const { useGetGroupQuery, useGetGroupByIdQuery,useDeleteGroupMutation,
    useAddGroupMutation} = GroupApi;
