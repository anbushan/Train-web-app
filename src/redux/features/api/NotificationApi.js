import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const NotificationApi = createApi({
  reducerPath: "NotificationApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["NOTIFICATION"],
  endpoints: (build) => ({
    getNotification: build.query({
      query: () => ({
        url: `/getNotification`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["NOTIFICATION"],
    }),
  

    addNotification: build.mutation({
        query: (data) => ({
          url: `/sendNotification`,
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["NOTIFICATION"],
      }),
     

    deleteNotification: build.mutation({
      query: (id) => ({
        url: `/deleteNotification/65ae48a6bf7efcc87b182037${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["NOTIFICATION"],
    }),
  }),
});

export const { useGetNotificationQuery, useGetNotificationByIdQuery,useDeleteNotificationMutation,
    useAddNotificationMutation} = NotificationApi;
