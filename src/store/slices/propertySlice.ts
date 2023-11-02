import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IProperty } from "@/entities/property";
import { propertyService } from "@/services/property-service";
import { DateRange } from "react-day-picker";

interface IFilters {
  search?: string;
  date?: DateRange;
}

export interface IPropertyState {
  data: IProperty[];
  count: number;
  isLoading: boolean;
  selectedProperty: IProperty | null | undefined;
}

const getAllProperties = createAsyncThunk(
  "property/getAllProperties",
  async (filters?: IFilters | void) => {
    const response = await propertyService.getAll(filters);
    return response;
  }
);

const getPropertyBySlug = createAsyncThunk(
  "property/getPropertyBySlug",
  async (slug: string) => {
    const response = await propertyService.getBySlug(slug);
    return response;
  }
);

const initialState: IPropertyState = {
  data: [],
  count: 0,
  isLoading: false,
  selectedProperty: null,
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProperties.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProperties.fulfilled, (state, action) => {
      state.data = [...action.payload.data];
      state.count = action.payload.count;
      state.isLoading = false;
    });
    builder.addCase(getPropertyBySlug.pending, (state) => {
      state.isLoading = true;
      state.selectedProperty = null;
    });
    builder.addCase(getPropertyBySlug.fulfilled, (state, action) => {
      state.selectedProperty = action.payload.data;
      state.isLoading = false;
    });
  },
});

export { getAllProperties, getPropertyBySlug };

export default propertySlice.reducer;
