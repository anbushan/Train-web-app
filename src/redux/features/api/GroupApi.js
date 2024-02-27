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
  
    getEmail: build.query({
      query: () => ({
        url: `/admin/usersEmail`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["GROUP"],
    }),

    addGroup: build.mutation({
        query: ({ groupName, title, body }) => ({
          url: `/groupNotification/${groupName}`,
          method: "POST",
          body: { title, body },
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["GROUP"],
      }),
      addGroupNotification: build.mutation({
        query: ({groupname,emails}) => ({
          url: `/admin/addGroup/${groupname}`,
          method: "POST",
          body: { groupname: groupname, emails: emails },
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["GROUP"],
      }),

    deleteGroup: build.mutation({
      query: (id) => ({
        url: `/admin/deleteGroup/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["GROUP"],
    }),
  }),
});

export const { useGetGroupQuery, useGetEmailQuery,useDeleteGroupMutation,useAddGroupNotificationMutation,
    useAddGroupMutation} = GroupApi;
