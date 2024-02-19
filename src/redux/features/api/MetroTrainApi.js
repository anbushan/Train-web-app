import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const MetroTrainApi = createApi({
  reducerPath: "MetroTrainApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["METROTRAIN"],
  endpoints: (build) => ({
    getChennaiMetro: build.query({
      query: ({ page, city }) => ({
        url: `/metro/view${city}Metro?page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["METROTRAIN"],
    }),
   
  }),
});

export const {
    useGetChennaiMetroQuery,
  useGetDelhiLocalQuery,
  useGetKolkataLocalQuery,
  useGetMumbaiLocalQuery,
  useGetPuneLocalQuery,
  useGetHyderabadLocalQuery,
} = MetroTrainApi;
