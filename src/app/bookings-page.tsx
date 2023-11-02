import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import { useAppSelector } from "@/hooks/useAppSelector";

import { Button } from "@/components/ui/button";
import { BookingList } from "@/components/booking-list";
import { BookingEditDialog } from "@/components/booking-edit-dialog";
import { BookingCancelDialog } from "@/components/booking-cancel-dialog";

export const BookingsPage = () => {
  const isEditing = useAppSelector((state) => state.booking.isEditingBooking);
  const isDeleting = useAppSelector((state) => state.booking.isDeletingBooking);

  return (
    <>
      <div className="container pt-10">
        <Button variant="secondary" asChild>
          <Link to="/">
            <ChevronLeft />
            <span>Back to Home</span>
          </Link>
        </Button>

        <div className="w-full my-10">
          <BookingList />
        </div>
      </div>

      {isEditing && <BookingEditDialog />}
      {isDeleting && <BookingCancelDialog />}
    </>
  );
};
