import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const SettingImageApi = createApi({
  reducerPath: "SettingImageApi",
  baseQuery: customFetchBase,
  tagTypes: [" SETTINGIMAGE"],
  endpoints: (build) => ({
    getSettingImage: build.query({
      query: () => ({
        url: `/admin/viewBanner`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["SETTINGIMAGE"],
    }),

    editSettingImage: build.mutation({
      query: ({  data }) => ({
        url: `/admin/updateBanner/65bca70d45f5ff99f43a2a57`,
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["SETTINGIMAGE"],
    }),
   
  }),
});

export const { useGetSettingImageQuery,useEditSettingImageMutation} = SettingImageApi;
