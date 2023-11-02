import { IBooking } from "@/entities/booking";
import bookings from "@/lib/bookings";
import { calculateTotalPrice } from "@/lib/calculateTotalPrice";
import properties from "@/lib/properties";

type IUpdateResponse = IBooking;

export interface IUpdateRequest {
  data: {
    id: string;
    id_property: string;
    start_date: Date;
    end_date?: Date;
    guests_count?: number;
  };
}

export const update = async ({
  data,
}: IUpdateRequest): Promise<IUpdateResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 50));

  const property = properties.find((p) => p.id === data.id_property);
  const bookIndex = bookings.findIndex((p) => p.id === data.id);

  if (bookIndex === -1) {
    throw new Error("Book not found!");
  }

  if (!property) {
    throw new Error("Property not found!");
  }

  const total_price = calculateTotalPrice({
    endDate: data.end_date,
    startDate: data.start_date,
    valuePerNight: property.price_per_night,
  });

  const newBook = { ...bookings[bookIndex], ...data, total_price };

  bookings[bookIndex] = newBook;

  return { ...newBook, property };
};
