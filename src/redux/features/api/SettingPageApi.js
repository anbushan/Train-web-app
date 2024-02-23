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

   
   
  }),
});

export const { useGetSettingImageQuery} = SettingImageApi;
