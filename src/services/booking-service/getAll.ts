import { IBooking } from "@/entities/booking";
import bookings from "@/lib/bookings";
import properties from "@/lib/properties";

interface IGetAllResponse {
  data: IBooking[];
  count: number;
}

export const getAll = async (): Promise<IGetAllResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 50));

  const data = bookings.map((booking) => {
    const property = properties.find((p) => p.id === booking.id_property);

    return { ...booking, property };
  });

  return {
    data,
    count: data.length,
  };
};
