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
    // getNotificationById: build.query({
    //   query: (id) => ({
    //     url: `/Notification/${id}`,
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   }),
    //   providesTags: ["Notification"],
    // }),
    // getNotificationBySearchData: build.query({
    //   query: (search) => ({
    //     url: `/Notification/${search}`,
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   }),
    //   providesTags: ["Notification"],
    // }),

//     addNotification: build.mutation({
//         query: (data) => ({
//           url: `/admin/addNotification`,
//           method: "POST",
//           body: data,
//           headers: {
//             "Content-Type": "application/json; charset=UTF-8",
//           },
//         }),
//         invalidatesTags: ["NOTIFICATION"],
//       }),
     

//     editNotification: build.mutation({
//       query: ({ id, data }) => ({
//         url: `/admin/updateNotification/65b61b26e068a4e7d727ad84${id}`,
//         method: "PATCH",
//         body: data,
//         headers: {
//           "Content-Type": "application/json; charset=UTF-8",
//         },
//       }),
//       invalidatesTags: ["NOTIFICATION"],
//     }),
//     deleteNotification: build.mutation({
//       query: (id) => ({
//         url: `/admin/deleteNotification/65b61b26e068a4e7d727ad84${id}`,
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json; charset=UTF-8",
//         },
//       }),
//       invalidatesTags: ["NOTIFICATION"],
//     }),
  }),
});

export const { useGetNotificationQuery, useGetNotificationByIdQuery,useDeleteNotificationMutation,
    useAddNotificationMutation,useGetNotificationBySearchDataQuery,useEditNotificationMutation
} = NotificationApi;
