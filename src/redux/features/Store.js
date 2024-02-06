import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/userSlice";
import { AuthApi } from "./api/AuthApi";
import { TrainApi } from "./api/TrainApi";
import { StationApi } from "./api/StationApi";
import { NotificationApi } from "./api/NotificationApi";
import { DashboardApi } from "./api/DashboardApi";
import { UserListApi } from "./api/UserListApi";
import { WithdrawrequestApi } from "./api/WithdrawRequestApi";
import { WithdrawhistoryApi } from "./api/WithdrawHistoryApi";
import { IssueApi } from "./api/IssueApi";
import { FeedbackApi } from "./api/FeedBackApi";

export const store = configureStore({
  reducer: {
    User: UserReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [UserListApi.reducerPath]: UserListApi.reducer,
    [TrainApi.reducerPath]: TrainApi.reducer,
    [StationApi.reducerPath]: StationApi.reducer,
    [NotificationApi.reducerPath]: NotificationApi.reducer,
    [FeedbackApi.reducerPath]: FeedbackApi.reducer,
    [DashboardApi.reducerPath]: DashboardApi.reducer,
    [WithdrawrequestApi.reducerPath]: WithdrawrequestApi.reducer,
    [WithdrawhistoryApi.reducerPath]: WithdrawhistoryApi.reducer,
    [IssueApi.reducerPath]:IssueApi.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      AuthApi.middleware,
      UserListApi.middleware,
      TrainApi.middleware,
      StationApi.middleware,
      NotificationApi.middleware,
      FeedbackApi.middleware,
      DashboardApi.middleware,
      WithdrawrequestApi.middleware,
      WithdrawhistoryApi.middleware,
      IssueApi.middleware,
    ]),
});
