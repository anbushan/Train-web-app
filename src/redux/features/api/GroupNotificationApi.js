import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const GroupNotificationApi = createApi({
  reducerPath: "GroupNotificationApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["GROUPNOTIFICATION"],
  endpoints: (build) => ({
    getGroupNotification: build.query({
      query: (page) => ({
        url: `/admin/viewGroupNotifications?page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["GROUPNOTIFICATION"],
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
        invalidatesTags: ["GROUPNOTIFICATION"],
      }),
     

    deleteGroupNotification: build.mutation({
      query: (id) => ({
        url: `/admin/deleteGroupNotifications/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["GROUPNOTIFICATION"],
    }),
  }),
});

export const { useGetGroupNotificationQuery, useGetGroupNotificationByIdQuery,useDeleteGroupNotificationMutation,
    useAddGroupNotificationMutation} = GroupNotificationApi;
