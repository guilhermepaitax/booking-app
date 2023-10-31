import { createSlice } from "@reduxjs/toolkit";

import { IProperty } from "@/entities/property";

export interface IPropertyState {
  data: IProperty[];
  count: number;
}

const initialState: IPropertyState = {
  count: 0,
  data: [],
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    getAll: (state) => {
      state.data = [];
    },
  },
});

export const { getAll } = propertySlice.actions;

export default propertySlice.reducer;
