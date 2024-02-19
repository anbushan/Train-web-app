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
  useGetDelhiLocalQuery,
  useGetKolkataLocalQuery,
  useGetMumbaiLocalQuery,
  useGetPuneLocalQuery,
  useGetHyderabadLocalQuery,
} = LocalTrainApi;
