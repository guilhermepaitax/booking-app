import { configureStore } from "@reduxjs/toolkit";

import propertyReducer from "./slices/propertySlice";
import bookingReducer from "./slices/bookingSlice";

export const store = configureStore({
  reducer: {
    property: propertyReducer,
    booking: bookingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
