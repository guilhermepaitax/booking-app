import { IBooking } from "@/entities/booking";
import bookings from "@/lib/bookings";
import properties from "@/lib/properties";

interface IGetByIdResponse {
  data: IBooking | null;
}

export const getById = async (id: string): Promise<IGetByIdResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 50));

  const booking = bookings.find((b) => b.id === id);

  if (!booking) {
    throw new Error("Booking not found!");
  }

  const property = properties.find((p) => p.id === booking.id_property);

  return {
    data: { ...booking, property },
  };
};
