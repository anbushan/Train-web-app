import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const LocalTrainApi = createApi({
  reducerPath: "LocalTrainApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["LOCALTRAIN"],
  endpoints: (build) => ({
    getChennaiLocal: build.query({
      query: ({ page, city }) => ({
        url: `/local/admin${city}LocalTrains?page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["LOCALTRAIN"],
    }),

    addLocalTrain: build.mutation({
      query: ({data,city}) => ({
        url: `/local/addLocalTrains/${city}`,
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["LOCALTRAIN"],
    }),

    editLocalTrain: build.mutation({
      query: ( id, city,data ) => ({
        url: `/local/updateLocalTrains/${city}/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["LOCALTRAIN"],
    }),

    deleteLocalTrain: build.mutation({
      query: (city,id) => ({
        url: `/local/deleteLocalTrains/${city}/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["LOCALTRAIN"],
    }),
   
   
  }),
});

export const {
    useGetChennaiLocalQuery,
    useDeleteLocalTrainMutation,
    useAddLocalTrainMutation,
    useEditLocalTrainMutation,
  useGetMumbaiLocalQuery,
  useGetPuneLocalQuery,
  useGetHyderabadLocalQuery,
} = LocalTrainApi;
