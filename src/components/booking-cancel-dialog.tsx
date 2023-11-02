import { useCancelBook } from "@/hooks/useCancelBook";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setIsDeletingBooking } from "@/store/slices/bookingSlice";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";

export const BookingCancelDialog = () => {
  const dispatch = useAppDispatch();
  const { handleCancel } = useCancelBook();
  const selectedBooking = useAppSelector(
    (state) => state.booking.selectedBooking
  );

  const isDeletingBooking = useAppSelector(
    (state) => state.booking.isDeletingBooking
  );

  const handleCloseDialog = () => {
    dispatch(setIsDeletingBooking(false));
  };

  const handleConfirm = () => {
    handleCloseDialog();

    if (selectedBooking) {
      handleCancel(selectedBooking?.id);
    }
  };

  if (!selectedBooking) {
    return null;
  }

  return (
    <Dialog open={isDeletingBooking} onOpenChange={handleCloseDialog}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cancel Booking?</DialogTitle>
          <DialogDescription>
            Are you sure you want cancel this booking?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-5 justify-end flex flex-1">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="mt-3 md:mt-0">
              Close
            </Button>
          </DialogClose>
          <Button type="button" variant="destructive" onClick={handleConfirm}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
