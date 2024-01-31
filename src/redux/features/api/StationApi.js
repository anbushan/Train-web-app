import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const StationApi = createApi({
  reducerPath: "StationApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["STATION"],
  endpoints: (build) => ({
    getStation: build.query({
      query: (page) => ({
        url: `/info/getStation?searchString=tirunelveli${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["STATION"],
    }),
    // getStationById: build.query({
    //   query: (id) => ({
    //     url: `/Station/${id}`,
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   }),
    //   providesTags: ["Station"],
    // }),
    // getStationBySearchData: build.query({
    //   query: (search) => ({
    //     url: `/Station/${search}`,
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   }),
    //   providesTags: ["Station"],
    // }),

    addStation: build.mutation({
        query: (data) => ({
          url: `/admin/addStation`,
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["STATION"],
      }),
     

    editStation: build.mutation({
      query: ({ id, data }) => ({
        url: `/admin/updateStation/65b61b26e068a4e7d727ad84${id}`,
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["STATION"],
    }),
    deleteStation: build.mutation({
      query: (id) => ({
        url: `/admin/deleteStation/65b61b26e068a4e7d727ad84${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["STATION"],
    }),
  }),
});

export const { useGetStationQuery, useGetStationByIdQuery,useDeleteStationMutation,
    useAddStationMutation,useGetStationBySearchDataQuery,useEditStationMutation
} = StationApi;
