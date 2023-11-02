import { useCallback } from "react";

import { setIsEditingBooking, updateBoook } from "@/store/slices/bookingSlice";

import { useToast } from "@/components/ui/use-toast";
import { IBookData } from "./useBookProperty";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

export const useEditBook = () => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const selectedBooking = useAppSelector(
    (state) => state.booking.selectedBooking
  );

  const handleEdit = useCallback(
    async (data: IBookData) => {
      try {
        if (!selectedBooking) return;

        await dispatch(
          updateBoook({ data: { id: selectedBooking?.id, ...data } })
        );
        dispatch(setIsEditingBooking(false));
        toast({ variant: "default", title: "Success edit book!" });
      } catch (error) {
        toast({ variant: "destructive", title: "Error edit book!" });
      }
    },
    [dispatch, toast, selectedBooking]
  );

  return { handleEdit };
};
