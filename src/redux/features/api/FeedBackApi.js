import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const FeedbackApi = createApi({
  reducerPath: "FeedbackApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["FEEDBACK"],
  endpoints: (build) => ({
    getFeedback: build.query({
      query: (page) => ({
        url: `/admin/viewFeedback?page=2${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["FEEDBACK"],
    }),
    // getFeedbackById: build.query({
    //   query: (id) => ({
    //     url: `/Feedback/${id}`,
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   }),
    //   providesTags: ["Feedback"],
    // }),
    // getFeedbackBySearchData: build.query({
    //   query: (search) => ({
    //     url: `/Feedback/${search}`,
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   }),
    //   providesTags: ["Feedback"],
    // }),

     

    editFeedback: build.mutation({
      query: ({ id, data }) => ({
        url: `/admin/updateFeedback/65b7444098a0cac4879a4488/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["FEEDBACK"],
    }),
    deleteFeedback: build.mutation({
      query: (id) => ({
        url: `/admin/deleteFeedback/65b7444098a0cac4879a4488${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["FEEDBACK"],
    }),
  }),
});

export const { useGetFeedbackQuery, useGetFeedbackByIdQuery,useDeleteFeedbackMutation,
    useAddFeedbackMutation,useGetFeedbackBySearchDataQuery,useEditFeedbackMutation
} = FeedbackApi;
