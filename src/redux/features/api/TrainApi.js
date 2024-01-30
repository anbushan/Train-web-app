import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const TrainApi = createApi({
  reducerPath: "TrainApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["TRAIN"],
  endpoints: (build) => ({
    getTrain: build.query({
      query: (page) => ({
        url: `/info/trainNames=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["TRAIN"],
    }),
    // getTrainById: build.query({
    //   query: (id) => ({
    //     url: `/Train/${id}`,
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   }),
    //   providesTags: ["TRAIN"],
    // }),
    // getTrainBySearchData: build.query({
    //   query: (search) => ({
    //     url: `/Train/${search}`,
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   }),
    //   providesTags: ["TRAIN"],
    // }),

    addTrain: build.mutation({
        query: (data) => ({
          url: `/admin/addTrain`,
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["TRAIN"],
      }),
     

    editTrain: build.mutation({
      query: ({ id, data }) => ({
        url: `/admin/updateTrain/65b62f7a91a9e059e0b6f909/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Train"],
    }),
    deleteTrain: build.mutation({
      query: (id) => ({
        url: `/admin/deleteTrain/65b62f7a91a9e059e0b6f909${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Train"],
    }),
  }),
});

export const { useGetTrainQuery, useGetTrainByIdQuery,useDeleteTrainMutation,
    useAddTrainMutation,useGetTrainBySearchDataQuery,useEditTrainMutation
} = TrainApi;
