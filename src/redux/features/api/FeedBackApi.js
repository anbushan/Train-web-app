import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const FeedbackApi = createApi({
  reducerPath: "FeedbackApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["FEEDBACK"],
  endpoints: (build) => ({
    getFeedback: build.query({
      query: () => ({
        url: `/admin/viewFeedback`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["FEEDBACK"],
    }),
   

      deleteFeedback: build.mutation({
      query: (id) => ({
        url: `/admin/deleteFeedback/65c1eae02bf65fad86208a68${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["FEEDBACK"],
    }),
  }),
});

export const { useGetFeedbackQuery, useGetFeedbackByIdQuery,useDeleteFeedbackMutation} = FeedbackApi;
