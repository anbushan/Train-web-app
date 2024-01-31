import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/userSlice";
import { AuthApi } from "./api/AuthApi";
import { TrainInfoApi } from "./api/TrainInfoApi";
import { TrainApi } from "./api/TrainApi";
import { StationApi } from "./api/StationApi";
import { NotificationApi } from "./api/NotificationApi";
import { FeedbackApi } from "./api/FeedBackApi";

export const store = configureStore({
  reducer: {
    User: UserReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [TrainInfoApi.reducerPath]:TrainInfoApi.reducer,
    [TrainApi.reducerPath]:TrainApi.reducer,
    [StationApi.reducerPath]:StationApi.reducer,
    [NotificationApi.reducerPath]:NotificationApi.reducer,
    [FeedbackApi.reducerPath]:FeedbackApi.reducer,
    },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      AuthApi.middleware,TrainInfoApi.middleware,TrainApi.middleware,StationApi.middleware,NotificationApi.middleware,FeedbackApi.middleware,

       ]),
});
