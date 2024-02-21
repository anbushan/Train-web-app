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

    
    addMetroTrain: build.mutation({
      query: ({data,city}) => ({
        url: `/metro/addMumbaiMetro`,
        method: "POST",
        body: {
          "route": "test :left_right_arrow: test",
          "day": "weekend",
          "source": "CHENNAI CENTRAL",
          "destination": "GUindy",
          "via": "EGMORE, CMBT, ALANDUR",
          "first_train": "05:02am",
          "last_train": "11:17pm",
          "timing1": "05:00am - 08:00am, 11:00am - 05:00pm, 08:00pm - 10:00pm",
          "timing1_train_frequency": "Every 14 minutes",
          "timing2": "10:00pm - 11:00pm",
          "timing2_train_frequency": "Every 30 minutes",
          "timing3": "08:00am - 11:00am, 05:00pm - 08:00pm",
          "timing3_train_frequency": "Every 12 minutes"
      },
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["METROTRAIN"],
    }),

    editMetroTrain: build.mutation({
      query: ( {id, city,data }) => ({
        url: `/metro/update${city}Metro/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["METROTRAIN"],
    }),

    deleteMetroTrain: build.mutation({
      query: (city,id) => ({
        url: `/metro/delete${city}Metro/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["METROTRAIN"],
    }),
   
   
  }),
});

export const {
    useGetChennaiMetroQuery,
    useDeleteMetroTrainMutation,
    useAddMetroTrainMutation,
    useEditMetroTrainMutation,
  useGetPuneLocalQuery,
  useGetHyderabadLocalQuery,
} = MetroTrainApi;
