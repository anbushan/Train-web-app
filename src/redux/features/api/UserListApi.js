import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const UserListApi = createApi({
  reducerPath: "UserList",
  baseQuery: customFetchBase,
  tagTypes: [" USERLIST"],
  endpoints: (builder) => ({
    getUserList: builder.query({
      query: (page) => ({
        url: `/admin/users?page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["USERLIST"],
    }),

  
  }),
});

export const { useGetUserListQuery} = UserListApi;
