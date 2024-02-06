import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const UserListApi = createApi({
  reducerPath: "UserList",
  baseQuery: customFetchBase,
  tagTypes: [" USERLIST"],
  endpoints: (build) => ({
    getUserList: build.query({
      query: (page) => ({
        url: `/admin/users?page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["USERLIST"],
    }),

    addUserList: build.mutation({
      query: (data) => ({
        url: `/register`,
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["USERLIST"],
    }),
   
  }),
});

export const { useGetUserListQuery,useAddUserListMutation} = UserListApi;
