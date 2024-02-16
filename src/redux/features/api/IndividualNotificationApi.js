import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const IndividualNotificationApi = createApi({
  reducerPath: "IndividualNotificationApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["INDIVIDUALNOTIFICATION"],
  endpoints: (build) => ({
    addIndividualNotification: build.mutation({
      query: (data) => ({
        url: `/sendNotification`,
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["INDIVIDUALNOTIFICATION"],
    }),

    getIndividualNotification: build.query({
        query: (page) => ({
          url: `/admin/viewIndiNotifications?page=${page}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        providesTags: ["INDIVIDUALNOTIFICATION"],
      }),
  }),
});

export const { useAddIndividualNotificationMutation ,useGetIndividualNotificationQuery} = IndividualNotificationApi;
