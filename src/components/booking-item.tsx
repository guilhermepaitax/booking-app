import { format } from "date-fns";
import { Calendar, DollarSign, MapPin, Users } from "lucide-react";

import { IBooking } from "@/entities/booking";
import { formatCurrency } from "@/lib/formatCurrency";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  setIsDeletingBooking,
  setIsEditingBooking,
  getBookingById,
} from "@/store/slices/bookingSlice";
import { getPropertyBySlug } from "@/store/slices/propertySlice";

import { Button } from "./ui/button";

interface IBookingItemProps {
  booking: IBooking;
}

export const BookingItem = ({ booking }: IBookingItemProps) => {
  const dispatch = useAppDispatch();

  const handleCancelBooking = async () => {
    await dispatch(getBookingById(booking.id));
    dispatch(setIsDeletingBooking(true));
  };

  const handleEditBooking = async () => {
    await Promise.all([
      dispatch(getBookingById(booking.id)),
      dispatch(getPropertyBySlug(booking.property?.slug!)),
    ]);

    dispatch(setIsEditingBooking(true));
  };

  if (!booking) {
    return null;
  }

  return (
    <div className="w-full border rounded-lg flex flex-col md:flex-row justify-between overflow-hidden">
      <div className="flex flex-1 items-center gap-5 p-8">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold text-green-700 bg-green-100 rounded-md py-1 px-3 w-fit">
            Booked
          </span>
          <span className="text-lg font-medium mt-3">
            {booking.property?.title}
          </span>
          <span className="text-muted-foreground text-base flex gap-2 items-center">
            <MapPin className="h-4 w-4" />
            {booking.property?.location}
          </span>

          <div className="flex items-center flex-wrap gap-3">
            <span className="text-muted-foreground text-base flex gap-2 items-center">
              <Calendar className="h-4 w-4" />
              Date:
            </span>
            <span className="text-muted-foreground text-base flex gap-2 items-center">
              {format(booking.start_date, "LLL dd, y")} -{" "}
              {format(booking.end_date, "LLL dd, y")}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground text-base flex gap-2 items-center">
              <Users className="h-4 w-4" />
              Guests:
            </span>
            <span className="text-muted-foreground text-base flex gap-2 items-center">
              {booking.guests_count}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground text-base flex gap-2 items-center">
              <DollarSign className="h-4 w-4" />
              Total:
            </span>
            <span className="text-muted-foreground text-base flex gap-2 items-center">
              {formatCurrency({ value: booking.total_price })}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4 justify-end border-t md:border-t-0 py-4 px-5 md:p-8">
        <Button variant="outline" onClick={handleEditBooking}>
          Edit
        </Button>
        <Button variant="destructive" onClick={handleCancelBooking}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
