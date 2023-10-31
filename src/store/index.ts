import { configureStore } from "@reduxjs/toolkit";

import propertyReducer from "./slices/propertySlice";

export const store = configureStore({
  reducer: {
    property: propertyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
