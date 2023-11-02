import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IBooking } from "@/entities/booking";

import { bookingService } from "@/services/booking-service";
import { ICreateRequest } from "@/services/booking-service/create";
import { IUpdateRequest } from "@/services/booking-service/update";

export interface IBookingState {
  data: IBooking[];
  count: number;
  isLoading: boolean;
  isLoadingMutation: boolean;
  isEditingBooking: boolean;
  isDeletingBooking: boolean;
  selectedBooking: IBooking | null;
}

const getAllBookings = createAsyncThunk("booking/getAllBookings", async () => {
  const response = await bookingService.getAll();
  return response;
});

const getBookingById = createAsyncThunk(
  "booking/getBookingById",
  async (id: string) => {
    const response = await bookingService.getById(id);
    return response;
  }
);

const createBoook = createAsyncThunk(
  "booking/createBoook",
  async (data: ICreateRequest) => {
    const response = await bookingService.create(data);
    return response;
  }
);

const updateBoook = createAsyncThunk(
  "booking/updateBoook",
  async (data: IUpdateRequest) => {
    const response = await bookingService.update(data);
    return response;
  }
);

const deleteBoook = createAsyncThunk(
  "booking/deleteBoook",
  async (id: string) => {
    await bookingService.cancel(id);
    return id;
  }
);

const initialState: IBookingState = {
  data: [],
  count: 0,
  isLoading: false,
  isLoadingMutation: false,
  isEditingBooking: false,
  isDeletingBooking: false,
  selectedBooking: null,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setIsDeletingBooking: (state, action: PayloadAction<boolean>) => {
      state.isDeletingBooking = action.payload;
    },
    setIsEditingBooking: (state, action: PayloadAction<boolean>) => {
      state.isEditingBooking = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBookings.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllBookings.fulfilled, (state, action) => {
      state.data = [...action.payload.data];
      state.count = action.payload.count;
      state.isLoading = false;
    });
    builder.addCase(getBookingById.pending, (state) => {
      state.isLoading = true;
      state.selectedBooking = null;
    });
    builder.addCase(getBookingById.fulfilled, (state, action) => {
      state.selectedBooking = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(createBoook.pending, (state) => {
      state.isLoadingMutation = true;
    });
    builder.addCase(createBoook.fulfilled, (state, action) => {
      state.count = state.count + 1;
      state.isLoadingMutation = false;
      state.data = [...state.data, action.payload];
    });
    builder.addCase(deleteBoook.pending, (state) => {
      state.isLoadingMutation = true;
    });
    builder.addCase(deleteBoook.fulfilled, (state, action) => {
      state.count = state.count - 1;
      state.isLoadingMutation = false;
      state.data = [...state.data.filter((b) => b.id !== action.payload)];
    });
    builder.addCase(updateBoook.pending, (state) => {
      state.isLoadingMutation = true;
    });
    builder.addCase(updateBoook.fulfilled, (state, action) => {
      state.isLoadingMutation = false;
      state.data = [
        ...state.data.filter((b) => b.id !== action.payload.id),
        action.payload,
      ];
    });
  },
});

export {
  getAllBookings,
  getBookingById,
  deleteBoook,
  createBoook,
  updateBoook,
};

export const { setIsDeletingBooking, setIsEditingBooking } =
  bookingSlice.actions;

export default bookingSlice.reducer;
