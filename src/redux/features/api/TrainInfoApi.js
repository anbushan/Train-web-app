import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const TrainInfoApi = createApi({
  reducerPath: "TrainInfoApi",
  baseQuery: customFetchBase,
  tagTypes: ["  TRAININFO"],
  endpoints: (builder) => ({
    getTrainInfoApi: builder.query({
      query: (page) => ({
        url: `/admin/users?page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["TRAININFO"],
    }),

  
  }),
});

export const {
  useAddTrainInfoApiMutation,
  useDeleteTrainInfoApiMutation,
  useEditTrainInfoApiMutation,
  useGetTrainInfoApiByIdQuery,
  useGetTrainInfoApiQuery,
} = TrainInfoApi;
