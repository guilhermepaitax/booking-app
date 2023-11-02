import { useEditBook } from "@/hooks/useEditBook";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useBookProperty } from "@/hooks/useBookProperty";
import { setIsEditingBooking } from "@/store/slices/bookingSlice";

import { PropertyBook } from "./property-book";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

export const BookingEditDialog = () => {
  const dispatch = useAppDispatch();
  const { handleEdit } = useEditBook();
  const selectedBooking = useAppSelector(
    (state) => state.booking.selectedBooking
  );

  const bookProperty = useBookProperty({
    onSubmit: handleEdit,
    defaultValues: {
      guests: selectedBooking?.guests_count,
      date: {
        to: selectedBooking?.end_date,
        from: selectedBooking?.start_date,
      },
    },
    ignoreOverlappings: {
      from: selectedBooking?.start_date,
      to: selectedBooking?.end_date,
    },
  });

  const isEditingBooking = useAppSelector(
    (state) => state.booking.isEditingBooking
  );

  const handleCloseDialog = () => {
    dispatch(setIsEditingBooking(false));
  };

  if (!selectedBooking) {
    return null;
  }

  return (
    <Dialog open={isEditingBooking} onOpenChange={handleCloseDialog}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Booking</DialogTitle>
        </DialogHeader>

        <PropertyBook {...bookProperty} className="border-0 lg:mt-0 md:px-4" />
      </DialogContent>
    </Dialog>
  );
};
