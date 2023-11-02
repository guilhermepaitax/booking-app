import { useGetAllBookings } from "@/hooks/useGetAllBookings";

import { BookingItem } from "./booking-item";

export const BookingList = () => {
  const { data, count, isLoading } = useGetAllBookings();

  return (
    <div>
      <p className="text-3xl font-bold">Bookings list</p>

      {!count && !isLoading && (
        <p className="text-lg mt-10">No bookings found for you.</p>
      )}

      <div className="flex flex-col gap-3 mt-10">
        {data.map((booking) => (
          <BookingItem key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};
